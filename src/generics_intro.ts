//* Generics in TypeScript allow you to create reusable components or functions that can work with
//* multiple data types.

// function logAndReturn(value : number | string): number | string {
//     console.log( value);
//     return value;
    
// }


// const numberResult : string | number = logAndReturn(42);
// const stringResult : string | number = logAndReturn("Hello, Generics");
// const booleanResult  = logAndReturn(true);

// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);


//! Generic function to log and return an input value
// function logAndReturn<T>(value : T) : T {
//     console.log(value);
//     return value;
// }

//! Using the generic function with different types
// const numberResult : number = logAndReturn<number>(42);
// const stringResult : string = logAndReturn<string>("Hello, Generics");
// const booleanResult : boolean = logAndReturn<boolean>(true);

// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);

//? Homework Time
//* Here is the function overloading Example? 

//  function add(a: number, b: number): number;
//  function add(a: string, b: string): string;
//  function add(a: any, b: any) : any {
//     return a + b;
//  }

// function add<T>(a: T, b: T): T {
//     return (a as any) + (b as any) ;
// }


function add<T,U>(a:T, b:U, c:boolean) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    
    
    
}


const result1  = add<number, string>(5, "10", true); // Output: 15
const result2  = add<string, number>("Hello, ", 5, false); // Output: "Hello, world!"

// console.log(result1);
// console.log(result2);



