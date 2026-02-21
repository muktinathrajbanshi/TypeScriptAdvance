// ****************************
//* Inheritance in TS
//* ***************************

//* Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
//? Inheritance is a mechanism in which one class acquires the property of another class. For example,
//? a child inherits the traits of his/her parents.



class Persons {
    name : string;
    age : number;
    hobbies : string[];


    constructor(name:string, age:number, hobbies:string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce(): string{
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`
    }

}

class Student extends Persons {
    grade : number;
    constructor(name:string, age:number, hobbies:string[], grade : number) {
        super(name, age, hobbies);
        this.grade = grade;
    }

    introduce(): string{
        return `${super.introduce()}. I am in grade ${this.grade}`;
    }
}

const person1 : Persons = new Persons("muktinath", 14, ["reading", "painting"]);
const person2 : Persons = new Persons("rajbanshi", 15, ["coding", "sports"]);
const student : Persons = new Student("mukti", 16, ["singing", "coding"], 10);


console.log(student.introduce());