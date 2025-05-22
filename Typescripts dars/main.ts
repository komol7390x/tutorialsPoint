//2-dars
/*
let a1: string = "Komol";
console.log(a1);
// -----------------------------------------
let num: number = 12334332;
console.log(num);
// -----------------------------------------
let big1:bigint=1234n
console.log(big1);
// -----------------------------------------
let null1 = null
console.log(null1);
// -----------------------------------------
let und1 = undefined
console.log(und1);
// -----------------------------------------
let symb: symbol = Symbol("1223")
console.log(symb);
// -----------------------------------------
let obj: { age: string } = { age: "typescrits" };
console.log(obj);
// -----------------------------------------
let arr:number[] = [1,2,3,4,5,6,7,8];
console.log(arr);
// -----------------------------------------
function getDate(name: string, age: number) {
    return name
}
console.log(getDate("Komol",27).toUpperCase());
// -----------------------------------------------------------------------
*/
//3-4-dars
/*
let num: number | string | boolean= true;  //Type larni berish ketish kerak
// console.log( typeof num);
// -----------------------------------------
let num1: any = "123456"; //Ixtiyoriy qiymat bersa boladi
// console.log(num1);
// -----------------------------------------
let lang: "eng" | "uzb" | "rus" = "rus";
lang='eng'
// console.log(lang);

const data: {id?:number,value:"eng" | "uzb" | "rus"}[] = [
    { id: 1, value:"uzb" },
    {id:2,value:"eng"},
    {id:3,value:"rus"}
]
console.log(typeof(lang));
*/
// -----------------------------------------------------------------------
//5-dars
type Lang = "eng" | "uzb" | "rus"
type dataType = { id?: number, value: Lang }[]
type Func = (title:string,age:number) => void;

let lang: Lang = "rus";
lang='eng'
// console.log(lang);

const data: dataType = [
    { id: 1, value:"uzb" },
    {id:2,value:"eng"},
    {id:3,value:"rus"}
]
console.log(typeof(lang));
