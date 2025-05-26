var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this._name = name;
        this._age = age;
    }
    Person1.prototype.sayHello = function () {
        return "Hello mening ismim ".concat(this._name, ",men ").concat(this._age, " daman");
    };
    return Person1;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(name, age, group, course) {
        var _this = _super.call(this, name, age) || this;
        _this._group = group;
        _this._course = course;
        return _this;
    }
    Student1.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
        return "Hello mening ismim ".concat(this._name, ",men ").concat(this._age, " daman\n").concat(this._course, " kursning ").concat(this._group, " talabasiman");
    };
    return Student1;
}(Person1));
var Ibrohim = new Person1("Ibrohim", 19);
// console.log(Ibrohim);
var Sardor = new Student1("Sardor", 27, "616-guruh", 4);
// console.log(Sardor);
// console.log(Ibrohim.sayHello());
console.log(Sardor.sayHello());
