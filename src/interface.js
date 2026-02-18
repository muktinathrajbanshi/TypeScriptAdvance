//* In TypeScript, an interface is a powerful feature that allows you to define a contract for an 
//* object's shape. It specifies the properties and their types that an object must have to be considered
//* of that particular interface type. Interfaces are primarily used for type-checking during development 
//* do not generate any JavaScript code at runtime
var greet = {
    name: "muktinath",
    age: 23
};
var product1 = {
    name: "laptop",
    price: 10000,
    quantity: 5
};
//! Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice that
//? calculates and returns the total price (price * quantity) of the product.
var calculateTotalPrice = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
console.log(calculateTotalPrice(product1));
