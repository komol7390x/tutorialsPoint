// 1. Noyob symbol yaratish
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false, chunki har bir symbol noyob

// 2. Symbol description
console.log(id1.description); // "id"

// 3. Symbolni ob'ektda maxfiy property sifatida ishlatish
const user2 = {
    name: 'Komol',
    [id1]: 101  // bu property faqat symbol orqali kiriladi
};
console.log(user2[id1]); // 101
// 4. Symbol.iterator misoli
const iterableObj = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};
for (let value of iterableObj) {
    console.log(value); // 1, 2, 3
}
// ----------------------------------------------------------------------------
// // 5. Symbol.toStringTag misoli
const person = {
    name: 'Ali',
    age: 25,
    [Symbol.toStringTag]: 'Person'
};
console.log(Object.prototype.toString.call(person)); // [object Person]
// ----------------------------------------------------------------------------
const secret = Symbol("secretKey")
const user = {
    name: "Komol",
    [secret]:"12345"
}
console.log(user.name);
console.log(user[secret]);
console.log(Object.getOwnPropertySymbols(user));