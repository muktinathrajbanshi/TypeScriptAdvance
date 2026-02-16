// * In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of
// * elements of different types. They are similar to arrays, but with a key difference: the types of
// * elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements
// * of the same type, and their size can vary.
var displayProductInfo = function (product) {
    var name = product[0], price = product[1], quantity = product[2];
    console.log("Product ".concat(name, " and Price is ").concat(price, " and Quantity is ").concat(quantity));
};
var product1 = ["Laptop", 100000, 100];
var product2 = ["Mobile", 200000, 150];
displayProductInfo(product1);
displayProductInfo(product2);
