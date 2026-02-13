//? Optional and Default Parameters:
// * TypeScript allows you to define optional and default parameters in functions.
// * Optional parameters are denoted by appending a ? symbol after the parameter name, and default
// * parameters are specified by providing a default value in the parameter declaration.
var greet3 = function (name, id) {
    return "Welcome, ".concat(name, " and your id is ").concat(id);
};
var employee = greet3("muktinath", 5);
console.log(employee);
