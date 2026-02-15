// * The function call signature refers to the declaration or definition of a function, which includes
// * the function's name, parameters, and return type. It defines the structure and type information
// * of a function without including the function's implementation or body.

//? lets add one function inside the object. It's more like creating a method in object

//? Very Important => call signatures are typically used inside object type notations to describe the
//? shape of functions within object types.

type Student = {
    name : string;
    age : number;
    gender? : string;
}

const student1 : Student = {
    name : "Muktinath Rajbanshi",
    age : 23,
}


const introduction : (student1 : Student) => string = (student1 : Student) : string => {
    const { name, age } = student1;
    return `Welcome My name is ${name}, I am ${age} years old`
}

console.log(introduction(student1));


//! Homework
