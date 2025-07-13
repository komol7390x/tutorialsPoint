# 40-dars helmet() va morgan()

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

---

# 41-dars express.urlencoded() va express.static()

## 📦javascripts express.urlencoded()

```
app.use(express.urlencoded({ extended: true }));
```

- Middleware, kelayotgan form ma'lumotlarini (body) o'qish uchun ishlatiladi.
  Masalan, HTML <form> yuborilganda req.bodyga joylaydi.
- Bu application/x-www-form-urlencoded formatini parse qiladi.

## 📦javascripts express.static()

```
app.use(express.static('public'));
```

- Middleware, static fayllarni (HTML, CSS, rasm) xizmat qilish uchun ishlatiladi.

- /public/style.css => http://localhost:3000/style.css

---

# 42-dars process.env.NODE_ENV (Production va Development)

- Bu yerda Projectimiza Production boldimi yoki hali ham Ishlab chiqarish jarayonidami shuni tekshirish!

## 📦Linux console Development - qilish (production=>developmet)

```
NODE_ENV=production node app.js
export NODE_ENV=development node app.js

```

## 📦javascripts Development tekshirish

```
if (app.get('env')==='developmet'){
  app.use(morgan('tiny'))
  console.log('Logger ishlayapti')
}
```

## 📦javascripts Production qilish (developmet=>production)

## Linux console

```
export NODE_ENV=production

NODE_ENV=production node app.js
```

## 📦javascripts

- Production tekshirish

```
console.log(process.env.NODE_ENV)
```

---

# 43-dars confi faylari bilan ishlash JSON faylar (Production,Development)

- Productionga chiqarishdan oldin developmentda ishlab shu nuhitda sozlaymiza

## terminal

```
npm i config
```

## JSON production.json

```
{
    "status":"production",
    "port": 8080,
    "db": {
      "host": "dbserver.prod",
      "name": "myapp_prod"
    }
  }
```

## JSON development.json

```
{
    "status":"development",
    "port": 3000,
    "db": {
      "host": "localhost",
      "name": "myapp_dev"
    }
  }
```

## javascripts app.js

```
const port = config.get('port');
const dbHost = config.get('db.host');
const status = config.get('status')

console.log(status);
console.log(`Server ${port}-portda ishlaydi`);
console.log(`DB host: ${dbHost}`);
```

---
