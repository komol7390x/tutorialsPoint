// Typescript sinflari
class Person{
    _name: string;
    _age: number
    constructor(name: string, age: number) {
        this._name = name;
        this._age=age
    }
    //Construktor metodidan faqat 1marta foydalansa boladi
    info(value: number): string{
        return `${this._name}-${this._age+value} yoshda`
    }
    static isFlying = false;
    static description(): string{
        return "Bu class Person metodi..."
    }
    get name1(): string{
        return this._name;
    }
    set age(value: number) {
        if (value > 18) {
            this._age = value;
        }
    }
}
const Komol: Person = new Person("Komol", 27);
const Ismoil: Person = new Person("Ismoil", 18);

