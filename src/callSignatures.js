// * The function call signature refers to the declaration or definition of a function, which includes
// * the function's name, parameters, and return type. It defines the structure and type information
// * of a function without including the function's implementation or body.
var student1 = {
    name: "Muktinath Rajbanshi",
    age: 23,
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome My name is ".concat(name, ", I am ").concat(age, " years old");
};
console.log(introduction(student1));
//! Homework
