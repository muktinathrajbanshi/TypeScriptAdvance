//* Generics in TypeScript allow you to create reusable components or functions that can work with
//* multiple data types.

function logAndReturn(value : number | string): number | string {
    console.log( value);
    return value;
    
}


const numberResult : string | number = logAndReturn(42);
const stringResult : string | number = logAndReturn("Hello, Generics");
const booleanResult  = logAndReturn(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);


