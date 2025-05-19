// 1. RegExp yaratish
const pattern = /hello/i;  // 'hello' so'zi, katta-kichik harf farqi yo'q

// 2. test() - matn mos kelishini tekshiradi
console.log(pattern.test("Hello World"));  // true
console.log(pattern.test("Hi there"));     // false

// 3. exec() - mos keladigan qismni topadi
const result = pattern.exec("Well, hello there!");
console.log(result);
// Output: ['hello', index: 6, input: 'Well, hello there!', groups: undefined]

// 4. match() - string metod, barcha mos kelishlarni massivda qaytaradi
const text = "Hello hello HELLO";
const matches = text.match(/hello/gi);
console.log(matches);
// Output: ['Hello', 'hello', 'HELLO']

// 5. replace() - matndagi naqshni almashtirish
const newText = text.replace(/hello/gi, "hi");
console.log(newText);
// Output: "hi hi hi"
// -------------------------------------------------------------------------

const regex1 = /[abc]/;   // a, b yoki c harflaridan biri
console.log(regex1.test('apple'));   // true ('a' bor)
console.log(regex1.test('dog'));     // false

const regex2 = /[^abc]/;  // a, b, c bo'lmagan harf
console.log(regex2.test('dog'));     // true ('d' bor)
console.log(regex2.test('cab'));     // false (faqat a,b,c bor)

const regex3 = /[0-9]/;   // raqamlar
console.log(regex3.test('Year 2025'));  // true (raqamlar bor)

const regex4 = /[a-z]/;   // kichik harflar
console.log(regex4.test('Hello'));      // true ('e','l' bor)

const regex5 = /[A-Z]/;   // katta harflar
console.log(regex5.test('hello'));      // false (katta harf yo'q)
console.log(regex5.test('Hello'));      // true ('H' katta harf)
// -------------------------------------------------------------------------

const regex11 = /p+/;
console.log(regex11.test('apple'));   // true (1 ta yoki undan ko'p p bor)

const regex12 = /p*/;
console.log(regex12.test('apple'));   // true (0 yoki undan ko'p p, bu har doim true)

const regex13 = /p?/;
console.log(regex13.test('apple'));   // true (0 yoki 1 ta p bor)

const regex14 = /p{2}/;
console.log(regex14.test('apple'));   // false (2 ta ketma-ket p yo'q)

const regex15 = /p{2,3}/;
console.log(regex15.test('appple'));  // true (2 yoki 3 ta p ketma-ket bor)

const regex16 = /p{2,}/;
console.log(regex16.test('appppple')); // true (kamida 2 ta p ketma-ket)

const regex17 = /p$/;
console.log(regex17.test('step'));    // true (oxirida p bor)

const regex18 = /^p/;
console.log(regex18.test('play'));    // true (boshlanishida p bor)

const regex19 = /a(?!p)/;  // a dan keyin p kelmaydigan holat
console.log(regex19.test('apple'));   // false (a dan keyin p bor)
console.log(regex19.test('angle'));   // true (a dan keyin p yo'q)

// -------------------------------------------------------------------------

// 1. a-zA-Z harflaridan boshqa belgi borligini tekshirish
const regex21 = /[^a-zA-Z]/;
console.log(regex21.test("Hello123"));   // true (raqamlar bor)
console.log(regex21.test("Hello"));      // false (faqat harflar bor)

// 2. p, keyin istalgan 1 belgi, keyin yana p
const regex22 = /p.p/;
console.log(regex22.test("pop"));        // true
console.log(regex22.test("pip"));        // true
console.log(regex22.test("ppp"));        // true
console.log(regex22.test("pp"));         // false (o‘rtada belgisi yo‘q)

// 3. Aniq 2 ta belgidan iborat satr
const regex23 = /^.{2}$/;
console.log(regex23.test("Hi"));         // true
console.log(regex23.test("Hey"));        // false

// 4. <b> va </b> orasidagi matn
const regex24 = /<b>(.*)<\/b>/;
console.log(regex24.test("<b>Hello</b>"));   // true
console.log(regex24.test("<i>Hello</i>"));   // false

// 5. p harfi, undan keyin hp ketma-ketligi nol yoki ko'p marta
const regex25 = /p(hp)*/;
console.log(regex25.test("p"));          // true (hp ketma-ketligi yo'q, nol marta)
console.log(regex25.test("php"));        // true (hp bir marta)
console.log(regex25.test("phphp"));      // true (hp ikki marta)
console.log(regex25.test("phh"));        // false
// -------------------------------------------------------------------------

// 1. '.' - har qanday bitta belgi
console.log(/a.b/.test("acb"));  // true (a va b orasida bitta harf)

// 2. '\s' - bo‘sh joy belgisi
console.log(/\s/.test("Hello World"));  // true (o‘rta bo‘sh joy bor)

// 3. '\S' - bo‘sh joy bo‘lmagan belgi
console.log(/\S/.test("   "));  // false (faqat bo‘sh joylar)

// 4. '\d' - raqam
console.log(/\d/.test("abc123"));  // true (raqamlar bor)

// 5. '\D' - raqam bo‘lmagan belgi
console.log(/\D/.test("123"));  // false (faqat raqamlar)

// 6. '\w' - so‘z belgisi
console.log(/\w/.test("#!_"));  // true (_) so‘z belgisi hisoblanadi

// 7. '\W' - so‘z belgisi bo‘lmagan belgi
console.log(/\W/.test("#"));  // true (# so‘z belgisi emas)

// 9. '[aeiou]' - berilgan belgilar orasidan bitta
console.log(/[aeiou]/.test("hello"));  // true (e, o harflari bor)

// 10. '[^aeiou]' - berilgan belgilar tashqarisi
console.log(/[^aeiou]/.test("aeiou"));  // false (faqat undoshlar yo‘q)

// 11. '(foo|bar|baz)' - alternativalar
console.log(/(foo|bar|baz)/.test("hello bar"));  // true
