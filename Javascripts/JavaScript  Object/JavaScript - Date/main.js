const currentDate = new Date();
console.log(currentDate); // Fri May 16 2025 15:29:57 GMT+0500 (Uzbekistan Standard Time)"

const date = new Date();
console.log(date.getFullYear()); // Yil
console.log(date.getMonth());    // Oy (0-12)
console.log(date.getDate());     // Kun (1-31)
console.log(date.getDay());      // Hafta kuni (0-6)
console.log(date.getHours());    // Soat (0-23)
console.log(date.getMinutes());  // Daqiqalar (0-59)
console.log(date.getSeconds());  // Soniyalar (0-59)
console.log(date.getMilliseconds()); // Millisekundlar (0-999)
console.log("\n");
console.log(date.getUTCFullYear()); // Yil (UTC)
console.log(date.getUTCMonth());    // Oy (UTC)
console.log(date.getUTCDate());     // Kun (UTC)
console.log(date.getUTCDay());      // Hafta kuni (UTC)
console.log(date.getUTCHours());    // Soat (UTC)
console.log(date.getUTCMinutes());  // Daqiqalar (UTC)
console.log(date.getUTCSeconds());  // Soniyalar (UTC)
console.log("\n");
const date1 = new Date();
date1.setFullYear(2025);
date1.setMonth(4); // May oyini belgilash
date1.setDate(16);
date1.setHours(15);
date1.setMinutes(21);
date1.setSeconds(10);
date1.setMilliseconds(0);
console.log(date1); // "2025-05-16T15:21:10.000Z"
console.log("\n");
const date2 = new Date();
console.log(date2.toDateString());       // "Sat May 16 2025"
console.log(date2.toTimeString());       // "15:21:10 GMT+0500 (Uzbekistan Standard Time)"
console.log(date2.toLocaleString());     // "5/16/2025, 3:21:10 PM"
console.log(date2.toLocaleDateString()); // "5/16/2025"
console.log(date2.toLocaleTimeString()); // "3:21:10 PM"
console.log(date2.toISOString());        // "2025-05-16T10:21:10.000Z"

const date3 = new Date();

// 1 kun qo'shish
date3.setDate(date3.getDate() + 1);

// 1 hafta ayirish
date3.setDate(date3.getDate() - 7);

// 2 oy qo'shish
date3.setMonth(date3.getMonth() + 2);

// 3 yil ayirish
date3.setFullYear(date3.getFullYear() - 3);

console.log(date3);


