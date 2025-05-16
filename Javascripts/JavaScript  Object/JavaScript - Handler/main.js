// 1. apply()
// Bu handler faqat function yoki class chaqirilganida ishlatiladi.

// function sayHello(name) {
//     return `Hello, ${name}!`;
// }

// const handler1 = {
//     apply(target, thisArg, args) {
//         return target(...args).toUpperCase();
//     }
// };

// const proxy = new Proxy(sayHello, handler1);

// console.log(proxy("Komol")); // Output: HELLO, KOMOL!

// // --------------------------------------------------------------------------

// let odam = {
//     ism: "Komol",
//     yosh: 25
// };

// let handler = {
//     get(target, prop) {
//         console.log(`${prop} ga murojaat qilindi`);
//         return target[prop];
//     }
// };

// let proxyOdam = new Proxy(odam, handler);

// console.log(proxyOdam.ism);  // Konsolda: "ism ga murojaat qilindi" va natija: "Komol"
// // --------------------------------------------------------------------------

// 2. construct()
// Yangi obyekt yaratilayotganida(new operatori bilan) ishlatiladi.

// function Person(name) {
//     this.name = name;
// }

// const handler = {
//     construct(target, args) {
//         return { greeting: `Hi ${args[0]}!` };
//     }
// };

// const proxy = new Proxy(Person, handler);
// console.log(new proxy("Komol")); // Output: { greeting: 'Hi Komol!' }
// // --------------------------------------------------------------------------
// 3. defineProperty()
// Object.defineProperty() orqali xususiyat qo‘shilayotgan yoki o‘zgartirilayotganida ishlatiladi.

// const target = {};
// const handler = {
//     defineProperty(target, prop, descriptor) {
//         console.log(`Defining property: ${prop}`);
//         return Reflect.defineProperty(target, prop, descriptor);
//     }
// };

// const proxy = new Proxy(target, handler);
// Object.defineProperty(proxy, "age", { value: 25 });

// console.log(proxy.age); // Output: 25
// // --------------------------------------------------------------------------
// 4. deleteProperty()
// delete operatori ishlatilganida ishga tushadi.
// const target = { name: "Komol" };
// const handler = {
//     deleteProperty(target, prop) {
//         console.log(`Deleting property: ${prop}`);
//         return Reflect.deleteProperty(target, prop);
//     }
// };

// const proxy = new Proxy(target, handler);
// delete proxy.name; // Output: Deleting property: name
// console.log(proxy); // Output: {}

// // --------------------------------------------------------------------------
// 5. get()
// Obyekt xususiyatini o‘qishda ishlaydi.

// const target = { name: "Komol" };
// const handler = {
//     get(target, prop) {
//         return prop in target ? target[prop] : "Not found";
//     }
// };

// const proxy = new Proxy(target, handler);
// console.log(proxy.name); // Output: Komol
// console.log(proxy.age);  // Output: Not found

// // --------------------------------------------------------------------------
// 6. getOwnPropertyDescriptor()
// Object.getOwnPropertyDescriptor() chaqirilganda ishga tushadi.
// const target = { age: 25 };
// const handler = {
//     getOwnPropertyDescriptor(target, prop) {
//         console.log(`Getting descriptor for: ${prop}`);
//         return Object.getOwnPropertyDescriptor(target, prop);
//     }
// };

// const proxy = new Proxy(target, handler);
// console.log(Object.getOwnPropertyDescriptor(proxy, "age"));
// // Output: descriptor + { value: 25, ... }

// // --------------------------------------------------------------------------
// 7. getPrototypeOf()
// Object.getPrototypeOf() chaqirilganda ishga tushadi.

// const handler = {
//     getPrototypeOf(target) {
//         console.log("Getting prototype");
//         return Object.getPrototypeOf(target);
//     }
// };

// const obj = {};
// const proxy = new Proxy(obj, handler);
// console.log(Object.getPrototypeOf(proxy)); // Output: Getting prototype + {}
  
// // --------------------------------------------------------------------------
// 8. has() in operatori ishlatilganda ishga tushadi.
// const target = { secret: "hidden", visible: true };
// const handler = {
//     has(target, prop) {
//         return prop !== "secret";
//     }
// };

// const proxy = new Proxy(target, handler);
// console.log("secret" in proxy);  // Output: false
// console.log("visible" in proxy); // Output: true

// // --------------------------------------------------------------------------
// 9. isExtensible() Object.isExtensible() chaqirilganda ishga tushadi.
// const target = {};
// const handler = {
//     isExtensible(target) {
//         console.log("Checking if extensible");
//         return Object.isExtensible(target);
//     }
// };

// const proxy = new Proxy(target, handler);
// console.log(Object.isExtensible(proxy)); // Output: Checking if extensible + true

// // --------------------------------------------------------------------------
// 10. ownKeys() Object.keys(), for...in, Object.getOwnPropertyNames() chaqirilganda ishlaydi.
// const target = { a: 1, b: 2 };
// const handler = {
//     ownKeys(target) {
//         console.log("Returning custom keys");
//         return ["a"];
//     }
// };

// const proxy = new Proxy(target, handler);
// console.log(Object.keys(proxy)); // Output: Returning custom keys + [ 'a' ]

// // --------------------------------------------------------------------------
// 11. set()
// Xususiyatga qiymat tayinlashda ishga tushadi.
// const target = {};
// const handler = {
//     set(target, prop, value) {
//         console.log(`Setting ${prop} to ${value}`);
//         target[prop] = value;
//         return true;
//     }
// };

// const proxy = new Proxy(target, handler);
// proxy.name = "Komol"; // Output: Setting name to Komol
// console.log(proxy.name); // Output: Komol

// // --------------------------------------------------------------------------

// 12. setPrototypeOf()
// Obyektga yangi prototip o‘rnatishda(Object.setPrototypeOf()) ishlaydi.
const target = {};
const handler = {
    setPrototypeOf(target, proto) {
        console.log("Setting prototype");
        return Reflect.setPrototypeOf(target, proto);
    }
};

const proxy = new Proxy(target, handler);
Object.setPrototypeOf(proxy, Array.prototype); // Output: Setting prototype
console.log(proxy instanceof Array); // Output: true

// // --------------------------------------------------------------------------

// // --------------------------------------------------------------------------
