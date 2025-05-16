// Harflar bilan
console.log(String.fromCharCode(72, 105)); // "Hi"
console.log(String.fromCodePoint(72, 105)); // "Hi"

// Emoji bilan
console.log(String.fromCharCode(128512)); // noto‘g‘ri natija: "�"
console.log(String.fromCodePoint(128512)); // to‘g‘ri natija: "😀"

// -----------------------------------------------------------------------------

for (const match of "abc123xyz456".matchAll(/\d+/g)) {
    console.log(match[0]); // 123, keyin 456
}
  
// -----------------------------------------------------------------------------------

// 1. at(index)
// Berilgan indeksdagi belgini qaytaradi.

    console.log("Hello".at(1)); // "e"
// ---------------------------------------------------------------------
// 2. charAt(index)
// Indekstagi belgini qaytaradi(an'anaviy usul).

console.log("Hello".charAt(1)); // "e"
// ---------------------------------------------------------------------
// 3. charCodeAt(index)
// Indekstagi belgining Unicode raqamini qaytaradi.
 
console.log("A".charCodeAt(0)); // 65
// ---------------------------------------------------------------------
// 4. codePointAt(index)
// Unicode kod nuqtasini qaytaradi(ko‘proq emoji uchun ishlatiladi).

console.log("😀".codePointAt(0)); // 128512
// ---------------------------------------------------------------------
// 5. concat(str)
// Ikki stringni birlashtiradi.

console.log("Hello".concat(" World")); // "Hello World"
// ---------------------------------------------------------------------
// 6. endsWith(substr)
// String ma’lum bir substring bilan tugashini tekshiradi.

console.log("Hello".endsWith("lo")); // true
// ---------------------------------------------------------------------
// 7. includes(substr)
// String ichida substring bor - yo‘qligini tekshiradi.
 
console.log("Hello".includes("ell")); // true
// ---------------------------------------------------------------------
// 8. indexOf(substr)
// Substring birinchi paydo bo‘lish indeksini qaytaradi.
 
console.log("Hello".indexOf("l")); // 2
// ---------------------------------------------------------------------
// 9. lastIndexOf(substr)
// Substring oxirgi paydo bo‘lish indeksini qaytaradi.

console.log("Hello".lastIndexOf("l")); // 3
// ---------------------------------------------------------------------
// 10. localeCompare(str)
// Ikki stringni mahalliy til qoidalariga ko‘ra solishtiradi.
 
console.log("a".localeCompare("b")); // -1 (a oldinda)
// ---------------------------------------------------------------------
// 11. match(regex)
// Regexga mos keluvchi birinchi qismni topadi.
 
console.log("abc123".match(/\d+/)); // ["123"]
// ---------------------------------------------------------------------
// 12. matchAll(regex)
// Regexga mos keluvchi barcha qismlarni iterator shaklida qaytaradi.

for (const match of "abc123xyz456".matchAll(/\d+/g)) {
    console.log(match[0]); // 123, keyin 456

}
// ---------------------------------------------------------------------
// 13. normalize()
// Stringni unicode normalizatsiyasiga keltiradi.
 
console.log("e\u0301".normalize()); // "é"
// ---------------------------------------------------------------------
// 14. padEnd(targetLength, padString)
// String oxiriga to‘ldiruvchi belgi qo‘shadi.
 
console.log("Hi".padEnd(5, ".")); // "Hi..."
// ---------------------------------------------------------------------
// 15. padStart(targetLength, padString)
// String boshiga to‘ldiruvchi belgi qo‘shadi.
 
console.log("5".padStart(3, "0")); // "005"
// ---------------------------------------------------------------------
// 16. raw()
// Template literalning xom(raw) ko‘rinishini qaytaradi.

console.log(String.raw`Hello\nWorld`); // Hello\nWorld
// ---------------------------------------------------------------------
// 17. repeat(count)
// Stringni count marta takrorlaydi.

console.log("ha".repeat(3)); // "hahaha"
// ---------------------------------------------------------------------
// 18. replace(searchValue, newValue)
// Birinchi mos kelgan qismni almashtiradi.
 
console.log("foo bar".replace("bar", "baz")); // "foo baz"
// ---------------------------------------------------------------------
// 19. replaceAll(searchValue, newValue)
// Barcha mos kelgan qismlarni almashtiradi.

console.log("foo bar bar".replaceAll("bar", "baz")); // "foo baz baz"
// ---------------------------------------------------------------------
// 20. search(regex)
// Regex bo‘yicha qidiruv qiladi va indeksni qaytaradi.
 
console.log("abc123".search(/\d/)); // 3
// ---------------------------------------------------------------------
// 21. slice(start, end)
// Stringdan qism ajratib oladi.

console.log("Hello".slice(1, 4)); // "ell"
// ---------------------------------------------------------------------
// 22. split(separator)
// Stringni bo‘laklarga ajratib, arrayga aylantiradi.

console.log("a,b,c".split(",")); // ["a", "b", "c"]
// ---------------------------------------------------------------------
// 23. substr(start, length)
// Boshlang‘ich indeksdan boshlab, berilgan uzunlikdagi qismini oladi.
 
console.log("Hello".substr(1, 3)); // "ell"
// ---------------------------------------------------------------------

// 24. substring(start, end)
// slice ga o‘xshaydi, faqat start va end indekslari o‘zgartirilsa, tartibni tuzatadi.
 
console.log("Hello".substring(1, 4)); // "ell"
// ---------------------------------------------------------------------
// 25. toLocaleLowerCase()
// Mahalliy til qoidalariga mos holda kichik harflarga o‘zgartiradi.

console.log("Istanbul".toLocaleLowerCase("tr")); // "istanbul"
// ---------------------------------------------------------------------
// 26. toLocaleUpperCase()
// Mahalliy til qoidalariga mos holda katta harflarga o‘zgartiradi.

console.log("istanbul".toLocaleUpperCase("tr")); // "İSTANBUL"
// ---------------------------------------------------------------------
// 27. toLowerCase()
// Kichik harflarga o‘zgartiradi.

console.log("HELLO".toLowerCase()); // "hello"
// ---------------------------------------------------------------------
// 28. toString()
// String qiymatini qaytaradi(odatda avtomatik chaqiriladi).

console.log(("Hello").toString()); // "Hello"
// ---------------------------------------------------------------------
// 29. toUpperCase()
// Katta harflarga o‘zgartiradi.

console.log("hello".toUpperCase()); // "HELLO"
// ---------------------------------------------------------------------
// 30. toWellFormed()
// Yaxshi shakldagi unicode stringini qaytaradi.

console.log("𝌆".toWellFormed()); // "𝌆" (unicode to‘g‘ri formatda)
// ---------------------------------------------------------------------
// 31. trim()
// Boshlanish va oxiridagi bo‘sh joylarni olib tashlaydi.

console.log("  hello  ".trim()); // "hello"
// ---------------------------------------------------------------------
// 32. trimEnd()
// Oxiridagi bo‘sh joylarni olib tashlaydi.

console.log("  hello  ".trimEnd()); // "  hello"
// ---------------------------------------------------------------------
// 33. trimStart()
// Boshlanishdagi bo‘sh joylarni olib tashlaydi.
 
console.log("  hello  ".trimStart()); // "hello  "
// ---------------------------------------------------------------------
// 34. valueOf()
// Primitiv string qiymatini qaytaradi.

console.log(("Hello").valueOf()); // "Hello"