// function* test() {
//     console.log("I'm before yield expression");
//     yield 20;
// }
// const genObj = test();
// console.log(genObj.next());

// function* test() {
//     yield 20;
//     yield [1, 2, 3];
//     yield "Hello World";
// }
// let res = test();
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

// function* test() {
//     yield;
// }

// let res = test();
// console.log(res.next());
// console.log(res.next());

// function* test() {
//     let result = yield 20;
//     console.log("default value paased to next() method " + result);
// }

// let res = test();
// console.log(res.next());
// console.log("\n");
// console.log("\n");
// console.log(res.next(30));

// Generator function
function* test() {
    for (let p = 0; p < 6; p += 2) {
        yield p;
    }
}
let res = test();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());