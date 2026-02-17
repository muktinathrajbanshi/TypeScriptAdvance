//? Union types allow you to specify that a variable can hold values of multiple types. You use the 
//? | (pipe) symbol to define a union type.In
// * In TypeScript, when using a union type, it is essential to ensure that at least one of the types in
// * the union includes all the required properties. Failure to do so will result in a type error during
// * compilation.
var inputValue = function (value) {
};
inputValue(55);
inputValue("hello world");
inputValue(true);
// * Practice, we'll create a function that can accept different types of arguments and perform different
// * actions based on the type of the input. Suppose we want to create a function that doubles the value
// * if the input is a number, or converts the input to uppercase if it's a string. To achieve this, we
// * can use a union type to allow the function to accept both numbers and strings.
// define 
var userInput = function (value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("Invalid Input Data");
    }
};
// function call
console.log(userInput(10));
console.log(userInput("Muktinath Rajbanshi"));
