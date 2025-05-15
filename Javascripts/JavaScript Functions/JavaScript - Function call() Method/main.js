// function greet(greeting) {
//     console.log(greeting + ", " + this.name);
// }
// const person = { name: "Alice" };
// greet("Hello");
// greet.call(person, "Hello");


const student = {
    getAge: function () {
        return this.age;
    }
}
const student1 = {
    name: "John",
    age: 22
}

const student2 = {
    name: "Doe",
    age: 18
}

console.log(student.getAge.call(student2));
