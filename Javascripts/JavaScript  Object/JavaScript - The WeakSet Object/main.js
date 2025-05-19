const weakSet = new WeakSet();

const user1 = { name: "Komol" };
const user2 = { name: "Ali" };

weakSet.add(user1);
weakSet.add(user2);

console.log(weakSet.has(user1)); // true
console.log(weakSet.has({ name: "Komol" })); // false (yangi obyekt, manzili boshqacha)


const ws1 = new WeakSet();
const obj = { data: 123 };

ws1.add(obj);
console.log(ws1.has(obj)); // true
// ----------------------------------------------
ws2.delete(obj);
console.log(ws2.has(obj)); // false


const ws3 = new WeakSet();

// ws3.add(123); ❌ Xatolik: faqat obyekt bo'lishi mumkin
// TypeError: Invalid value used in weak set
