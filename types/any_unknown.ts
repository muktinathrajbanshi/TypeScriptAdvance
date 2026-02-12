// * ------------------------------------
// * Any Type
// * ------------------------------------

//? The any type is the most flexible type in TypeScript. It essentially turns off all type checking
//? for the variables or expressions it is applied to.
//? you will see any type when u first write code

// let myfavNum:any = 5;
// myfavNum = "muktinath"
// myfavNum = true

//! useCases
// * Working with Dynamic Data: When dealing with data from dynamic sources like user inputs,
// * network responses, or deserialized JSON objects, the any type can be useful.

// * Migration from JavaScript: When migrating an existing JavaScript codebase to TypeScript,
// * using the any type can be a convenient way to quickly annotate variables and functions without
// * immediately specifying their precise type.

// * -------------------------------------------------------
// * Unknown Type
// * -------------------------------------------------------

//? The unknown type is a safer alternative to any because it still enforces type checking and 
//? type safety.
//? Variables of type unknown can hold values of any type, but you must perform type checks or
//? type assertions before using them in specific ways.
