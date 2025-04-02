"use strict";
let aa = 5;
let bb = " hello";
let cc = aa + bb;
console.log(cc);
console.log(typeof cc);
function resolveInput(name, age) {
    return `${name} is ${age} years old`;
}
console.log(resolveInput("John", 22));
class MediaUser {
    constructor(ID, name, age) {
        this.ID = ID;
        this.name = name;
        this.age = age;
    }
    getID() {
        return this.ID;
    }
    ;
}
const fbUser = new MediaUser(4325, "Sean", 25);
console.log(fbUser.getID());
const fbList = {
    2987: "Amy",
    5393: "Mary",
    2047: "Kyle"
};
//----------ENUM------------//
var Techs;
(function (Techs) {
    Techs[Techs["HTML"] = 0] = "HTML";
    Techs["NODE"] = "Node.js";
    Techs["JS"] = "Javascript";
    Techs["HTTP"] = "HTTP protocol";
    Techs["DB"] = "PostgreSQL";
})(Techs || (Techs = {}));
console.log(Techs[0]); // only uninitialized items can be get by index
console.log(Techs.DB);
console.log(Techs.HTTP);
function composeData(data) {
    return { data };
}
console.log(composeData());
console.log(composeData(['hello', 3993, "world"]));
//----------GENERICS-----------//
function rev(list) {
    return list.reverse();
}
console.log(rev(["haha", "hoho", "hehe"]));
console.log(rev([1, 2, 3, 4, 5]));
let humanProp = "name";
humanProp = "age";
function checkNull(data) {
    console.log(data.toUpperCase());
}
checkNull("hello");
checkNull();
