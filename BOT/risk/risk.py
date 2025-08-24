import MetaTrader5 as mt5
import math

def calculate_lot_by_risk(symbol_info, risk_percent, sl_price_diff):
    # MT5 hisobingiz haqidagi ma'lumotlarni olamiz
    acc = mt5.account_info()
    if acc is None:
        return None  # Hisob ma'lumotlari olinmasa, funktsiya None qaytaradi
    
    # Hisob balansini olish
    balance = acc.balance
    # print(mt5._RawOrder())
    # Risk miqdorini hisoblash: balans * risk foizi
    risk_amount = balance * (risk_percent / 100.0)
    
    # Simvolning shartnoma hajmi
    contract = symbol_info.trade_contract_size
    
    # Agar Stop Loss farqi yoki shartnoma hajmi noto‘g‘ri bo‘lsa, minimal lotni ishlatish
    if sl_price_diff <= 0 or contract <= 0:
        raw_lot = symbol_info.volume_min
    else:
        # Risk miqdoriga asoslangan raw lotni hisoblash
        # raw_lot = risk miqdori / (SL farqi * shartnoma hajmi)
        raw_lot = risk_amount / (sl_price_diff * contract)
    
    # Lot qadami, minimal va maksimal lot
    step = symbol_info.volume_step
    vol_min = symbol_info.volume_min
    vol_max = symbol_info.volume_max
    
    # Lotni qadamlar bo‘yicha yaxlitlash
    steps = math.floor(raw_lot / step) if step > 0 else 0
    vol = max(vol_min, min(vol_max, steps * step))  # minimal va maksimal chegarani tekshirish
    
    # Hisoblangan lot miqdorini qaytarish
    return vol