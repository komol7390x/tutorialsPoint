"use strict";
//3-dars DATATYPES
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
//3-4-dars UNION | BASICS
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
/*
//5-dars TYPE ALIASES| INTERFACE
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
// console.log(typeof(lang));
interface dataTypee{
    id: number,
    age: number
}
// -----------------------------------------------
Bu type datatype
type Base = {
    id: number;
    key: string
};
type ListBase =  Base& {
    found: number;
    title: string
}
type TupleBase = Base & {
    age: number;
    title:string
}
const date1: Base={
    id: 1,
    key:"Komol"
}
const list: ListBase ={
    id: 1,
    key: "Komol",
    found: 1234,
    title:"Web"
}
const tuple: TupleBase = {
    id: 1,
    key: "Komol",
    age: 27,
    title:"WebIlova"   //Bu type datatype
}
// -----------------------------------------------
//Interface liy datatypelar
interface Base  {
    id: number;
    key: string
};
interface ListBase extends  Base {
    found: number;
    title: string
}
interface TupleBase extends Base  {
    age: number;
    title:string
}
const date1: Base={
    id: 1,
    key:"Komol"
}
const list: ListBase ={
    id: 1,
    key: "Komol",
    found: 1234,
    title:"Web"
}
const tuple: TupleBase = {
    id: 1,
    key: "Komol",
    age: 27,
    title:"WebIlova"   //Bu type datatype
}

console.log(date1);
console.log(list);
console.log(tuple);
*/
// -----------------------------------------------------------------------
//6-dars  ARRAY
/*
let arrNum: number[] = [1, 2, 3, 4, 5]

let arrString: (string | number)[] = ["asdw", "Komol",123]
let arrString1: Array<string | number | boolean> = [true, "asdw", "Komol", 1234]

arrNum.push(6);
arrString1.push(false);

// console.log(arrString);
// console.log(arrString1);
// console.log(arrNum);
arrString1.forEach((val) => {
    if (typeof val == "string") {
        console.log(val);
    }
})
interface dataBase1 {
    id: number,
    name: string,
    age:number
}
type dataType = dataBase1[]
let data4:dataType = [
    { id: 1, name: "Web",age:27},
    { id: 2, name: "Web",age:27},
    { id: 3, name: "Web",age:27},
    { id: 4, name: "Web",age:27},
]
console.log(data4);
*/
// -----------------------------------------------------------------------
//7-dars  TUPPLE
let arr3 = ["k", 123];
arr3.push(1223);
console.log(arr3);
