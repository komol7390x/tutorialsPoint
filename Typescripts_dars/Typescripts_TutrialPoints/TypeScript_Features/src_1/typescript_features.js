"use strict";
// TypeScript - Features
var a = 10;
function printNumber(num) {
    console.log(num);
}
let obj = {
    firstName: "John",
    lastName: "Doe",
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
};
// console.log(obj.getFullName());
// ------------------------------------------------------
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
//   console.log(greeter.greet()); // Hello, world;
// ------------------------------------------------------
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class Employee extends Person {
    constructor(name, code) {
        super(name);
        this.empCode = code;
    }
    show() {
        console.log(this.empCode);
    }
}
let emp = new Employee("John", 123);
//   emp.display(); // John
//   emp.show(); // 123
// ------------------------------------------------------
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//   console.log(Direction.Up); // 1
//   console.log(Direction.Down); // 2
//   console.log(Direction.Left); // 3
//   console.log(Direction.Right); // 4
// ------------------------------------------------------
// TypeScriptda Union types
var unionType;
unionType = "Hello World"; // Matn qiymati berilmoqda
console.log("String qiymati: " + unionType);
unionType = 500; // Son qiymati berilmoqda
console.log("Number qiymati: " + unionType);
// unionType = true; // Xatolik: 'boolean' turi 'string | number' turiga mos emas
