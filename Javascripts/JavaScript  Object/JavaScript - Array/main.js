const str = "hello";
const arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']
// -----------------------------------------------------

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));  // false

// -----------------------------------------------------

const arr1 = Array.of(10, 20, 30);
console.log(arr1); // [10, 20, 30]

// -----------------------------------------------------

