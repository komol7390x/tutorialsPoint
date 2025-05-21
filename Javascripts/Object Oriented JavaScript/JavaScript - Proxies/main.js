const target = {
    a: 1,
    b: 2,
    greet(name) {
        return `Hello, ${name}`;
    }
};

const handler = {
    // 1. apply()
    apply(target, thisArg, args) {
        console.log("apply called");
        return target(...args);
    },

    // 2. construct()
    construct(target, args) {
        console.log("construct called");
        return new target(...args);
    },

    // 3. defineProperty()
    defineProperty(target, prop, descriptor) {
        console.log(`defineProperty: ${prop}`);
        return Reflect.defineProperty(target, prop, descriptor);
    },

    // 4. deleteProperty()
    deleteProperty(target, prop) {
        console.log(`deleteProperty: ${prop}`);
        return Reflect.deleteProperty(target, prop);
    },

    // 5. get()
    get(target, prop, receiver) {
        console.log(`get: ${prop}`);
        return target[prop] ?? "Not Found";
    },

    // 6. getOwnPropertyDescriptor()
    getOwnPropertyDescriptor(target, prop) {
        console.log(`getOwnPropertyDescriptor: ${prop}`);
        return Object.getOwnPropertyDescriptor(target, prop);
    },

    // 7. getPrototypeOf()
    getPrototypeOf(target) {
        console.log("getPrototypeOf called");
        return Object.getPrototypeOf(target);
    },

    // 8. has()
    has(target, prop) {
        console.log(`has: ${prop}`);
        return prop in target;
    },

    // 9. isExtensible()
    isExtensible(target) {
        console.log("isExtensible called");
        return Object.isExtensible(target);
    },

    // 10. ownKeys()
    ownKeys(target) {
        console.log("ownKeys called");
        return Object.keys(target);
    },

    // 11. preventExtensions()
    preventExtensions(target) {
        console.log("preventExtensions called");
        return Object.preventExtensions(target);
    },

    // 12. set()
    set(target, prop, value) {
        console.log(`set: ${prop} = ${value}`);
        target[prop] = value;
        return true;
    },

    // 13. setPrototypeOf()
    setPrototypeOf(target, proto) {
        console.log("setPrototypeOf called");
        return Reflect.setPrototypeOf(target, proto);
    }
};

const proxy = new Proxy(target, handler);

// === Examples to trigger handlers ===
proxy.a;                             // get
proxy.c = 3;                         // set
"b" in proxy;                        // has
Object.getPrototypeOf(proxy);       // getPrototypeOf
Object.getOwnPropertyDescriptor(proxy, "a"); // getOwnPropertyDescriptor
Object.defineProperty(proxy, "d", { value: 4 }); // defineProperty
delete proxy.b;                     // deleteProperty
Object.isExtensible(proxy);         // isExtensible
Object.preventExtensions(proxy);    // preventExtensions
Object.keys(proxy);                 // ownKeys
Object.setPrototypeOf(proxy, {});   // setPrototypeOf

// Apply handler – only for function proxies
const greet = new Proxy(function (name) {
    return `Hi, ${name}`;
}, handler);
console.log(greet("Komol"));        // apply

// Construct handler – only for constructor function proxies
const Person = new Proxy(function (name) {
    this.name = name;
}, handler);
const p = new Person("Komol");      // construct
  