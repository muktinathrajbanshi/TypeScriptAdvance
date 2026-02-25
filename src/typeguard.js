//* A typeof guard in TypeScript lets you narrow down the type of a variable based on its runtime value.
//* In typeScript, type narrowing allows you to write type-safe code by ensuring you only operate on
//* the correct type under certain circumstances. This is particularly useful with union types and 
//* generic types.
var favHobbies = function (hobby) {
    // return hobby.map((curVal) => {
    //     return curVal;
    // })
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map(function () { });
    }
    else {
        console.log(hobby);
    }
};
// favHobbies("coding");
favHobbies(["coding", "games"]);
