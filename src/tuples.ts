// * In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of
// * elements of different types. They are similar to arrays, but with a key difference: the types of
// * elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements
// * of the same type, and their size can vary.

//? Real-life example of using tuples in TypeScript:

//? Let's consider a scenario where you want to represent a person's basic information, including their
//? name, age, and whether they have a driver's license. Using a tuple can be an appropriate choice 
//? because these three elements have a specific order and type.


//! Defining a tuple type for person information

//  type PersonInfo = readonly [string, number, boolean]

//! Function to display person information

// const displayPersonInfo = (person : PersonInfo) => {
//     const [ name, age, hasDriverLicense ] = person;
//     console.log(`Name : ${name}, Age : ${age}, Driver's License: ${hasDriverLicense ? "Yes" : "No"}`);
// }

//! Example usage
// const person1 : PersonInfo = ["Muktinath Rajbanshi", 23, true];
// const person2 : PersonInfo = ["Milan Rajbanshi", 24, false];

// person1.push("coding");
// console.log(person1);


// displayPersonInfo(person1);
// displayPersonInfo(person2);

// console.log(displayPersonInfo(PersonInfo));



//! Question 1:
//? You are building a simple e-commerce application and need to store product information.
//? Define a tuple type called ProductInfo to represent each product, containing the following 
//? elements:

// * Product name (string)
// * Price (number)
// * Quantity in stock (number)
// * Create two product instances using this tuple type and display their information.


// type ProductInfo = [string, number, number];

// const displayProductInfo = (product : ProductInfo) => {

//     const [name, price, quantity] = product;
//     console.log(`Product ${name} and Price is ${price} and Quantity is ${quantity}`);
    
// }


// const product1 : ProductInfo = [ "Laptop", 100000, 100 ];
// const product2 : ProductInfo = [ "Mobile", 200000, 150 ];

// displayProductInfo(product1);
// displayProductInfo(product2);


//! Question 2:
//? You are creating a student management system and want to keep track of student grades for different
//? subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding
//? grade, containing the following elements :

// * Subject name (string)
// * Grade (number)
// * Create an array of SubjectGrade tuples to store the grades for a student in three different
// * subjects: Math, English, and Science. Calculate and display the average grade for the student.

