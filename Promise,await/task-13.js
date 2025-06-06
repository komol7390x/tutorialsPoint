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
//     name: "Laylo"
//     age:24;
// }
// let des = Object.getOwnPropertyDescriptors(obj, "name")
// console.log(des)
// ------------------------------------------------------------
const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter { };
const myEmitter = new MyEmitter();
// myEmitter.emit('error', new Error('whoops!'));
// ------------------------------------------------------------
myEmitter.on('error', (err) => {
  console.error(`whoops! there was an error \n${err}`);
});
// myEmitter.emit('error', new Error('whoops!'));
// ------------------------------------------------------------
// const { EventEmitter, errorMonitor } = require('node:events');

// const myEmitter = new EventEmitter();
// myEmitter.on(errorMonitor, (err) => {
    //   MyMonitoringTool.log(err);
    // });
    // myEmitter.emit('error', new Error('whoops!'));
// ------------------------------------------------------------
    