// JavaScript Set Methods - Examples with Output

// 1. add() - element qo'shish
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // dublikat qo'shilmaydi
console.log('1. add:', mySet); // Set(2) {1, 2}

// 2. clear() - barcha elementlarni o'chiradi
let clearSet = new Set([1, 2, 3]);
clearSet.clear();
console.log('2. clear:', clearSet); // Set(0) {}

// 3. delete() - bitta elementni o'chiradi
let deleteSet = new Set([1, 2, 3]);
deleteSet.delete(2);
console.log('3. delete:', deleteSet); // Set(2) {1, 3}

// 4. difference() - faqat 1-setda bor, 2-setda yo'q elementlar (qo‘lda yoziladi)
function difference(setA, setB) {
    return new Set([...setA].filter(x => !setB.has(x)));
}
let a = new Set([1, 2, 3, 4]);
let b = new Set([3, 4, 5]);
console.log('4. difference:', difference(a, b)); // Set(2) {1, 2}

// 5. entries() - har bir qiymatni [value, value] ko'rinishida beradi
let entriesSet = new Set(['a', 'b']);
for (let entry of entriesSet.entries()) {
    console.log('5. entries:', entry); // ['a', 'a'], ['b', 'b']
}

// 6. forEach() - har bir elementga amal bajarish
let feSet = new Set([10, 20, 30]);
feSet.forEach(value => {
    console.log('6. forEach:', value * 2); // 20, 40, 60
});

// 7. has() - qiymat mavjudligini tekshiradi
let hasSet = new Set(['apple', 'banana']);
console.log('7. has "apple"?', hasSet.has('apple')); // true
console.log('7. has "orange"?', hasSet.has('orange')); // false

// 8. intersection() - ikkala setda bor elementlar (qo‘lda yoziladi)
function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}
let x = new Set([1, 2, 3]);
let y = new Set([2, 3, 4]);
console.log('8. intersection:', intersection(x, y)); // Set(2) {2, 3}

// 9. keys() - values() bilan bir xil
let keySet = new Set(['x', 'y']);
console.log('9. keys:');
for (let key of keySet.keys()) {
    console.log(key); // x, y
}

// 10. values() - qiymatlarni beradi
let valueSet = new Set([100, 200]);
console.log('10. values:');
for (let val of valueSet.values()) {
    console.log(val); // 100, 200
}
