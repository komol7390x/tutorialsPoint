// 1. Yangi WeakMap yaratish
const wm = new WeakMap();

// 2. Obyekt yaratamiz
const user = { name: "Ali" };

// 3. set() - qiymat qo‘shamiz
wm.set(user, "Admin");

// 4. get() - qiymatni olamiz
console.log(wm.get(user)); // Natija: "Admin"

// 5. has() - obyekt borligini tekshiramiz
console.log(wm.has(user)); // Natija: true

// 6. delete() - obyektni o‘chiramiz
wm.delete(user);
console.log(wm.has(user)); // Natija: false
