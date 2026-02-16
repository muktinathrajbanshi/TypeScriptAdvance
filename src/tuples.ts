// * In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of
// * elements of different types. They are similar to arrays, but with a key difference: the types of
// * elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements
// * of the same type, and their size can vary.

//? Real-life example of using tuples in TypeScript:

//? Let's consider a scenario where you want to represent a person's basic information, including their
//? name, age, and whether they have a driver's license. Using a tuple can be an appropriate choice 
//? because these three elements have a specific order and type.


//! Defining a tuple type for person information

 type PersonInfo = [string, number, boolean]

//! Function to display person information

const displayPersonInfo = (person : PersonInfo) => {
    const [ name, age, hasDriverLicense ] = person;
    console.log(`Name : ${name}, Age : ${age}, Driver's License: ${hasDriverLicense ? "Yes" : "No"}`);
}

//! Example usage
const person1 : PersonInfo = ["Muktinath Rajbanshi", 23, true];
const person2 : PersonInfo = ["Milan Rajbanshi", 24, false];

displayPersonInfo(person1);
displayPersonInfo(person2);

// console.log(displayPersonInfo(PersonInfo));






