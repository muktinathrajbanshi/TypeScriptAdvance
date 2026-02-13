// * Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically
// * determine and assign types to variables, expressions, and function return values based on their
// * usage and context in the code.

// let myName = "muktinath";
// let myFavNum = 5;
// myFavNum = true

// let firstName = "muktinath"; // The compiler infers the type string for the variable name.

// let age = 25; // The compiler infers the type number for the variable age.

let isValid = true; // The compiler infers the type boolean for the variable isValid

// todo 👉 What are some best practices for using type inference in TypeScript?
//? Use type inference for simple cases where the assigned value clearly indicates the intended type.
//? When in doubt, provide explicit type annotations to make your intentions clear.
//? Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
//? Regularly review and refactor your code to ensure the inferred types align with your intentions.

//! 🕵️‍♂️ Here are the two questions for practices 🕵️‍♂️ 
// * 1: Declare a variable message and initialize it with the value "Hello, TypeScript!". Infer the type
// * of message using type inference.

let message = "Hello, TypeScript!";

// let message: string

// * 2: Write a function calculateArea that takes the length and width parameters of type number and 
// * returns their product. Infer the return type of the function using type inference.


const calculateArea = (length:number, width:number) => {
    return length * width;
} 


console.log(calculateArea(12, 4));

//number no need to write :number