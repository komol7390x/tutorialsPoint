"use strict";
var global_num = 12; //global variable 
class Numbers {
    constructor() {
        this.num_val = 13; //class variable 
    }
    storeNum() {
        var local_num = 14; //local variable 
        console.log(local_num);
    }
}
Numbers.sval = 10; //static field 
// console.log("Global num: "+global_num)  
// console.log(Numbers.sval)   //static variable  
var obj2 = new Numbers();
// console.log("Global num: " + obj2.num_val) 
// obj2.storeNum()
// --------------------------------------------------------
var global_num = 12; // Global o‘zgaruvchi
var Numbers2 = (function () {
    function Numbers() {
        this.num_val = 13; // Class (obyekt) o‘zgaruvchisi
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // Local o‘zgaruvchi
        return local_num;
    };
    Numbers.sval = 10; // Static maydon
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log("Static num: " + Numbers2.sval); // Static o‘zgaruvchi
var obj3 = new Numbers2();
console.log("Object num_val: " + obj3.num_val);
console.log("Local num (from method): " + obj3.storeNum());
// --------------------------------------------------------
