//? Union types allow you to specify that a variable can hold values of multiple types. You use the 
//? | (pipe) symbol to define a union type.In
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var employee = {
    name: "Muktinath",
    age: 23,
    emp_id: 11,
    department: "IT"
};
var myPersonalInfo = {
    name: "Muktinath",
    age: 23
};
var user = { name: "Muktinath", age: 23 };
var myLocation = { city: "Kathmandu", country: "Nepal" };
// define 
var createUserProfile = function (user, location) {
    // return `My name is ${user.name} and I am living in city: ${location.city}`
    return __assign(__assign({}, user), location);
};
// call 
var myCompleteInfo = createUserProfile(user, myLocation);
console.log(myCompleteInfo);
