//* Abstract classes provide a way to define common properties and methods that multiple derived
//* classes can share. This promotes code reuse and helps establish a common interface for related
//* classes. Abstract class cannot be instantiated
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
//* Abstract classes focus on class inheritance and sharing common functionality, whereas the
//* useContext hook in React focuses on managing global state and allowing components to consume that
//* state.
// abstract class PerObj {
//     name : string; 
//     age: number;
// }
// class Person:PerObj  = {
//     name: "muktinath",
//     age: 23,
// };
// class Person1:PerObj = {
//     name: "milan",
//     age: 23,
// };
// class Person3:PerObj = {
//     name: "rajbanshi",
//     age: 23,
// };
//? Example : Shape Hierarchy
//? Suppose you're building a graphics application, and you want to create a hierarchy of different 
//? shapes. You can use an abstract base class Shape to define common properties and methods that all
//? shapes share..
// circle, rectangle
// abstract class Shape {
//     constructor( protected color: string ) {}
//     abstract calculateArea() : number;
//     abstract displayArea: () => void;
// }
// class Circle extends Shape{
//      constructor( protected color: string, protected radius: number ) {
//         super(color);
//      }
//      public calculateArea(): number {
//         return Math.PI * this.radius * this.radius;
//      }
//      displayArea = () => {
//         console.log(`This is a ${this.color} circle with radius ${this.radius}`);
//      };
// }
// const circle = new Circle("red", 5);
// console.log(circle.calculateArea());
// circle.displayArea()
//* Practice Time
//? You need to do the same for Square and Rectangle and if possible use getter and setter methods
//? members
var Shape = /** @class */ (function () {
    function Shape(_color) {
        this._color = _color;
    }
    Object.defineProperty(Shape.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, _radius) {
        var _this = _super.call(this, color) || this;
        _this._radius = _radius;
        _this.displayArea = function () {
            console.log("This is a ".concat(_this.color, " circle with radius ").concat(_this.radius));
        };
        return _this;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error("Radius must be positive");
            }
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.calculateArea = function () {
        return Math.PI * this._radius * this._radius;
    };
    return Circle;
}(Shape));
var circle = new Circle("red", 5);
console.log(circle.calculateArea());
