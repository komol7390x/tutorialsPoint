const obj = {
    product: "mobile",
    brand: "Apple",
    year:2020
}
console.log(obj);
let product = obj.product ?? "laptop";
let objModel = obj.model ?? "Iphone 13 pro max";
console.log(product);
console.log(objModel);

// let x = (5 || 7) ?? 9; // works
// let x = 5 || 7 ?? 9; // Syntax Error
console.log(x);

