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
 