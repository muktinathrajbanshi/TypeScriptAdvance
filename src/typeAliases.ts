// * In TypeScript, a type alias is a way to give a name to a specific type or combination of types.
// * It allows you to create a custom name for a type, making it easier to reuse and refer to the
// * same type in different parts of your code. Type aliases provide better readability,
// * organization, and abstraction of complex types

// * To define a type alias, you use the type keyword followed by the alias name and the type 
// * definition:


// type Person = {
//     name : string;
//     age : number;
//     isStudent : boolean;
//     address : { city : string; country : string }
// }

// const person : Person = {
//     name : "Muktinath Rajbanshi",
//     age : 23,
//     isStudent : true,
//     address : {
//         city : "Kathmandu",
//         country : "Nepal"
//     }
// }

// const person1 : Person = {
//     name : "Milan Rajbanshi",
//     age : 24,
//     isStudent : true,
//     address : {
//         city : "Birtamode",
//         country : "Nepal"
//     }
// }

// console.log(person);
// console.log(person1);


// Todo Create a Product Object:
//? Define an interface or type representing a product with properties for name, price, and quantity.
//? Create a product object with the following data:

// name : "laptop"
// price : "1000"
// Quantity : 5

type Product = {
    Name : string;
    Price : number;
    Quantity : number;
}

const product : Product = {
    Name : "Laptop",
    Price : 1000,
    Quantity : 5
}

// console.log(product.Name);





//? Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice 
//? that calculates and returns the total price (price * quantity) of the product.

const calculateTotalPrice = (product:Product) => {
    return `${product.Name} total cost ${product.Price} `;
}

console.log(calculateTotalPrice(product));
