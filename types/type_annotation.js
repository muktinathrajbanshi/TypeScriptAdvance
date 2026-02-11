//? Introduction to Types in TypeScript - P-4
// * In TypeScript, type annotation is a way of explicitly specifying the type of a variable,
// * function parameter, or function return value.
// let myFavNum:number = 10;
// let myFullName:string = "Muktinath Rajbanshi";
//! Advantages
//? It helps the TypeScript compiler to enforce type checking and provide type safety during
//?  development.
//? What operations could we performed on that variable value
//? Type annotations are expressed by using a colon (:) followed by the desired type after the variable
//? or function parameter declaration. There can be a space after the clone.
// let myFavNum:number = 10;
// let myFullName:string = "Muktinath Rajbanshi";
// myFavNum = "mukti";
// console.log(myFavNum.toString());
// let sum1 = myFavNum + 10
// console.log(sum1);
// * -------------------------------------------------------
// * Number Type
// * -------------------------------------------------------
//? The number type represents numeric values, including integers and floating-point numbers.
//! TODO Arithmetic Operations:
//? Number types in TypeScript support arithmetic operations such as 
//? addition (+), subtraction (-), multiplication (*), and division (/).
//? The result of these operations on numbers is also of type number.
// let myFavNum:number = 5;
// let myAge:number = 23;
// let pi:number = 3.147;
// let myNegVal:number = -5
// let invalidResult: number = myAge + " years ";
// let invalidValue: number = "123";
// let computedValue: number = Math.sqrt(16);
//! Home work
// let nanValue: number = NaN;
// console.log(invalidResult);
// * String Type
// *----------------------
//* Any value under single of double quotes are treated as string, Also any exp. result string as 
//* output.
// let myFullName = "muktinath rajbanshi"
// let myFirstName = "muktinath"
// let myLastName = "rajbanshi"
// myFullName = myFirstName + myLastName
// console.log(myFullName);
//! Here are some practice questions related to string types iin TypeScript:
//* todo 👉 String Initialization:
//? Declare a variable message of type string and assign it the value "Hello, TypeScript!."
// let message:string = "Hello, TypeScript!"
//* todo 👉 Concatenation:
//? Create two variables firstName and lastName of type string and assign them your first name and 
//? last name, respectively. Concatenate the two variables and store result in a variable called 
//? fullName.
var myFullName = "muktinath rajbanshi";
var myFirstName = "muktinath";
var myLastName = "rajbanshi";
myFullName = myFirstName + myLastName;
console.log(myFullName);
//* todo 👉 String Length:
//? Declare a variable sentence of type string and assign it a sentence of your choice. Find the 
//? length of the string and store it in a variable called sentenceLength
var sentence = "please subscribe my channel";
var sentenceLength = sentence.length;
console.log(sentenceLength);
//* todo 👉 Uppercase and Lowercase
//? Declare a variable text of type string and assign it a sentence of your choice. Convert the
//? entire sentence to uppercase and store the result in a variable called uppercaseText. Then
//? convert the entire sentence to lowercase and store the result in a variable called lowercaseText
var text = "please subscribe my channel";
var uppercaseText = text.toUpperCase();
var lowercaseText = text.toLowerCase();
console.log(uppercaseText);
console.log(lowercaseText);
//! Home Work Time 🙅‍♂️
// todo 👉 Substring:
//? Declare a variable longText of type string and assign it a long sentence Extract the first 
//? 10 characters from longText and store them in a variable called shortText.
// todo 👉 String Comparison:
//? Declare two variables str1 and str2 of type string and assign them different sentences. 
//? Compare the two strings and store the result (true or false) in a variable called areEqual.
// todo 👉 String Template:
//? Declare variables product and price of type string and number, respectively. Create a string 
//? using template literals to display the product and its price in the format "The product {product}
//? is priced at {price} dollars. "
