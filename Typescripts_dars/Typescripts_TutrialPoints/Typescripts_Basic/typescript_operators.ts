let animal: string = "cat";
// let animal: string = "dog"; 
// Error: Cannot redeclare block-scoped variable 'animal'
// console.log(animal); // Output: cat
// -----------------------------------------------------
let bool: boolean = false;
// If the boolean is true, the variable num will be 1, otherwise it will be 2
if (bool) {
    let num: number = 1;
    // console.log(num);
} else {
    let num: number = 2;
    // console.log(num); //2
}
// -----------------------------------------------------
const lang: string = 'TypeScript';
const PI: number = 3.14;
// console.log(`Language: ${lang}`); //Language: TypeScript
// console.log(`Value of PI: ${PI}`); //Value of PI: 3.14
// -----------------------------------------------------
var num:number = -2 
var result = num > 0 ?"positive":"non-positive" 
// console.log(result)  //non-positive