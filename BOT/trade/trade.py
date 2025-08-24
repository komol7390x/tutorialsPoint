import MetaTrader5 as mt5
from BOT.config.config import MAGIC
from BOT.utils.order_once import open_order_once
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
        "magic": MAGIC,
        "comment": "RSI bot",
        "type_time": mt5.ORDER_TIME_GTC,
        "type_filling": mt5.ORDER_FILLING_IOC,
    }
    check=open_order_once(symbol)
    if check :
        result = mt5.order_send(request)
        # print(f"📌 Order yuborildi: {result}")
        return result
    else:
        return False