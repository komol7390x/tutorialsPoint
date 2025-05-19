function greet(greeting, punctuation) {
    return greeting + ", " + this.name + punctuation;
}

const obj = { name: "Komol" };

const result = Reflect.apply(greet, obj, ["Salom", "!"]);
console.log(result); // Salom, Komol!
  