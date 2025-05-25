//havli usul
let a: any = 10;
let b: number = a;
// console.log(b);

// havsiz usul
let c: unknown = 20.1234;
// let d: number = c;

let e: number = <number>c;
let f: number = c as number;
c=+(c as number).toFixed(2)
// console.log(c);

let h: number | string | boolean = 10;
h = 10;
h = true;
// h=12345n

//litteral types
let s: "sm" | "dm" | "lm";
// s=12
// s=true
s = "sm";
s = "dm"
