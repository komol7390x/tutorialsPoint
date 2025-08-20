//+------------------------------------------------------------------+
//|                                                   RSI_Bot.mq5    |
//|                     Simple RSI crossing EA by Komol & ChatGPT    |
//+------------------------------------------------------------------+
#property copyright "Free for educational use"
#property version "1.2"
#property strict

#include <Trade/Trade.mqh>
CTrade trade;

//----------------------- Inputs ------------------------------------
input int RSI_Period = 14;         // RSI period
input double RSI_BuyLevel = 30.0;  // Buy qismi (pastdan yuqoriga kesib o‘tsa)
input double RSI_SellLevel = 70.0; // Sell qismi (yuqoridan pastga kesib o‘tsa)
input ENUM_APPLIED_PRICE RSI_Price = PRICE_CLOSE;

input int SL_Points = 800;          // Stop Loss (points)
input int TP_Points = 1200;         // Take Profit (points)
input bool Use_TrailingStop = true; // Trailing yoqish
input int TS_Start_Points = 800;    // Trailing ishga tushadigan daraja
input int TS_Step_Points = 200;     // Trailing qadam

input bool One_Trade_Per_Symbol = true; // Bitta pozitsiya yetarli
input double Fixed_Lots = 0.10;         // Fiks lot (foiz o‘chirilgan bo‘lsa)
input bool Use_Risk_Percent = false;    // true bo‘lsa lotni risk % bilan hisoblaydi
input double Risk_Percent = 1.0;        // Balansdan risk %

input int Max_Spread_Points = 250;  // Maks spred (points)
input int Start_Hour = 0;           // Savdo boshlanish vaqti (server soati)
input int End_Hour = 24;            // Savdo tugash vaqti [0..24]
input bool Trade_On_New_Bar = true; // Faqat yangi shamda signal

input long MagicNumber = 20250819;
input bool Allow_Buy = true;
input bool Allow_Sell = true;

//----------------------- Globals -----------------------------------
int handleRSI = INVALID_HANDLE;
MqlTick lastTick;
datetime lastBarTime = 0;

//----------------------- Helpers -----------------------------------
double NormalizeLots(double lots)
{
    double minLot = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_MIN);
    double maxLot = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_MAX);
    double lotStep = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_STEP);
    lots = MathMax(minLot, MathMin(lots, maxLot));
    return MathRound(lots / lotStep) * lotStep;
}

double LotsByRisk(int stop_points)
{
    // Risk % bo‘yicha lotni hisoblash (1 lot uchun 1 point pul qiymati orqali)
    double balance = AccountInfoDouble(ACCOUNT_BALANCE);
    double riskMoney = balance * (Risk_Percent / 100.0);

    double tick_value = SymbolInfoDouble(_Symbol, SYMBOL_TRADE_TICK_VALUE);
    double tick_size = SymbolInfoDouble(_Symbol, SYMBOL_TRADE_TICK_SIZE);
    if (tick_value <= 0 || tick_size <= 0)
        return NormalizeLots(Fixed_Lots);

    double value_per_point_per_lot = tick_value / tick_size; // 1 lot uchun 1 point narxi
    double loss_per_lot_at_SL = stop_points * value_per_point_per_lot;

    if (loss_per_lot_at_SL <= 0)
        return NormalizeLots(Fixed_Lots);
    double lots = riskMoney / loss_per_lot_at_SL;
    return NormalizeLots(lots);
}

bool SpreadOK()
{
    if (!SymbolInfoTick(_Symbol, lastTick))
        return false;
    double spread_points = (lastTick.ask - lastTick.bid) / _Point;
    return (spread_points <= Max_Spread_Points);
}

bool TimeOK()
{
    // Server soatiga qarab filtrlash
    datetime t = TimeCurrent();
    int hour = TimeHour(t);
    if (Start_Hour <= End_Hour)
        return (hour >= Start_Hour && hour < End_Hour);
    // agar 22..02 kabi "o‘ralib o‘tish" bo‘lsa
    return (hour >= Start_Hour || hour < End_Hour);
}

bool IsNewBar()
{
    if (!Trade_On_New_Bar)
        return true;
    datetime t0 = iTime(_Symbol, PERIOD_CURRENT, 0);
    if (t0 == 0)
        return false;
    if (t0 != lastBarTime)
    {
        lastBarTime = t0;
        return true;
    }
    return false;
}

int PositionsCountByMagic()
{
    int total = 0;
    for (int i = 0; i < PositionsTotal(); i++)
    {
        ulong ticket = PositionGetTicket(i);
        if (PositionSelectByTicket(ticket))
        {
            if (PositionGetString(POSITION_SYMBOL) == _Symbol &&
                (long)PositionGetInteger(POSITION_MAGIC) == MagicNumber)
                total++;
        }
    }
    return total;
}

void TrailPosition()
{
    if (!Use_TrailingStop)
        return;
    if (!PositionSelect(_Symbol))
        return;

    long type = (long)PositionGetInteger(POSITION_TYPE);
    double price_open = PositionGetDouble(POSITION_PRICE_OPEN);
    double sl = PositionGetDouble(POSITION_SL);
    double tp = PositionGetDouble(POSITION_TP);

    if (!SymbolInfoTick(_Symbol, lastTick))
        return;

    if (type == POSITION_TYPE_BUY)
    {
        double profit_points = (lastTick.bid - price_open) / _Point;
        if (profit_points > TS_Start_Points)
        {
            double newSL = lastTick.bid - TS_Step_Points * _Point;
            if (newSL > sl + (TS_Step_Points * _Point / 2.0)) // faqat oldinga
            {
                trade.PositionModify(_Symbol, newSL, tp);
            }
        }
    }
    else if (type == POSITION_TYPE_SELL)
    {
        double profit_points = (price_open - lastTick.ask) / _Point;
        if (profit_points > TS_Start_Points)
        {
            double newSL = lastTick.ask + TS_Step_Points * _Point;
            if (newSL < sl - (TS_Step_Points * _Point / 2.0))
            {
                trade.PositionModify(_Symbol, newSL, tp);
            }
        }
    }
}

//----------------------- Init/Deinit --------------------------------
int OnInit()
{
    trade.SetExpertMagicNumber(MagicNumber);

    handleRSI = iRSI(_Symbol, PERIOD_CURRENT, RSI_Period, RSI_Price);
    if (handleRSI == INVALID_HANDLE)
    {
        Print("RSI yaratilmadi, xatolik: ", GetLastError());
        return INIT_FAILED;
    }
    // Birinchi bar vaqtini saqlab qo‘yamiz
    lastBarTime = iTime(_Symbol, PERIOD_CURRENT, 0);
    return INIT_SUCCEEDED;
}

void OnDeinit(const int reason)
{
    if (handleRSI != INVALID_HANDLE)
        IndicatorRelease(handleRSI);
}

//----------------------- Main --------------------------------------
void OnTick()
{
    // Filtrlar
    if (!SpreadOK())
        return;
    if (!TimeOK())
        return;
    if (!IsNewBar())
    {
        TrailPosition();
        return;
    }

    // 1-pozitsiya qoidasimi?
    if (One_Trade_Per_Symbol && PositionsCountByMagic() > 0)
    {
        TrailPosition();
        return;
    }

    // RSI qiymatlarini olamiz (yopilgan shamdan)
    double rsi[3];
    if (CopyBuffer(handleRSI, 0, 0, 3, rsi) < 3)
        return;
    double rsi0 = rsi[0]; // joriy sham (yopilmagan) - faqat cross tekshirish uchun
    double rsi1 = rsi[1]; // yopilgan so‘nggi sham
    double rsi2 = rsi[2]; // undan oldingi

    // SIGNAL: kesib o‘tish (cross)
    bool buySignal = (Allow_Buy && rsi2 < RSI_BuyLevel && rsi1 > RSI_BuyLevel);
    bool sellSignal = (Allow_Sell && rsi2 > RSI_SellLevel && rsi1 < RSI_SellLevel);

    // Lot hajmi
    double lots = Fixed_Lots;
    if (Use_Risk_Percent)
        lots = LotsByRisk(SL_Points);

    if (!SymbolInfoTick(_Symbol, lastTick))
        return;

    // BUY
    if (buySignal)
    {
        double sl = lastTick.bid - SL_Points * _Point;
        double tp = (TP_Points > 0) ? lastTick.bid + TP_Points * _Point : 0.0;
        trade.Buy(lots, _Symbol, lastTick.ask, sl, tp, "RSI BUY");
    }

    // SELL
    if (sellSignal)
    {
        double sl = lastTick.ask + SL_Points * _Point;
        double tp = (TP_Points > 0) ? lastTick.ask - TP_Points * _Point : 0.0;
        trade.Sell(lots, _Symbol, lastTick.bid, sl, tp, "RSI SELL");
    }

    // Trailing
    TrailPosition();
}
//+------------------------------------------------------------------+
