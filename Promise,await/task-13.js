// const EventEmitter = require('node:events');
// class MyEmitter extends EventEmitter { }
// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//     setInterval(() => {
//         console.log('this happens asynchronously');
//     }, 2000);
    
// });
// myEmitter.emit('event', 'a', 'b');
// let obj = {
//     name: "Laylo",
//     age:24
// }
// let des = Object.getOwnPropertyDescriptors(obj, "name")
// console.log(des);
function mergeIntervals(intervals: number[][]): number[][] {
    // Your code here
}
mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]); // [[1, 6], [8, 10], [15, 18]]
mergeIntervals([[1, 4], [4, 5]]);                   // [[1, 5]]