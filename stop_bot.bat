@echo off
title Stop RSI Bot
echo "❌ RSI Bot to'xtatilmoqda..."

:: Nodemon jarayonini o‘ldirish (python va nodemonni yopadi)
taskkill /IM node.exe /F >nul 2>&1
taskkill /IM python.exe /F >nul 2>&1

echo "✅ Bot muvaffaqiyatli to'xtatildi."
pause
