//* Generics in TypeScript allow you to create reusable components or functions that can work with
//* multiple data types.
function logAndReturn(value) {
    console.log(value);
    return value;
}
var numberResult = logAndReturn(42);
var stringResult = logAndReturn("Hello, Generics");
var booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
