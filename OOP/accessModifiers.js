// 🔐 Access Modifiers Relationship Table
// Access Modifier	Parent Class	Child Class (Subclass)	Outside Class
// public	           ✅ Yes	✅ Yes	✅ Yes
// protected	       ✅ Yes	✅ Yes	❌ No
// private	           ✅ Yes	❌ No	❌ No
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Persons.prototype.introduceParent = function () {
        return "Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old. I love ").concat(this.hobbies.join(", "), ".");
    };
    return Persons;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.introduce = function () {
        // return `${super.introduce()}. I am in grade ${this.grade}`;
        return this.hobbies;
    };
    return Student;
}(Persons));
var person1 = new Persons("muktinath", 14, ["reading", "painting"]);
var person2 = new Persons("rajbanshi", 15, ["coding", "sports"]);
console.log(person1.introduceParent());
var student = new Student("mukti", 16, ["singing", "coding"], 10);
console.log(student.introduce());
