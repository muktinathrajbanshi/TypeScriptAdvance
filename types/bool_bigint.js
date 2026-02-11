// * -----------------------------------------
// * Boolean Type
// * -----------------------------------------
//? In TypeScript, the boolean type represents a value that can be either true or false. It
//? is one of the basic primitive types in the language.
// let isMyNameMuktinath:boolean = true;
// let isDone:boolean = true;
// let hasStarted:boolean = false;
// hasStarted = "yes"  invalid
//! Question: Check Even Number
//* 👉 Write a TypeScript function called isEven that takes a number as a parameter and 
//* returns true if the number is even and false otherwise.
// const isEven = (num:number):boolean => {
//    return num % 2 === 0;
// }
// console.log(isEven(5));
//* todo write a TypeScript function called isDivisibleBy4And8 that takes a number as a parameter
//* returns true if the number is divisible by both 4 and 8.
var isDivisibleBy4And8 = function (num1) {
    return num1 % 4 === 0 && num1 % 8 === 0;
};
console.log(isDivisibleBy4And8(16));
