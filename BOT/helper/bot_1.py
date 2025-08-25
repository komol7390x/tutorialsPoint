# RSI-based XAUUSD bot (MT5 + Python) — demo uchun
import MetaTrader5 as mt5
import time, math
import numpy as np
from datetime import datetime

# ========== SOZLAMALAR ========== #
LOGIN = 12345678           # <- o'zingizning account raqamingiz
PASSWORD = "your_password" # <- parol
SERVER = "Broker-Server"   # <- MT5 login oynasidagi server nomini aynan shu ko'rinishda yozing

SYMBOL = "XAUUSD"          # brokerga qarab nom o'zgarishi mumkin — tekshiring
TIMEFRAME = mt5.TIMEFRAME_M5
RSI_PERIOD = 14
RSI_OVERSOLD = 30
RSI_OVERBOUGHT = 70

RISK_PERCENT = 1.0         # hisob balansining necha foizini riskga qo'yamiz (masalan 1%)
STOP_LOSS_USD = 30         # SL qiymatini dollarda berish (goldda oddiy variant)
TP_MULTIPLIER = 2.0        # TP = SL * TP_MULTIPLIER
CHECK_INTERVAL = 5        # soniya — indikator tekshiruv oralig'i
# ================================= #

from datetime import datetime

def connect(max_retries=5, wait_time=10): 
    """
    MT5 ga ulanish funksiyasi.
    max_retries - necha marta qayta urinish kerak
    wait_time - har bir urinish orasida kutish (soniya)
    """
    attempt = 0
    while attempt < max_retries:
        now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{now}] >>> MT5 ga ulanmoqda... (urinish {attempt+1}/{max_retries})")

        if not mt5.initialize():
            print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] ❌ MT5 initialize() failed:", mt5.last_error())
        else:
            print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] >>> Login urinilmoqda: LOGIN={LOGIN}, SERVER={SERVER}")
            authorized = mt5.login(LOGIN, password=PASSWORD, server=SERVER)
            if authorized:
                acc = mt5.account_info()
                if acc is not None:
                    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] ✅ MT5 accountga ulandi!")
                    print(f"   Account ID: {acc.login}")
                    print(f"   Ism (name): {acc.name}")
                    print(f"   Server:     {acc.server}")
                    print(f"   Balance:    {acc.balance} {acc.currency}")
                    print(f"   Leverage:   {acc.leverage}")
                return True
            else:
                print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] ❌ Login failed:", mt5.last_error())
                mt5.shutdown()

        attempt += 1
        print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] ⏳ {wait_time} soniya kutmoqda, keyin qayta urinish...")

        # Real vaqtni sanab ko‘rsatish
        for sec in range(wait_time, 0, -1):
            now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            print(f"   >> Qayta urinishga qolgan vaqt: {sec} soniya | {now}", end="\r")
            time.sleep(1)
        print()  # yangi qatordan boshlash
    
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] ❌ Ulanish muvaffaqiyatsiz. Serverni tekshiring yoki terminalni qayta ishga tushiring.")
    return False


def ensure_symbol(sym):
    info = mt5.symbol_info(sym)
    if info is None:
        print(f"❌ Symbol {sym} topilmadi terminalda.")
        return None
    if not info.visible:
        mt5.symbol_select(sym, True)
    print(f"✅ Symbol {sym} tayyor (contract size={info.trade_contract_size}, min lot={info.volume_min})")
    return info

def get_last_closes(symbol, timeframe, count):
    rates = mt5.copy_rates_from_pos(symbol, timeframe, 0, count)
    if rates is None or len(rates) == 0:
        return None
    closes = np.array([r['close'] for r in rates])
    return closes

def compute_rsi(closes, period=14):
    if len(closes) < period+1:
        return None
    deltas = np.diff(closes)
    gains = np.where(deltas > 0, deltas, 0.0)
    losses = np.where(deltas < 0, -deltas, 0.0)
    avg_gain = gains[-period:].mean()
    avg_loss = losses[-period:].mean()
    if avg_loss == 0:
        return 100.0
    rs = avg_gain / avg_loss
    return 100.0 - (100.0 / (1.0 + rs))

def calculate_lot_by_risk(symbol_info, risk_percent, sl_price_diff):
    acc = mt5.account_info()
    if acc is None:
        return None
    balance = acc.balance
    risk_amount = balance * (risk_percent / 100.0)
    contract = symbol_info.trade_contract_size
    if sl_price_diff <= 0 or contract <= 0:
        raw_lot = symbol_info.volume_min
    else:
        raw_lot = risk_amount / (sl_price_diff * contract)
    step = symbol_info.volume_step
    vol_min = symbol_info.volume_min
    vol_max = symbol_info.volume_max
    steps = math.floor(raw_lot / step) if step > 0 else 0
    vol = max(vol_min, min(vol_max, steps * step))
    return vol

def open_order(symbol, order_type, volume, sl, tp, deviation=20):
    tick = mt5.symbol_info_tick(symbol)
    price = tick.ask if order_type == mt5.ORDER_TYPE_BUY else tick.bid
    request = {
        "action": mt5.TRADE_ACTION_DEAL,
        "symbol": symbol,
        "volume": volume,
        "type": order_type,
        "price": price,
        "sl": sl,
        "tp": tp,
        "deviation": deviation,
        "magic": 123456,
        "comment": "RSI bot",
        "type_time": mt5.ORDER_TIME_GTC,
        "type_filling": mt5.ORDER_FILLING_IOC,
    }
    result = mt5.order_send(request)
    print(f"📌 Order yuborildi ({'BUY' if order_type==mt5.ORDER_TYPE_BUY else 'SELL'}):", result)
    return result

def main_loop():
    if not connect():
        return
    info = ensure_symbol(SYMBOL)
    if info is None:
        return
    print(">>> Bot ishga tushdi, RSI signal kutmoqda...")
    while True:
        closes = get_last_closes(SYMBOL, TIMEFRAME, RSI_PERIOD+5)
        if closes is None:
            print("⚠️ Data yo‘q. Kutmoqda...")
            time.sleep(CHECK_INTERVAL)
            continue
        rsi_value = compute_rsi(closes, RSI_PERIOD)
        print(datetime.now(), f"RSI={rsi_value:.2f}")
        tick = mt5.symbol_info_tick(SYMBOL)
        price = tick.ask
        sl_price_diff = STOP_LOSS_USD
        lot = calculate_lot_by_risk(info, RISK_PERCENT, sl_price_diff)
        if lot is None or lot < info.volume_min:
            print("⚠️ Lot juda kichik; risk/depositni moslang.")
        else:
            if rsi_value is not None and rsi_value < RSI_OVERSOLD:
                sl = price - sl_price_diff
                tp = price + sl_price_diff * TP_MULTIPLIER
                open_order(SYMBOL, mt5.ORDER_TYPE_BUY, lot, sl, tp)
            elif rsi_value is not None and rsi_value > RSI_OVERBOUGHT:
                sl = price + sl_price_diff
                tp = price - sl_price_diff * TP_MULTIPLIER
                open_order(SYMBOL, mt5.ORDER_TYPE_SELL, lot, sl, tp)
        time.sleep(CHECK_INTERVAL)

if __name__ == "__main__":
    main_loop()
