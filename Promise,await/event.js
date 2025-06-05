const res = document.getElementById("myBtn");
res.addEventListener("click", function () {
    alert("Tugma bosilmadi!")
})

// ------------------------------------------------

const EventEmitter = require("events");

const newEmit = new EventEmitter();
newEmit.on("Salom ber", (ism) => {
    console.log(`Salom, ${ism}!`);
})
newEmit.emit("Salom ber", "Komol")

// ------------------------------------------------
const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();
myEmitter.on('event', function (a, b) {
    console.log(a, b, this === myEmitter);
});
myEmitter.emit('event', 'a', 'b');