// * In TypeScript, a type alias is a way to give a name to a specific type or combination of types.
// * It allows you to create a custom name for a type, making it easier to reuse and refer to the
// * same type in different parts of your code. Type aliases provide better readability,
// * organization, and abstraction of complex types
var product = {
    Name: "Laptop",
    Price: 1000,
    Quantity: 5
};
// console.log(product.Name);
//? Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice 
//? that calculates and returns the total price (price * quantity) of the product.
var calculateTotalPrice = function (product) {
    return "".concat(product.Name, " total cost ").concat(product.Price, " ");
};
console.log(calculateTotalPrice(product));
