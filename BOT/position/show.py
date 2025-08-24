import MetaTrader5 as mt5

def show_positions(symbol=None):
    """
    Hozirgi ochiq pozitsiyalarni chiroyli chiqaradi.
    Agar symbol berilsa, faqat shu instrument bo'yicha.
    """
    positions = mt5.positions_get(symbol=symbol)
    if positions is None or len(positions) == 0:
        print("\n📌 Hozircha ochiq pozitsiya yo'q.")
        return
    count=0
    print(f"📌 Hozirgi pozitsiya ({symbol if symbol else 'barchasi'}):\n")
    for pos in positions:
        count+=1
        pos_type = f"BUY 📈" if pos.type == mt5.ORDER_TYPE_BUY else f"SELL 📉"
        print(f"Symbol: {pos.symbol} =>{pos.price_current}")
        print(f"  Type: {pos_type}")
        print(f"  Volume (lot): {pos.volume}")
        print(f"  Open Price: {pos.price_open}")
        print(f"  SL: {pos.sl}")
        print(f"  TP: {pos.tp}")
        # print(f"  Ticket: {pos.ticket}")
        # print(f"  Magic: {pos.magic}")
        print(f"  Profit: {pos.profit}\n")
        
    print(f"Ochiq pozitsiyalr soni: {count}")
    