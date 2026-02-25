//* A typeof guard in TypeScript lets you narrow down the type of a variable based on its runtime value.
//* In typeScript, type narrowing allows you to write type-safe code by ensuring you only operate on
//* the correct type under certain circumstances. This is particularly useful with union types and 
//* generic types.


const favHobbies = (hobby: string | string[]) => {
    // return hobby.map((curVal) => {
    //     return curVal;
    // })

    if (typeof hobby === "object") {
        return hobby.map(() => {});
    } else {
        console.log(hobby);
        
    }
}