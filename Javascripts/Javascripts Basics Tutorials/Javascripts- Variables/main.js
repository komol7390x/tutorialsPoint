var num = 765; // Number
var str = "Welcome"; // String
var bool = false; // Boolean
console.log(num,str,bool);


var _abc = "Hi!";
var $abc = "Hello!";
//  var 9abc = "Bye!";  // This is invalid
console.log("_abc " + _abc + "\n");
console.log("$abc = " + $abc + "\n");

var myVar = "global";      // Declare a global variable
function checkscope() {
    var myVar = "local";    // Declare a local variable
    console.log(myVar);
}
checkscope()

let name1 = "tutorialspoint"; // String type variable
let number = 10.25; // Number type variable
console.log("name = " + name1 + ", number = " + number );