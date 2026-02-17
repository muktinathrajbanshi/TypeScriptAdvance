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
var user = {
    id: 143,
    name: "Muktinath Rajbanshi",
    email: "muktinathrajbanshi786@gmail.com"
};
var account = {
    acc_id: 120,
    acc_type: "Saving",
    balance: 2000000
};
// define 
var combineUserAndAccount = function (userDetails, accountDetails) {
    return __assign(__assign({}, userDetails), accountDetails);
};
// call 
var combineResult = combineUserAndAccount(user, account);
console.log(combineResult);
