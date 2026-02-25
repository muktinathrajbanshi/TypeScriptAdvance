//* *************************
//* INTERFACE VS TYPE
//************************** *
;
;
var Biodata = /** @class */ (function () {
    function Biodata(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
    return Biodata;
}());
var student1 = new Biodata("muktinath", 23, "ktm", "putalisadak");
console.log(student1);
// console.log(Biodata);
