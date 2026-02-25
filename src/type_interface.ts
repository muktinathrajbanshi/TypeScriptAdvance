//* *************************
//* INTERFACE VS TYPE
//************************** *

// 1:
//? Use custom types when you need unions, intersections, or mapped types.
//? Use interfaces when defining object shapes or classes that adhere to a contract

// 2:
//? Interfaces can extend other interfaces to inherit their members.
//? Custom types can use unions and intersections for more complex type compositions.

//* same Interface name treated as one

// type Student = {
//     name: string;
//     age: number;
// };

// type StudentAddress = {
//     city: string;
//     state: string;
// };

// type Data = Student | StudentAddress;

// const Biodata: Data = {
//     name: "muktinath",
//     city: "KTM",
//     state: "Bagmati"
// }

// console.log(Biodata);




interface Student {
    name: string;
    age: number;
};

interface StudentAddress {
    city: string;
    state: string;
};

interface Data extends Student , StudentAddress {}

class Biodata implements Data {
    constructor(
        public name: string,
        public age: number,
        public city: string,
        public state: string
    ) {}
}

const student1 = new Biodata("muktinath", 23, "ktm", "putalisadak");
console.log(student1);

// console.log(Biodata);