"use strict";
let user1 = {
    id: 1,
    name: "Komol",
    status: "CEO",
    found: 27,
    students: []
};
let obj = {
    name: "Komol"
};
// obj.name="Web"       //readonly da qiymati ozagrtira olaydi
let obj1 = obj;
obj1.name = "QWERTY";
console.log(obj.name);
