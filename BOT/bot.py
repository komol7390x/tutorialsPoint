import time
from datetime import datetime
import MetaTrader5 as mt5
import os
import math

from BOT.config.config import SYMBOL, TIMEFRAME, RSI_PERIOD,SERVER ,RSI_SELL, RSI_BUY, STOP_LOSS_USD, TP_MULTIPLIER, RISK_PERCENT, CHECK_INTERVAL
from BOT.connector.connector import connect
from BOT.utils.utils import ensure_symbol, get_last_closes, compute_rsi
from BOT.risk.risk import calculate_lot_by_risk
from BOT.trade.trade import open_order
from BOT.position.show import show_positions
from BOT.utils.order_once import open_order_once

def main_loop():
    # MT5 serveriga ulanishga harakat qilamiz
    checkConnect=connect()
    if not checkConnect:
        return  # Agar ulanish muvaffaqiyatsiz bo‘lsa, funksiya tugaydi

    # Savdo qilinadigan simbolni tekshirish va olish
    info = ensure_symbol(SYMBOL)

    if info is None:
        return  # Agar simbol topilmasa, funksiya tugaydi

    # Asosiy doimiy sikl
    while True:
        os.system("cls")  # Konsolni tozalash (Windows uchun)
        print("\n>>> Bot ishga tushdi, RSI signal kutmoqda...")
        print(f"\n✅ Account ulandi\nLOGIN = {checkConnect.login},\nBALANCE = {checkConnect.balance} {checkConnect.currency}\nSERVER = {SERVER}\n")
        
        
        # Oxirgi yopilish narxlarini olish
        closes = get_last_closes(SYMBOL, TIMEFRAME, RSI_PERIOD+5)
        if closes is None:
            print("⚠️ Data yo'q. Kutmoqda...")
            time.sleep(CHECK_INTERVAL)  # Malumot kelguncha kutish
            continue

        # RSI qiymatini hisoblash
        rsi_value = compute_rsi(closes, RSI_PERIOD)
        # TimeFrame ni soat ko‘rinishida chiqarish
        timeFrame=f"{math.floor(TIMEFRAME/60/60)} HOUR"
        # Hozirgi simbol, timeframe va RSI qiymatini ko‘rsatish
        print(f"{SYMBOL} | Timeframe: {timeFrame} | RSI={rsi_value:0.2f}")
        print(datetime.now())  # Hozirgi vaqtni chiqarish
        
        show_positions(SYMBOL)
        check=open_order_once(SYMBOL)
        if(check):
            print(f"\n📌 Hozirgi pozitsiya mavjud ({SYMBOL}). Yangi order ochilmadi.")
        else:
            if 50 < rsi_value:
                print(f"Kutilyatgan pozitsiya SELL: {RSI_SELL}")
            else:
                print(f"Kutilyatgan pozitsiya BUY: {RSI_BUY}")

        # Hozirgi ask narxini olish
        tick = mt5.symbol_info_tick(SYMBOL)
        price = tick.ask

        # Lot hajmini hisoblash riskga asoslanib
        lot = calculate_lot_by_risk(info, RISK_PERCENT, STOP_LOSS_USD)
        # Agar lot minimaldan kichik bo‘lsa, ogohlantirish
        if lot is None or lot < info.volume_min:
            print("⚠️ Lot juda kichik; risk/depositni moslang.")
        else:
            # BUY signaliga tekshirish
            if rsi_value is not None and rsi_value < RSI_BUY:
                sl = price - STOP_LOSS_USD  # Stop Loss
                tp = price + STOP_LOSS_USD * TP_MULTIPLIER  # Take Profit
                open_order(SYMBOL, mt5.ORDER_TYPE_BUY, lot, sl, tp)

            # SELL signaliga tekshirish
            elif rsi_value is not None and rsi_value > RSI_SELL:
                sl = price + STOP_LOSS_USD
                tp = price - STOP_LOSS_USD * TP_MULTIPLIER
                open_order(SYMBOL, mt5.ORDER_TYPE_SELL, lot, sl, tp)
                
        # Belgilangan intervalgacha kutish
        time.sleep(CHECK_INTERVAL)