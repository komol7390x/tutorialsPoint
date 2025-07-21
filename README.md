# 40-dars helmet() va morgan()

## helmet() terminal

```
npm i helmet
```

## 📦 javascripts

```
import helmet from 'helmet';

server.use(helmet())
```

- Vazifasi: HTTP javobiga xavfsizlik headerlari qo'shib, saytingizni hujumlardan himoya qiladi:

- XSS (skript hujumlaridan)

- Clickjacking (iframe hujumlaridan)

- MIME sniffing (kontent tipini noto'g'ri aniqlash)

- HTTPS majburiyligi (HSTS)

## morgan() terminal

```
npm i morgan
```

## 📦 javascripts

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

- Productionga chiqarishdan oldin developmentda ishlab shu muhitda dasturni sozlaymiza

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

# 44-dars Pug view Engine

## terminal

```
npm i pug
```

## view folder ichida index.pug ochamiza

```
html
    head
        title = title

    body
        h1=greeting
```

## 📦javascripts da app.js da shunday yozmiza

```
import express from 'express'

const app = express()

app.use(express.json())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'my express app', greeting: 'SALOM' })
})

app.listen(5000, () => console.log('Server is runing ', 5000))
```

- Bu bizaga html da javascripts boglash uchun kerak

# 56-dars MongoDB ga file Import qilish!

## terminal 📦Linux ga mongoimport faylni yuklab olish

```
which mongoimport

sudo apt-get install mongodb-org-tools

```

## terminal ga data.json fily yolini berish kerak!

```
mongoimport --db newData --collection yser  --file data.json  --drop

```

---

# 76-dars Lodash
## Javascripts da yozilda bu malumotlar bilan tezroq ichlash uchun ishlatiladi
```
// Lodash Cheat Sheet – Eng Asosiy 12 Funksiya
// npm install lodash
import _ from 'lodash';

/* 1. _.chunk(array, size) – massivni kichik guruhlarga bo‘lish */
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// ➜ [['a', 'b'], ['c', 'd']]

/* 2. _.uniq(array) – takroriy elementlarni olib tashlash */
console.log(_.uniq([1, 2, 2, 3]));
// ➜ [1, 2, 3]

/* 3. _.flatten(array) – massivni 1 daraja tekislaydi */
console.log(_.flatten([1, [2, [3, 4]]]));
// ➜ [1, 2, [3, 4]]

/* 4. _.cloneDeep(object) – chuqur nusxa olish */
const obj = { a: 1, b: { c: 2 } };
const copy = _.cloneDeep(obj);
// ➜ copy = { a: 1, b: { c: 2 } }

/* 5. _.merge(obj1, obj2) – obyektlarni chuqur birlashtirish */
console.log(_.merge({ a: { b: 1 } }, { a: { c: 2 } }));
// ➜ { a: { b: 1, c: 2 } }

/* 6. _.debounce(func, wait) – kechiktirib ishlatish */
const debounced = _.debounce(() => console.log('Typed!'), 500);
debounced();

/* 7. _.throttle(func, wait) – oraliq bilan ishlatish */
const throttled = _.throttle(() => console.log('Scroll!'), 1000);
throttled();

/* 8. _.difference(arr1, arr2) – farqni topish */
console.log(_.difference([1, 2, 3], [2, 3]));
// ➜ [1]

/* 9. _.intersection(arr1, arr2) – umumiy elementlar */
console.log(_.intersection([1, 2, 3], [2, 3, 4]));
// ➜ [2, 3]

/* 10. _.orderBy(array, keys, orders) – obyekt massivni sort qilish */
const users = [
  { name: 'Ali', age: 30 },
  { name: 'Vali', age: 25 }
];
console.log(_.orderBy(users, ['age'], ['asc']));
// ➜ [{ name: 'Vali', age: 25 }, { name: 'Ali', age: 30 }]

/* 11. _.pick(obj, keys) – faqat kerakli property’larni olish */
console.log(_.pick({ a: 1, b: 2, c: 3 }, ['a', 'c']));
// ➜ { a: 1, c: 3 }

/* 12. _.isEqual(obj1, obj2) – obyektlar tengligini tekshirish */
console.log(_.isEqual({ a: 1 }, { a: 1 }));
// ➜ true

```