import MetaTrader5 as mt5

# ====== Account sozlamalari ====== #
LOGIN = 7413238
PASSWORD = "VbHo_yH2"
# SERVER = "FXPIG-Sever"
SERVER="AMarkets-Demo"
# ====== Symbol va indikator sozlamalari ====== #
SYMBOL = "ETHUSDT"
TIMEFRAME = mt5.TIMEFRAME_H4
RSI_PERIOD = 14
RSI_BUY = 30
RSI_SELL = 70

# ====== Risk menejment ====== #
RISK_PERCENT = 1.0      # % hisobdan risk
STOP_LOSS_USD = 30      # SL (USD bo‘yicha)
TP_MULTIPLIER = 2.0     # TP = SL * multiplier

# ====== Bot sozlamalari ====== #
CHECK_INTERVAL = 5     # sekund
MAGIC = 123456

# ====== Bot ulanishlar soni ====== #
MAX_RETRIES=5, 
WAIT_TIME=10
