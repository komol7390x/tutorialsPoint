let currentDate = new Date();         // Hozirgi sana va vaqt
let dateNumber = Number(currentDate); // Sana vaqti raqamga aylantiriladi
console.log(dateNumber);              // 1970-yil 1-yanvardan boshlab o'tgan millisekundalar soni

let timeInMillis = currentDate.getTime(); // Sana vaqti millisekundlarda
console.log(timeInMillis);       