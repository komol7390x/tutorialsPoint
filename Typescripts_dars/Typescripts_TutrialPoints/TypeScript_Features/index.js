// Typescript sinflari
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    //Construktor metodidan faqat 1marta foydalansa boladi
    Person.prototype.info = function (value) {
        return "".concat(this._name, "-").concat(this._age + value, " yoshda");
    };
    Person.description = function () {
        return "Bu class Person metodi...";
    };
    Object.defineProperty(Person.prototype, "name1", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        set: function (value) {
            if (value > 18) {
                this._age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.isFlying = false;
    return Person;
}());
var Komol = new Person("Komol", 27);
var Ismoil = new Person("Ismoil", 18);
