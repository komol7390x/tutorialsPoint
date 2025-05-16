const str = "hello";
const arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']
// -----------------------------------------------------

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));  // false

// -----------------------------------------------------

const arr1 = Array.of(10, 20, 30);
console.log(arr1); // [10, 20, 30]

// --------------------------------------------------------------

// 1. at() - Belgilangan indexdagi elementni oladi
const item = arr.at(2);

// --------------------------------------------------------------
// 2. concat() - Ikki yoki undan ko'p massivlarni birlashtiradi
const merged = arr1.concat(arr2);

// --------------------------------------------------------------
// 3. copyWithin() - Massivning bir qismini boshqa joyga nusxalaydi
arr.copyWithin(1, 3);

// --------------------------------------------------------------
// 4. entries() - Massivdagi [index, value] juftliklarini beradi
for (let [index, value] of arr.entries()) {
    console.log(index, value);
}

// --------------------------------------------------------------
// 5. every() - Barcha elementlar shartni bajarsa true qaytaradi
const allPositive = arr.every(x => x > 0);

// --------------------------------------------------------------
// 6. fill() - Massivni belgilangan qiymat bilan to'ldiradi
arr.fill(0);

// --------------------------------------------------------------
// 7. filter() - Shartga mos keladigan elementlardan yangi massiv yaratadi
const filtered = arr.filter(x => x > 5);

// --------------------------------------------------------------
// 8. find() - Shartga mos birinchi elementni qaytaradi
const found = arr.find(x => x > 10);

// --------------------------------------------------------------
// 9. findIndex() - Shartga mos elementning indexini qaytaradi
const index = arr.findIndex(x => x > 10);

// --------------------------------------------------------------
// 10. findLast() - Oxiridan boshlab shartga mos birinchi elementni topadi
const last = arr.findLast(x => x < 10);

// --------------------------------------------------------------
// 11. findLastIndex() - Oxiridan boshlab shartga mos elementning indexi
const lastIdx = arr.findLastIndex(x => x < 10);

// --------------------------------------------------------------
// 12. flat() - Ichki massivlarni tekislab beradi
const flatArray = nestedArr.flat();

// --------------------------------------------------------------
// 13. flatMap() - Har bir elementga funksiyani qo'llaydi va tekislaydi
const result = arr.flatMap(x => [x * 2]);

// --------------------------------------------------------------
// 14. forEach() - Har bir element uchun funksiyani chaqiradi
arr.forEach(x => console.log(x));

// --------------------------------------------------------------
// 15. includes() - Belgilangan qiymat bor-yo‘qligini tekshiradi
arr.includes(5);

// --------------------------------------------------------------
// 16. indexOf() - Belgilangan elementning birinchi indexini qaytaradi
arr.indexOf('apple');

// --------------------------------------------------------------
// 17. join() - Barcha elementlarni satrga birlashtiradi
arr.join(', ');

// --------------------------------------------------------------
// 18. keys() - Har bir elementning indexini beradi (iterator)
for (let key of arr.keys()) {
    console.log(key);
}

// --------------------------------------------------------------
// 19. lastIndexOf() - Belgilangan elementning oxirgi indexi
arr.lastIndexOf('apple');

// --------------------------------------------------------------
// 20. map() - Har bir elementga funksiyani qo‘llab yangi massiv yaratadi
const doubled = arr.map(x => x * 2);

// --------------------------------------------------------------
// 21. pop() - Massivdan oxirgi elementni olib tashlaydi va qaytaradi
const removed = arr.pop();

// --------------------------------------------------------------
// 22. push() - Massivning oxiriga element qo‘shadi
arr.push('banana');

// --------------------------------------------------------------
// 23. reduce() - Chapdan o‘ngga yurib yagona qiymatga qisqartiradi
const sum = arr.reduce((acc, val) => acc + val, 0);

// --------------------------------------------------------------
// 24. reduceRight() - O‘ngdan chapga yurib yagona qiymatga qisqartiradi
const combined = arr.reduceRight((acc, val) => acc + val);

// --------------------------------------------------------------
// 25. reverse() - Massiv elementlarini teskariga aylantiradi
arr.reverse();

// --------------------------------------------------------------
// 26. shift() - Massivning boshidagi elementni olib tashlaydi
arr.shift();

// --------------------------------------------------------------
// 27. slice() - Massivdan belgilangan qismni kesib oladi (yangi massiv)
const part = arr.slice(1, 3);

// --------------------------------------------------------------
// 28. some() - Hech bo‘lmaganda bitta element shartga mos bo‘lsa true
const hasNegative = arr.some(x => x < 0);

// 29. toSorted() - Sort qilingan yangi massiv qaytaradi (originalni o‘zgartirmaydi)
const sorted = arr.toSorted();

// --------------------------------------------------------------
// 30. sort() - Elementlarni tartiblaydi (original massivni o‘zgartiradi)
arr.sort((a, b) => a - b);

// --------------------------------------------------------------
// 31. splice() - Element qo‘shish yoki olib tashlash uchun ishlatiladi
arr.splice(2, 1); // 2-indexdagi 1 elementni o‘chiradi

// --------------------------------------------------------------
// 32. toLocaleString() - Massivni mintaqaviy formatda satrga aylantiradi
arr.toLocaleString();

// --------------------------------------------------------------
// 33. toReversed() - Massivni teskari qilib yangi nusxasini qaytaradi
const reversed = arr.toReversed();

// --------------------------------------------------------------
// 34. toSpliced() - Splice kabi ishlaydi, lekin yangi massiv qaytaradi
const spliced = arr.toSpliced(1, 2);

// --------------------------------------------------------------
// 35. toString() - Massivni satrga aylantiradi
arr.toString();

// --------------------------------------------------------------
// 36. unshift() - Massiv boshiga element qo‘shadi
arr.unshift('first');

// --------------------------------------------------------------
// 37. values() - Har bir elementning qiymatini beradi (iterator)
for (let val of arr.values()) {
    console.log(val);
}

// --------------------------------------------------------------
// 38. with() - Belgilangan indexdagi qiymatni o‘zgartirib, yangi massiv qaytaradi
const newArr = arr.with(1, 'updated');
