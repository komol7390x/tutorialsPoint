// TypeScript - Features

var a: number = 10;
function printNumber(num: number) {
  console.log(num);
}
// printNumber(a);
// ----------------------------------------
interface IPerson {
    firstName: string;
    lastName: string;
    getFullName(): string;
  }
  let obj: IPerson = {
    firstName: "John",
    lastName: "Doe",
    getFullName(): string {
      return this.firstName + " " + this.lastName;
    }
  };
// console.log(obj.getFullName());
// ------------------------------------------------------
class Greeter {
    greeting: string;
    constructor(message: string) {
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
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    display(): void {
      console.log(this.name);
    }
  }
  class Employee extends Person {
    empCode: number;
    constructor(name: string, code: number) {
      super(name);
      this.empCode = code;
    }
    show(): void {
      console.log(this.empCode);
    }
  }
  
  let emp: Employee = new Employee("John", 123);
//   emp.display(); // John
//   emp.show(); // 123
// ------------------------------------------------------
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
  }
//   console.log(Direction.Up); // 1
//   console.log(Direction.Down); // 2
//   console.log(Direction.Left); // 3
//   console.log(Direction.Right); // 4
// ------------------------------------------------------
// TypeScriptda Union types
var unionType: string | number;
unionType = "Hello World"; // Matn qiymati berilmoqda
console.log("String qiymati: " + unionType);

unionType = 500; // Son qiymati berilmoqda
console.log("Number qiymati: " + unionType);

// unionType = true; // Xatolik: 'boolean' turi 'string | number' turiga mos emas
