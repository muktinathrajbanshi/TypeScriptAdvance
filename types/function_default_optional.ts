//? Optional and Default Parameters:

// * TypeScript allows you to define optional and default parameters in functions.

// * Optional parameters are denoted by appending a ? symbol after the parameter name, and default
// * parameters are specified by providing a default value in the parameter declaration.

// const greet3 = (name:string, id:number): string => {
//     return `Welcome, ${name} and your id is ${id}`
// }
// const employee = greet3("muktinath", 5);
// console.log(employee);

// // fun define 
// const greet3 = (name:string, id:number = 1): string => {
//     return `Welcome, ${name} and your id is ${id}`
// }

const greet3 = (name:string, id?:number): string => {

    if (id) {
        return `Welcome, ${name} and your id is ${id}`;
    } else {
        return `Welcome, ${name} `
    }
}

// func call 
const employee = greet3("muktinath");
const employee2 = greet3("milan", 2);

console.log(employee);
console.log(employee2);



