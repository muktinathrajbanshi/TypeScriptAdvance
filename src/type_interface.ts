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

type Student = {
    name: string;
    age: number;
};

type StudentAddress = {
    city: string;
    state: string;
};

const Biodata: Student | StudentAddress = {
    name: "muktinath",
    city: "KTM",
    state: "Bagmati"
}

console.log(Biodata);
