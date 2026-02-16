// * In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of
// * elements of different types. They are similar to arrays, but with a key difference: the types of
// * elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements
// * of the same type, and their size can vary.
var studentGrades = [
    ["Math", 80],
    ["English", 90],
    ["Science", 100]
];
var displayAverageGrade = function (student) {
    var total = 0;
    student.forEach(function (curVal) {
        var subject = curVal[0], grade = curVal[1];
        console.log("".concat(subject, " : ").concat(grade));
        total = total + grade;
    });
    console.log(student.length);
    var average = total / student.length;
    return average;
};
var avg = displayAverageGrade(studentGrades);
console.log("average grades ".concat(avg));
