import MetaTrader5 as mt5
import numpy as np

# MT5 ga ulanish
if not mt5.initialize():
    print("MT5 ga ulanishda xatolik")
    mt5.shutdown()
    exit()

# Sizning compute_rsi funksiyangiz
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

# Parametrlar
symbol = "BTCUSDT"
timeframe = mt5.TIMEFRAME_H4   # Timeframe tanlang: M1, M5, H1, D1
period = 14

# Timeframe nomlarini o‘qilishi qulay formatga aylantirish
timeframe_dict = {
    mt5.TIMEFRAME_M1: "1 Minute",
    mt5.TIMEFRAME_M5: "5 Minutes",
    mt5.TIMEFRAME_M15: "15 Minutes",
    mt5.TIMEFRAME_M30: "30 Minutes",
    mt5.TIMEFRAME_H1: "1 Hour",
    mt5.TIMEFRAME_H4: "4 Hours",
    mt5.TIMEFRAME_D1: "1 Day",
    mt5.TIMEFRAME_W1: "1 Week",
    mt5.TIMEFRAME_MN1: "1 Month"
}
timeframe_name = timeframe_dict.get(timeframe, str(timeframe))

# So‘nggi 'period+1' ta yopilish narxini olish
rates = mt5.copy_rates_from_pos(symbol, timeframe, 0, period + 1)
closes = [r['close'] for r in rates]

# Hozirgi RSI ni hisoblash va print qilish
current_rsi = compute_rsi(closes, period)
print(f"{symbol} | Timeframe: {timeframe_name} | RSI: {current_rsi:.2f}")

# MT5 sessiyasini yopish
mt5.shutdown()
