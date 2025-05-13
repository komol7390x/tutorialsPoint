'use strict'
let currentDate = new Date();         // Hozirgi sana va vaqt
let dateNumber = Number(currentDate); // Sana vaqti raqamga aylantiriladi
console.log(dateNumber);              // 1970-yil 1-yanvardan boshlab o'tgan millisekundalar soni

let timeInMillis = currentDate.getTime(); // Sana vaqti millisekundlarda
console.log(timeInMillis);       
var a = 5;
var a = 6;
console.log(a);

num = !!0; // !0 = true, !!0 = false
num = !!1; // !1 = false, !!1 = true
str = !!""; // !"" = true, !!"" = false
str = !!"Hello"; // !"Hello" = false, !!"Hello" = true