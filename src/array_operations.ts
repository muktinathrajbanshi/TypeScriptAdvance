// * Arrays in TypeScript come with built-in methods that allow you to perform common operations

const fruits: string[] = ["apple", "banana", "orange", "mango"];

// a) Adding elements to an array using push:

const newUpdatedFruits = fruits.push("kiwi");
// console.log(newUpdatedFruits);
// console.log(fruits);


// b) Removing elements from an array using pop:
const lastData = fruits.pop();
// console.log(lastData);
// console.log(fruits);




//! Iterating over elements:
//? You can iterate over the elements of an array using various looping constructs such as for
//? for...of, or array methods like forEach.


// Using for loop

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// Using for...of loop
 
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// Using forEach Method

fruits.forEach((curVal:string) => console.log(curVal));