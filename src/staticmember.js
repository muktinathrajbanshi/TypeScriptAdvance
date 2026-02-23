// ********************************
//* STATIC PROPERTIES & METHODS
// ********************************
//* In TypeScript, static methods and properties belong to the class itself rather than to instance
//* of the class. By making methods and properties static, we can access them directly from the class
//* without needing to create an instance of the class. This is useful for utility functions or properties
//* that don't rely on instance-specific data.
//? Example: Math Operations Utility - creating a utility class to perform various methematical operations.
// class Person {
//     constructor(public name : string) {}
// }
// const user1 = new Person("muktinath");
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.add = function (num1, num2) {
        return num1 + num2;
    };
    MathOperations.subs = function (num1, num2) {
        return num1 - num2;
    };
    MathOperations.PI = Math.PI;
    return MathOperations;
}());
console.log(MathOperations);
console.log(MathOperations.add(5, 10));
console.log(MathOperations.subs(10, 5));
