// 🔐 Access Modifiers Relationship Table
// Access Modifier	Parent Class	Child Class (Subclass)	Outside Class
// public	           ✅ Yes	✅ Yes	✅ Yes
// protected	       ✅ Yes	✅ Yes	❌ No
// private	           ✅ Yes	❌ No	❌ No


class Persons {
    constructor(
        public name:string, 
        public age:number, 
        protected hobbies:string[]
    ) {}

    introduceParent(): string{
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`
    }

}

class Student extends Persons {

    constructor(name:string, age:number, hobbies:string[], public grade : number) {
        super(name, age, hobbies);
    }

    introduce(): string[]{
        // return `${super.introduce()}. I am in grade ${this.grade}`;
        return this.hobbies;
    }
}

const person1 : Persons = new Persons("muktinath", 14, ["reading", "painting"]);
const person2 : Persons = new Persons("rajbanshi", 15, ["coding", "sports"]);


console.log(person1.introduceParent());


const student : Student = new Student("mukti", 16, ["singing", "coding"], 10);


console.log(student.introduce());