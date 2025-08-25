import MetaTrader5 as mt5
import numpy as np
import pandas as pd

def ensure_symbol(symbol):
    # MT5 dan berilgan symbol haqida ma'lumot olish
    info = mt5.symbol_info(symbol)
    if info is None:
        print(f"❌ Symbol {symbol} topilmadi.")  # Agar symbol mavjud bo'lmasa ogohlantirish
        return None
        
    # Agar symbol MT5 terminalida ko'rinmayotgan bo'lsa, uni tanlash
    if not info.visible:
        mt5.symbol_select(symbol, True)

    # Symbol haqida ma'lumotni qaytarish
    return info


def get_last_closes(symbol, timeframe, count):
    # Belgilangan symbol va timeframe bo‘yicha oxirgi 'count' ta narx ma'lumotlarini olish
    rates = mt5.copy_rates_from_pos(symbol, timeframe, 0, count)
    
    # Agar ma'lumotlar bo'lmasa, None qaytarish
    if rates is None or len(rates) == 0:
        return None

    # Faqat yopilish (close) narxlarini NumPy array shaklida qaytarish
    return np.array([r['close'] for r in rates])

# RSI HISOBLASH
def compute_rsi(closes, period=14):
    if len(closes) < period + 1:
        return None

    deltas = np.diff(closes)
    gains = np.where(deltas > 0, deltas, 0.0)
    losses = np.where(deltas < 0, -deltas, 0.0)

    # Avg gain va loss uchun boshlang'ich simple mean
    avg_gain = pd.Series(gains)
    avg_gain[:period] = avg_gain[:period].mean()
    avg_gain = avg_gain.ewm(alpha=1/period, adjust=False).mean()

    avg_loss = pd.Series(losses)
    avg_loss[:period] = avg_loss[:period].mean()
    avg_loss = avg_loss.ewm(alpha=1/period, adjust=False).mean()

    rs = avg_gain / avg_loss
    rsi = 100 - (100 / (1 + rs))

    return rsi.iloc[-1]
