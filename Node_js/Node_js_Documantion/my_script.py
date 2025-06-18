import sys

# stdin dan ma'lumot o'qiymiz
for line in sys.stdin:
    input_data = line.strip()
    print(f"Python received: {input_data}")
    print(f"Python processing: {input_data.upper()}") # Katta harflarga o'girib qaytaramiz
    sys.stdout.flush() # Bufferlarni tozalash muhim