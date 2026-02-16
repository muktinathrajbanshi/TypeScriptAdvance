// * In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of
// * elements of different types. They are similar to arrays, but with a key difference: the types of
// * elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements
// * of the same type, and their size can vary.
//! Function to display person information
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name : ".concat(name, ", Age : ").concat(age, ", Driver's License: ").concat(hasDriverLicense ? "Yes" : "No"));
};
//! Example usage
var person1 = ["Muktinath Rajbanshi", 23, true];
var person2 = ["Milan Rajbanshi", 24, false];
displayPersonInfo(person1);
displayPersonInfo(person2);
// console.log(displayPersonInfo(PersonInfo));
