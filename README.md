# 39-dars helmet() va morgan()

## 📦 javascripts helmet()

```
import helmet from 'helmet';

server.use(helmet())
```

- Vazifasi: HTTP javobiga xavfsizlik headerlari qo'shib, saytingizni hujumlardan himoya qiladi:

- XSS (skript hujumlaridan)

- Clickjacking (iframe hujumlaridan)

- MIME sniffing (kontent tipini noto'g'ri aniqlash)

- HTTPS majburiyligi (HSTS)

## 📦 javascripts morgan()

```
import morgan from 'morgan';

server.use(morgan())
```
