// 1. apply()
// Bu handler faqat function yoki class chaqirilganida ishlatiladi.

function sayHello(name) {
    return `Hello, ${name}!`;
}

const handler1 = {
    apply: function (target, thisArg, args) {
        console.log('apply chaqirildi');
        return target(...args).toUpperCase();
    }
};

const proxy1 = new Proxy(sayHello, handler1);

// console.log(proxy1('Komol'));

// // --------------------------------------------------------------------------
// 2. construct()
// Yangi obyekt yaratilayotganida(new operatori bilan) ishlatiladi.
function Person(name) {
    this.name = name;
}
const handler2 = {
    construct(target, args) {
        // console.log('construct chaqirildi');
        return new target(...args);
    }
};

const ProxyPerson = new Proxy(Person, handler2);

const p = new ProxyPerson('Komol');
// console.log(p.name);

// // --------------------------------------------------------------------------
// 3. defineProperty()
// Object.defineProperty() orqali xususiyat qo‘shilayotgan yoki o‘zgartirilayotganida ishlatiladi.
const target3 = {};
const handler3 = {
    defineProperty(target, prop, descriptor) {
        // console.log(`Defining property: ${prop}`);
        return Reflect.defineProperty(target3, prop, descriptor);
    }
};

const proxy3 = new Proxy(target3, handler3);
Object.defineProperty(proxy3, "age", { value: 25 });

// console.log(proxy3.age); // Output: 25
// // --------------------------------------------------------------------------
// 4. deleteProperty()
// delete operatori ishlatilganida ishga tushadi.
const target4 = { name: "Komol" };
const handler4 = {
    deleteProperty(target4, prop) {
        // console.log(`Deleting property: ${prop}`);
        return Reflect.deleteProperty(target4, prop);
    }
};

const proxy4 = new Proxy(target4, handler4);
delete proxy4.name; // Output: Deleting property: name
// console.log(proxy4); // Output: {}

// // --------------------------------------------------------------------------
// 5. get()
// Obyekt xususiyatini o‘qishda ishlaydi.

const target5 = { name: "Komol" };
const handler5 = {
    get(target, prop) {
        return prop in target ? target[prop] : "Not found";
    }
};

const proxy5 = new Proxy(target5, handler5);
// console.log(proxy5.name); // Output: Komol
// console.log(proxy5.age);  // Output: Not found

// // --------------------------------------------------------------------------
// 6. getOwnPropertyDescriptor()
// Object.getOwnPropertyDescriptor() chaqirilganda ishga tushadi.
const target6 = { age: 25 };
const handler6 = {
    getOwnPropertyDescriptor(target6, prop) {
        console.log(`Getting descriptor for: ${prop}`);
        return Object.getOwnPropertyDescriptor(target6, prop);
    }
};

const proxy = new Proxy(target6, handler6);
// console.log(Object.getOwnPropertyDescriptor(proxy, "age"));
// Output: descriptor + { value: 25, ... }
// // --------------------------------------------------------------------------
// 7. getPrototypeOf()
// Object.getPrototypeOf() chaqirilganda ishga tushadi.

const handler7 = {
    getPrototypeOf(target) {
        console.log("Getting prototype");
        return Object.getPrototypeOf(target);
    }
};

const obj = {};
const proxy7 = new Proxy(obj, handler7);
// console.log(Object.getPrototypeOf(proxy7)); 
// // Output: Getting prototype + {}
// // --------------------------------------------------------------------------
// 8. has() in operatori ishlatilganda ishga tushadi.
const target8 = { secret: "hidden", visible: true };
const handler8 = {
    has(target, prop) {
        return prop !== "secret";
    }
};

const proxy8 = new Proxy(target8, handler8);
// console.log("secret" in proxy8);  // Output: false
// console.log("visible" in proxy8); // Output: true

// // --------------------------------------------------------------------------
// 9. isExtensible() Object.isExtensible() chaqirilganda ishga tushadi.
const target9 = {};
const handler9 = {
    isExtensible(target) {
        console.log("Checking if extensible");
        return Object.isExtensible(target);
    }
};

const proxy9 = new Proxy(target9, handler9);
// console.log(Object.isExtensible(proxy9));
//  // Output: Checking if extensible + true

// // --------------------------------------------------------------------------
// 10. ownKeys() Object.keys(), for...in, Object.getOwnPropertyNames() chaqirilganda ishlaydi.
const target10 = { a: 1, b: 2 };
const handler10 = {
    ownKeys(target) {
        console.log("Returning custom keys");
        return ["a"];
    }
};

const proxy10 = new Proxy(target10, handler10);
// console.log(Object.keys(proxy10)); 
// Output: Returning custom keys + [ 'a' ]

// // --------------------------------------------------------------------------
// 11. set()
// Xususiyatga qiymat tayinlashda ishga tushadi.
const target11 = {};
const handler11 = {
    set(target, prop, value) {
        // console.log(`Setting ${prop} to ${value}`);
        target[prop] = value;
        return true;
    }
};

const proxy11 = new Proxy(target11, handler11);
proxy11.name = "Komol";
// Output: Setting name to Komol
// console.log(proxy11.name);
// Output: Komol
// // --------------------------------------------------------------------------

// 12. setPrototypeOf()
// Obyektga yangi prototip o‘rnatishda(Object.setPrototypeOf()) ishlaydi.
const target12 = {};
const handler12 = {
    setPrototypeOf(target, proto) {
        // console.log("Setting prototype");
        return Reflect.setPrototypeOf(target, proto);
    }
};

const proxy12 = new Proxy(target12, handler12);
Object.setPrototypeOf(proxy12, Array.prototype);
// Output: Setting prototype
// console.log(proxy12 instanceof Array);
// Output: true