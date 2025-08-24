import MetaTrader5 as mt5
import time
from datetime import datetime
from BOT.config.config import LOGIN, PASSWORD, SERVER

def connect(max_retries=5, wait_time=3):
    """MT5 ga ulanish funksiyasi"""
    
    # Ulanish uchun maksimal urinishlar soni bo‘yicha sikl
    for attempt in range(max_retries):
        print(f"[{datetime.now()}] MT5 ga ulanmoqda... ({attempt+1}/{max_retries})")
        
        # MT5 API ni ishga tushirish
        if mt5.initialize():
            # Hisobga login qilish
            if mt5.login(LOGIN, password=PASSWORD, server=SERVER):
                # Hisob ma'lumotlarini olish
                acc = mt5.account_info()
                return acc  # Ulanish muvaffaqiyatli bo‘ldi, True qaytarish
        
        # Agar ulanmasa, xatolikni chiqarish
        print(f"❌ Ulanishda xatolik: {mt5.last_error()}")
        time.sleep(wait_time)  # Keyingi urinishdan oldin kutish
    
    # Agar barcha urinishlar muvaffaqiyatsiz bo‘lsa, False qaytarish
    return False

