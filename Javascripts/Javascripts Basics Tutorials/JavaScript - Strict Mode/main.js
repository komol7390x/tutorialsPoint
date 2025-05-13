// // "use strict";
// let y = 50; // This is valid
// console.log("The value of the Y is: " + y);
// // x = 100; // This is not valid
// console.log("The value of the X is: ");

// ----------------------------------------------------------

// x = 100; // This is valid
// console.log("The value of the X is: " + x);
// function test() {
//     "use strict";
//     y = 55; // This is not valid
//     console.log("The value of the y is: " + y);
// }
// test();

// ----------------------------------------------------------

// num = 70.90; // This is invalid
// numObj = { a: 89, b: 10.23 }; // This is invalid
// console.log(num);
// console.log(numObj);

// 'use strict';
// let women = { name: "Aasha", age: 29 };
// console.log(women);
// delete women.prototype; // This is invalid
// console.log(women);

// function func() { }
// delete func; // This is invalid

// function func(param1, param1, param2) {
//     // Function with 2 param1 is not allowed!
// }

// let octal = 010; // Throws an error

// let octal = \010; // Throws an error

// let public = 100; // Throws an error

// 'use strict';

// let person = {};
// Object.defineProperty(person, 'name', { value: "abc", writable: false });
// person.name = "JavaScript"; // throws an error
// console.log(person.name);

// function test() {
//     console.log(this); // Undefined
// }
// test();

// with (Math) { x = sin(2) }; // This will throw an error

eval("a = 8")
