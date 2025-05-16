console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.prototype);

// Instance Methods
let num1 = 12345;
let num2 = 12.345

console.log(num1.toExponential(2)); // "1.23e+4" - 2 raqamdan keyin nuqta

console.log(num2.toFixed(2)); // "12.35" (nuqtadan keyin 2 raqam)

console.log(num2.toLocaleString('en-US')); // "1,234,567.89"

console.log(num2.toPrecision(4)); // "12.35" (4 raqamni umumiy ko‘rsatadi)

console.log(num1.toString()); // "123"

let numObj = new Number(123);
console.log(numObj.valueOf()); // 123 (number primitive)

// Static Methods

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false
console.log(isNaN("hello")); // true (shuning uchun `Number.isNaN` ishlatish yaxshiroq)

console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("123")); // false (faqat number turini tekshiradi)

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger("10")); // false

console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false

console.log(Number.parseFloat("10.5")); // 10.5
console.log(Number.parseFloat("10.5abc")); // 10.5
console.log(Number.parseFloat("abc10.5")); // NaN

console.log(Number.parseInt("42")); // 42
console.log(Number.parseInt("101", 2)); // 5 (2lik sanoqdan 10likka)
console.log(Number.parseInt("abc")); // NaN

