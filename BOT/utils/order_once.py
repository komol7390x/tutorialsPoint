import MetaTrader5 as mt5

def open_order_once(symbol):
    """
    Agar hozirgi symbol bo'yicha ochiq pozitsiya mavjud bo'lsa,
    yangi order ochilmaydi. Aks holda, order yuboriladi.
    """
    # Hozirgi ochiq pozitsiyalarni tekshirish
    positions = mt5.positions_get(symbol=symbol)
    # print(positions)
    if positions and len(positions) > 0:
        return True  # Pozitsiya bor, yangi order ochilmadi

    # Agar pozitsiya yo‘q bo‘lsa, order ochish
    return False
