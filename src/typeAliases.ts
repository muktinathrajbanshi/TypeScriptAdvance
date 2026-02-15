// * In TypeScript, a type alias is a way to give a name to a specific type or combination of types.
// * It allows you to create a custom name for a type, making it easier to reuse and refer to the
// * same type in different parts of your code. Type aliases provide better readability,
// * organization, and abstraction of complex types

// * To define a type alias, you use the type keyword followed by the alias name and the type 
// * definition:


type Person = {
    name : string;
    age : number;
    isStudent : boolean;
    address : { city : string; country : string }
}

const person : Person = {
    name : "Muktinath Rajbanshi",
    age : 23,
    isStudent : true,
    address : {
        city : "Kathmandu",
        country : "Nepal"
    }
}

const person1 : Person = {
    name : "Milan Rajbanshi",
    age : 24,
    isStudent : true,
    address : {
        city : "Birtamode",
        country : "Nepal"
    }
}

console.log(person);
console.log(person1);

