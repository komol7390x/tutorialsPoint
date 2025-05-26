class Person1{
    _name: string;
    _age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._age=age
    }
    sayHello(): string{
        return `Hello mening ismim ${this._name},men ${this._age} daman`
    }
}
class Student1 extends Person1{
    _group: string;
    _course: number;
    constructor(name: string, age: number, group: string, course: number) {
        super(name, age);
        this._group = group;
        this._course=course
    }
    sayHello(): string {
        super.sayHello()
        return `Hello mening ismim ${this._name},men ${this._age} daman\n${this._course} kursning ${this._group} talabasiman`
    }
}
 
const Ibrohim: Person1 = new Person1("Ibrohim", 19);
// console.log(Ibrohim);
const Sardor: Student1 = new Student1("Sardor", 27, "616-guruh", 4)
// console.log(Sardor);
// console.log(Ibrohim.sayHello());
console.log(Sardor.sayHello());




