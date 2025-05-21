// function func_name(callback) {
//     // funksiya tana qismi
//     callback(); // callback funksiyani chaqirish
//  }
 
//  func_name(callback); // Funksiyani chaqirish
 
//  // yoki anonim (yoki arrow) funksiyani ham uzatish mumkin
//  func_name(() => {
//     // callback funksiyaning tana qismi
//  });

//  --------------------------------------------------------------------
function mathOperation(a, b, callback) {
    let result = callback(a, b);
    console.log("Natija: " + result );
}

mathOperation(10, 20, function (a, b) {
    return a + b; // Qo‘shish
});

mathOperation(20, 10, function (a, b) {
    return a - b; // Ayirish
});

mathOperation(10, 20, function (a, b) {
    return a * b; // Ko‘paytirish
});

// -------------------------------------------------------------------------

console.log("Dastur boshlandi. <br>");

setTimeout(printMessage, 5000); // Asinxron kod

function printMessage() {
    console.log("printMessage() funksiyasidamiz. <br>");
}

console.log("Dastur tugadi. <br>");
// -------------------------------------------------------------------------

let arr = [23, 21, 56, 11, 10, 7, 8];

// O'sish tartibida tartiblash (standart)
console.log("Saralangan massiv (o‘sish): " + arr.sort());

// Kamayish tartibida tartiblash
let sorted = arr.sort(function (a, b){
    return b-a
});
console.log("<br>Saralangan massiv (kamayish): " + sorted);

// ----------------------------------------------------------------------------
function asyncTask(taskName, duration, callback) {
    output.innerHTML += "Task started " + taskName + "<br/>"
setTimeout(() => {
    output.innerHTML += 'Completed ' + taskName + '<br/>';
    callback();
}, duration);
}
// Task 1
asyncTask('Task 1', 1000, () => {

    // Task 2
    asyncTask('Task 2', 1500, () => {

        // Task 3
        asyncTask('Task 3', 1000, () => {
            output.innerHTML += "All tasks completed";
        });
    });
});