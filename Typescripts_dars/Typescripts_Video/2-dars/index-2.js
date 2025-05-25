var user1 = {
    id: 1,
    name: "Komol",
    status: "CEO",
    found: 27,
    students: []
};
var obj = {
    name: "Komol"
};
// obj.name="Web"       //readonly da qiymati ozagrtira olaydi
var obj1 = obj;
obj1.name = "QWERTY";
console.log(obj.name);
