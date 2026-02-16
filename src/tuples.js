// * In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of
// * elements of different types. They are similar to arrays, but with a key difference: the types of
// * elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements
// * of the same type, and their size can vary.
var infoWeatherData = [
    ["Kathmandu", 19, "Cloudy"],
    ["Pokhara", 12, "Rainy"],
    ["Biratnagar", 27, "Sunny"]
];
var displayWeatherInfo = function (data) {
    data.forEach(function (curData) {
        var city = curData[0], temp = curData[1], condition = curData[2];
        console.log("\uD83C\uDF0D City: ".concat(city, " \uD83C\uDF21\uFE0F Temperature: ").concat(temp, "\u00B0C \u26C5 Condition: ").concat(condition));
    });
};
displayWeatherInfo(infoWeatherData);
