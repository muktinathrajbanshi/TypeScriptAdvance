// * In TypeScript, objects are used to represent data with key-value pairs. Each key in the object
// * is a string (or a symbol in ES6) that maps to a value

//? let's consider a real-life example of representing a person's information using TypeScript 
//? objects
//? 🙅‍♂️ -> name, age, isStudent, address{ city, country }

// const person:{
//     name : string;
//     age : number;
//     isStudent : boolean;
//     address : { city : string; country : string}
// } = {
//     name : "Muktinath",
//     age : 23,
//     isStudent : true,
//     address : {
//         city : "Kathmandu",
//         country : "Nepal"
//     }
// }


// // Todo Accessing the object data
// console.log(person.address.country);

// // Todo Updating object properties
// person.address.country = "India";
// console.log(person.address.country);


//! Homework
//? Create a Product Object:
//? Define a product with properties for name, price, and quantity. Create a product object with 
//? the following data:

// Name : "Laptop"
// Price : 1000
// Quantity : 5

const product : {
    Name : string;
    Price : number;
    Quantity : number
} = {
    Name : "Ramesh",
    Price : 1000,
    Quantity : 5
}

product.Quantity = 5000;
console.log(product.Quantity);


console.log(product.Name);
