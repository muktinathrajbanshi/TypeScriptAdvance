// ************************************
//* How to create a class and also instance of class in TS
//**************************************
//* A class in terms of OOP is a blueprint for creating objects.
//* A class is like a blueprint for creating similar things.
//? In TypeScript, there is a convention to use PascalCase (also known as UpperCamelCase) for
//? class names. This means that class names should start with a capital letter and each
//? subsequent word in the class name should also begin with a capital letter.
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Persons;
}());
var person1 = new Persons("muktinath", 14, ["reading", "painting"]);
var person2 = new Persons("rajbanshi", 15, ["coding", "sports"]);
var person3 = new Persons("mukti", 16, ["singing", "coding"]);
console.log(person3);
