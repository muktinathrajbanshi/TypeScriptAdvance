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

// const isDivisibleBy4And8 = (num1:number):boolean => {
//     return num1 % 4 === 0 && num1 % 8 === 0;
// }

// console.log(isDivisibleBy4And8(16));

// * ------------------------------------------------
// * BigInt Type
// * ------------------------------------------------

//? It is a built-in type that allows you to work with numbers that are larger than the range supported
//? by the regular number type.

//? BigInt literals are written by appending the n suffix to an integer literal.
//? In JS we can't read the whole numbers beyond 2 raise to power 53

// const maxNumber = Number.MAX_SAFE_INTEGER;
let bigNumber:bigint= 9007199254740991n
// console.log(bigNumber);

let anotherBigNumber = BigInt("90071992547409916");
// console.log(anotherBigNumber);


//! Assignment
let sum = bigNumber + anotherBigNumber;
console.log(sum);

let differece = bigNumber - anotherBigNumber;
console.log(differece);

let product = bigNumber * anotherBigNumber;
console.log(product)

let division = bigNumber / anotherBigNumber;
console.log(division);






