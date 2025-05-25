var funcName: (param1: string, param2: string) => void;
    funcName=function (
    param1: string,
    param2: string
 ): void {
    // code for the anonymous function
    console.log("The value of the param1 is " + param1);
    console.log("The value of the param2 is " + param2);
 };
funcName("TutorialsPoint", "TypeScript");
// --------------------------------------------------------------------------
var test: (valeu1: number) => number = (value1: number): number => {
    return 10 * value1;
 };
 var result = test(12);
console.log("The returned value from the test function is " + result);
// --------------------------------------------------------------------------
var numbers: Array<number> = [90, 64, 323, 322, 588, 668, 9, 121, 34, 1, 2];
numbers.sort((value1: number, value2: number): number => {
   return value1 < value2 ? 1 : -1;
});
console.log(numbers);
// --------------------------------------------------------------------------
function printObjValues({ key1, key2 }: { key1: string; key2: number }) {
   console.log("The value of key1 is " + key1);
   console.log("The value of key2 is " + key2);
}
printObjValues({ key1: "Hello", key2: 20 });
printObjValues({ key1: "TypeScript", key2: 50 });
// --------------------------------------------------------------------------
function getParams({param11,param12 = "default"}: {param11: boolean,param12?: string}):void {
    console.log("The value of param1 is " + param11);
    console.log("The value of param2 is " + param12);
}

getParams({ param11: true, param12: "value" });
getParams({ param11: false });