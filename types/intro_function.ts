//! Function Declaration:
// * You can declare a function using the function keyword, followed by the function name, a list of
// * parameters enclosed in parentheses, and a return type. The function body contains the code that
// * will be executed when the function is called.

//! Function Invocation:
// * To execute a function, you simply invoke it by using its name followed by parentheses.
// * You can provide arguments (actual values) for the parameters defined in the function declaration.

// // Greeting function define
// function greet(name:string, id:number) {
//     console.log(`Welcome, ${name} and your id is ${id}`);
    
// }

// // function call 
// greet("muktinath", 1);


// // Greeting function define
// const greet = (name:string, id:number) => {
//     console.log(`Welcome, ${name} and your id is ${id}`);
    
// }
// // function call 
// greet("muktinath", 1);

//! Function return: How do you specify the return type of a function in TypeScript?
// * To specify the return type of a function, you can use the colon (:) followed by the desired type
// * after the function's parameter list.

// // Greeting function define
// const greet = (name:string, id:number):string => `Welcome, ${name} and your id is ${id}`

// // function call 
// const myGreet = greet("muktinath",1);
// console.log(myGreet);

//TODO Practice Time
//? Write a function called isPalindrome that takes a string as a parameter and returns true if the 
//? string is a palindrome (reads the same forwards and backwards), and false otherwise.

const isPalindrome = (palin:string):boolean => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
}
console.log(
isPalindrome("12321"));




