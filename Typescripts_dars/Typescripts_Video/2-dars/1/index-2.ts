interface T{
    id: number,
    readonly  name: string,
    status: string,
    found: number | string,
    students?:(number | string)[],
}
let user1: T = {
    id: 1,
    name: "Komol",
    status: "CEO",
    found: 27,
    students:[]
}
// ----------------------------------------
interface TT extends ID, Status{
    found: number | string,
    students?:(number | string)[],
}
type ID = {
    id: number,
}
type Status = {
    status:string,
}
// ----------------------------------------
interface P{
    readonly name:string
}
let obj:P = {
     name:"Komol"
}
// obj.name="Web"       //readonly da qiymati ozagrtira olaydi

let obj1:{name:string} = obj
obj1.name = "QWERTY"
console.log(obj.name);
