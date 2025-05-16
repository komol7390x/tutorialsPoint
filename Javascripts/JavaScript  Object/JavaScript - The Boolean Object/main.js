Boolean.prototype.sayHello = function () {
    return "Hello from Boolean object!";
};

let bool = new Boolean(true);
console.log(bool.sayHello()); // Hello from Boolean object!
  
let bool1 = new Boolean(true);
console.log(bool1.toString()); // "true"

