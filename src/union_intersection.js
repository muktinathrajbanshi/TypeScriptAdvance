//? Union types allow you to specify that a variable can hold values of multiple types. You use the 
//? | (pipe) symbol to define a union type.In
// * In TypeScript, when using a union type, it is essential to ensure that at least one of the types in
// * the union includes all the required properties. Failure to do so will result in a type error during
// * compilation.
// const inputValue = (value : string | number | boolean) : void => {
// }
// inputValue(55);
// inputValue("hello world");
// inputValue(true);
// * Practice, we'll create a function that can accept different types of arguments and perform different
// * actions based on the type of the input. Suppose we want to create a function that doubles the value
// * if the input is a number, or converts the input to uppercase if it's a string. To achieve this, we
// * can use a union type to allow the function to accept both numbers and strings.
// define 
// const userInput = (value : string | number): string | number => {
//     if (typeof value === "number") {
//         return value * 2;
//     } else if (typeof value === "string") {
//         return value.toUpperCase();
//     } else {
//         throw new Error("Invalid Input Data")
//     }
// }
// // function call
// console.log(userInput(10));
// console.log(userInput("Muktinath Rajbanshi"));
//Todo Homework Time
//? We want to create a function that formats the value passed to it in a specific way based on its type:
//? If the input is a number, it should add a dollar sign and format it with two decimal places.
//? If the input is a boolean, it should return "Yes" for true and "No" for false.
//? If the input is a string, it should capitalize the first letter.
var inputUser = function (value) {
    if (typeof value === "number") {
        return "$".concat(value.toFixed(2));
    }
    else if (typeof value === "boolean") {
        return value ? "Yes" : "No";
    }
    else if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return "";
};
console.log(inputUser(10));
console.log(inputUser(false));
console.log(inputUser("muktinath rajbanshi"));
