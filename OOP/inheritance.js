// ****************************
//* Inheritance in TS
//* ***************************
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
//* Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
//? Inheritance is a mechanism in which one class acquires the property of another class. For example,
//? a child inherits the traits of his/her parents.
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Persons.prototype.introduce = function () {
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
        return "Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old.\n         I am in grade ").concat(this.grade, "\n         I love ").concat(this.hobbies.join(", "), ".");
    };
    return Student;
}(Persons));
var person1 = new Persons("muktinath", 14, ["reading", "painting"]);
var person2 = new Persons("rajbanshi", 15, ["coding", "sports"]);
var student = new Student("mukti", 16, ["singing", "coding"], 10);
console.log(student.introduce());
