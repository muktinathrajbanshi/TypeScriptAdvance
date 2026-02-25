//* Abstract classes provide a way to define common properties and methods that multiple derived
//* classes can share. This promotes code reuse and helps establish a common interface for related
//* classes. Abstract class cannot be instantiated

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

abstract class Shape {
    constructor(protected _color : string) {}

    get color() : string {
        return this._color;
    }

    set color(value : string) {
        this._color = value;
    }

    abstract calculateArea() : number;
    abstract displayArea : () => void;
}

class Circle extends Shape {

    constructor(color : string, protected _radius : number) {
        super(color);
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value : number) {
        if (value <= 0) {
            throw new Error("Radius must be positive");
        }
        this._radius = value;
    }

    public calculateArea(): number {
        return Math.PI * this._radius * this._radius;
    }

    displayArea = () => {
        console.log(`This is a ${this.color} circle with radius ${this.radius}`);   
    };

}

const circle = new Circle("red", 5);
console.log(circle.calculateArea());
