class Animal {
    protected name: string;
    constructor(name: string) {
       this.name = name;
    }
 
    protected makeSound() {
       console.log(`${this.name} makes a sound`);
    }
 }
 
 class Dog extends Animal {
    public bark() {
       console.log(`${this.name} barks!`);  // OK, chunki Dog -> Animal subclass
    }
 }
 const dog = new Dog("Buddy");
 dog.bark();             // OK
 // console.log(dog.name); // XATO! name - protected
// dog.makeSound();       // XATO! makeSound - protected
 

// ---------------------------------------------------------------------------------------
// Defining the class for car
class Car {
    model: string;
    price: number;
    readonly type: string = 'Car';
    constructor(model: string, price: number, type: string) {
        this.model = model;
        this.price = price;
        this.type = type;
    }
    display(): void {
        console.log(`Model: ${this.model}, Price: ${this.price}, Type: ${this.type}`);
    }
}
let car = new Car('BMW', 1000000, 'Sedan');
car.display();
 
// ---------------------------------------------------------------------------------------

type Point = {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error

console.log(p1.x, p1.y);
// ---------------------------------------------------------------------------------------
class Vehicle {
    getType() {
        return "Vehicle";
    }
}

// Define a class Car that extends Vehicle
class Car2 extends Vehicle {
    carName: string = "Innova";
    getCarName() {
        return this.carName;
    }
}

// Create an object of Car class
let car2 = new Car2();
console.log(car2.getType()); // Output: Vehicle
console.log(car2.getCarName()); // Output: Innova