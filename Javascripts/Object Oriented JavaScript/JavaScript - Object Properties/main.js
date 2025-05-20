const propertyName = "color";
const car = {
    color: "red",
    brand: "BMW"
};

console.log(car[propertyName]); // red
// ------------------------------------------------------------

const person = {
    "first-name": "John",
    "age": 30
};

console.log(person["first-name"]); // John
console.log(person["age"]);        // 30
  