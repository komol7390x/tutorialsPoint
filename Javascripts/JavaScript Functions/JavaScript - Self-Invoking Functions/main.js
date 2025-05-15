// (function () {
//     console.log("Self-invoked function is executed!");
// })();

// (function (name) {
//     console.log(`Welcome to ${name}`);
// })("Tutorials Point !");

(function () {
    var str = "JavaScript";
    window.string = str;
})();
console.log("The value of the string variable is: " + string);

    