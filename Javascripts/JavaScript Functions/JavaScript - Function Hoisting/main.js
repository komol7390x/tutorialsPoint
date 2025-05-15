// function printNum() {
//     y = 20;
//     console.log("The value of the variable y is : " + y);
//     var y; // Function scope
// }
// printNum();

try {
    x = 10; // x hali e'lon qilinmagan, shu sababli xato yuz beradi
    console.log("The value of x is -> " + x);
    let x;  // x bu yerda e'lon qilinmoqda
} catch (error) {
    console.log(error.message);// xatolikni chop etadi
}