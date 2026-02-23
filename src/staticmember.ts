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

// class MathOperations {
//     public static PI : number = Math.PI;

//     public static add(num1 : number, num2 : number) : number{
//         return num1 + num2;
//     }

//     public static subs(num1 : number, num2 : number) : number{
//         return num1 - num2;
//     }

// }

// console.log(MathOperations);
// console.log(MathOperations.add(5,10));
// console.log(MathOperations.subs(10, 5));

// Practice time
// Div, Mult, Modules

class MathOperations {
    public static PI : number = Math.PI;

    public static division(num1 : number, num2 : number) : number{
        return num1 / num2;
    }

    public static multiplication(num1 : number, num2 : number) : number{
        return num1 * num2;
    }

      public static modulus(num1 : number, num2 : number) : number{
        return num1 % num2;
    }

}

console.log(MathOperations);
console.log(MathOperations.division(10,2));
console.log(MathOperations.multiplication(10, 5));
console.log(MathOperations.modulus(40, 3));
