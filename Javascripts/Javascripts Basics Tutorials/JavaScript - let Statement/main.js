let name = "John";
let age = 35;
let x = true;

let xy = 10;
var y = 20;
function test() {
    let xy = 50;
    var y = 100;
    console.log("x = " + xy + ", y = " + y);
}
test();

function test() {
    let bool = true;
    if (bool) {
        let x = 30;
        var y = 40;
        console.log("x = " + x + ", y = " + y);
    }
    // x can't be accessible here
    console.log("y = " + y);
}
test();

let a = 10;
// let x = 20; 
// // Bu xatolik beradi: SyntaxError: Identifier 'x' has already been declared

var ab = 30;
var ab = 40; // `var` bilan e’lon qilingan o‘zgaruvchini qayta e’lon qilish mumkin

console.log(ab); // Natija: 40