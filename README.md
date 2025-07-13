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

| Format       | Tushuntirishi                                                           |
| ------------ | ----------------------------------------------------------------------- |
| `'dev'`      | Rangi va qisqa                                                          |
| `'combined'` | Apache\`ning kengaytirilgan log formatida (IP, user-agent va boshqalar) |
| `'common'`   | Apache umumiy log formati                                               |
| `'short'`    | Qisqa format                                                            |
| `'tiny'`     | Juda qisqa format                                                       |

- 'tiny' GET / 200 12.345 ms - 12

* 'combined' ::1 - - [11/Jul/2025:12:34:56 +0000] "GET / HTTP/1.1" 200 12 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36"
