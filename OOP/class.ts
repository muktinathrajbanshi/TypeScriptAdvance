// ************************************
//* How to create a class and also instance of class in TS
//**************************************

//* A class in terms of OOP is a blueprint for creating objects.
//* A class is like a blueprint for creating similar things.

//? In TypeScript, there is a convention to use PascalCase (also known as UpperCamelCase) for
//? class names. This means that class names should start with a capital letter and each
//? subsequent word in the class name should also begin with a capital letter.


class Persons {
    name : string;
    age : number;
    hobbies : string[];


    constructor(name:string, age:number, hobbies:string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

}

const person1 : Persons = new Persons("muktinath", 14, ["reading", "painting"]);
const person2 : Persons = new Persons("rajbanshi", 15, ["coding", "sports"]);
const person3 : Persons = new Persons("mukti", 16, ["singing", "coding"]);


console.log(person3);




