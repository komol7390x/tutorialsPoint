import MetaTrader5 as mt5

# ====== Account sozlamalari ====== #
LOGIN = 95810021
PASSWORD = "_bQ3IbAj"
SERVER = "MetaQuotes-Demo"

# ====== Symbol va indikator sozlamalari ====== #
SYMBOL = "ETHUSD"
TIMEFRAME = mt5.TIMEFRAME_H4
RSI_PERIOD = 14
RSI_BUY = 30
RSI_SELL = 70

# ====== Risk menejment ====== #
RISK_PERCENT = 100     # % hisobdan risk
STOP_LOSS_USD = 30      # SL (USD bo‘yicha)
TP_MULTIPLIER = 2.0     # TP = SL * multiplier

# ====== Bot sozlamalari ====== #
CHECK_INTERVAL = 5     # sekund
MAGIC = 123456

# ====== Bot ulanishlar soni ====== #
MAX_RETRIES=5, 
WAIT_TIME=10
