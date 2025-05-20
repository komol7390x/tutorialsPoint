// 1. Object.assign() - ob'ektlarni birlashtirish
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);
// Output: { a: 1, b: 2 }

// 2. Object.create() - prototip asosida yangi ob'ekt yaratish
const proto = {
    greet() {
        return "Hello from prototype!";
    }
};
const newObj = Object.create(proto);
console.log(newObj.greet());
// Output: Hello from prototype!

// 5. Object.entries() - [key, value] juftliklari massivini olish
const obj3 = { x: 10, y: 20 };
console.log(Object.entries(obj3));
// Output: [ ['x', 10], ['y', 20] ]

// 6. Object.freeze() - ob'ektni muzlatib, o'zgartirishni taqiqlash
const frozenObj = { p: 100 };
Object.freeze(frozenObj);
frozenObj.p = 200;
console.log(frozenObj.p);
// Output: 100 (o'zgarmaydi)

// 7. Object.fromEntries() - [key, value] massividan ob'ekt yaratish
const entries = [['name', 'Komol'], ['age', 25]];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries);
// Output: { name: 'Komol', age: 25 }

// 8. Object.hasOwn()
const obj = { a: 1 };
console.log(Object.hasOwn(obj, 'a'));  // true
console.log(Object.hasOwn(obj, 'b'));  // false


// 13. Object.is() - maxsus tenglik tekshiruvi
console.log(Object.is(NaN, NaN));   // Output: true
console.log(Object.is(0, -0));      // Output: false

// 17. Object.keys() - ob'ekt kalitlarini olish
const obj4 = { foo: 'bar', baz: 42 };
console.log(Object.keys(obj4));
// Output: ['foo', 'baz']

// 22. Object.values() - ob'ekt qiymatlarini olish
console.log(Object.values(obj4));
// Output: ['bar', 42]
