// * Map & Filter Method in Array in TS
var numbers = [1, 2, 3, 4, 5];
//! Map Method
//* The map method creates a new array by applying a provided function to each element of the
//* original array. It transforms each element and returns a new array with the transformed values.
//? 1: Doubling each number
// const doubleData:number[] = numbers.map((curVal:number) => curVal * 2 );
// console.log(doubleData);
//? 2: Converting numbers to strings
// const numberToString:string[] = numbers.map((curVal:number) => curVal.toString() );
// console.log(numberToString);
//! Filter Method
//? 1: Filtering even numbers
// const evenNumbers:number[] = numbers.filter((curElem:number) => curElem%2 === 0 );
// console.log(evenNumbers);
//? 2: Filtering numbers greater than 3
var numGreaterThanThree = numbers.filter(function (curElem) { return curElem > 3; });
console.log(numGreaterThanThree);
//todo Homework Time
// * Practice questions for map:
//? 1: Given an array of strings representing names, create a new array that contains the uppercase
//? version of each name.
//? 2: Given an array of numbers, create a new array that contains the square of each number
// * Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings with a length
//? greater than 15.
// * const names: string[] = ["Hari", "Ram", "Mukti", "Shyam", "Krishna"];
//? 2: Given an array of strings, filter out the names
