console.log("Hello world!");
console.log(1 << 8); // *2 n times

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN

console.log(1 == 1); // true, no types
console.log(1 === "1"); // false, types are compared

console.log(2 + 2); // 4
console.log(2 + "2"); // 22

console.log("a" < "b");
console.log("a" > "A"); // because ASCII

let a;
console.log();
console.log(null == undefined);
console.log(null === undefined);
console.log(null === null);
console.log(undefined === undefined);
console.log(a === null);
console.log(a === undefined);

// There's also `null` and `undefined`.
null; // used to indicate a deliberate non-value
undefined; // used to indicate a value is not currently present (although
// `undefined` is actually a value itself)

// false, null, undefined, NaN, 0 and "" are falsy; everything else is truthy.

// Arrays
var myArr = ["Hi", 4, true];
console.log(myArr);
console.log(myArr.shift());
myArr.unshift("Hello");
myArr.pop();
console.log(myArr);
myArr.push("world");
console.log(myArr);

console.log(typeof myArr);
myArr = myArr.join(", ");
console.log(myArr);
console.log(typeof myArr);

let otherArr = [true, 23, "world", 28];
console.log(otherArr.slice(1, otherArr.length));
otherArr.splice(1, 2, "inserted"); // removed subarray is returned
console.log(otherArr);

// Objects
console.log();
let myObj = {
  id: 34424,
  "first name": "John",
  position: "full-stack dev",
  "favorite tech": "node",
};
console.log(myObj);
console.log(myObj["first name"]);
myObj.age = 25; // adding new values
console.log(myObj.age);
console.log(myObj.isEmployed); // undefined

let myPets = "";
let animals = ["crocodile", "cat", "lynx", "bear", "dog", "fly"];
for (let animal of animals) {
  // "for of" with arrays
  myPets += animal + " ";
}
console.log(myPets);

let person = "";
let personalData = { fname: "Sean", lanme: "Crawford", age: 37 };
for (let data in personalData) {
  // "for in" with objects
  person += personalData[data] + " ";
}
console.log(person);

// switch uses === equality
// always apply "brake" after each "case"

let input; // is undefined
let choice = input || "default"; // "short circuit"
console.log(choice);
console.log(typeof choice);
console.log();

// Functions
function getUpper(smth) {
  if (typeof smth === "string") {
    return smth.toUpperCase();
  }
}

console.log(getUpper("hello"));

let timeout = function useTimeout() {
  console.log("using timeout");
};
//setTimeout(timeout, 4000); // timeout has assigned a function and is passed in as an argument

let interval = function useInterval() {
  console.log("Using interval");
};
//setInterval(interval, 2000);

setTimeout(function () {
  console.log("using anonymous function"); // anonymous function
}, 3000);

if (true) {
  var visible = 10; // var has function scope so it's visible outside blocks which aren't functions
}
console.log(visible);
// BUT!!!
(function () {
  // immediately-executing anonymous function
  var notVisible = 5;
  // window.otherVisible = 10;
})();
//console.log(notVisible); // ReferenceError
//console.log(otherVisible);

function sayHiIn5Secs(name) {
  let greet = `Hi, ${name}!`;

  function inner() {
    // closure
    console.log(greet);
  }
  setTimeout(inner, 4000);
}

sayHiIn5Secs("Peter");

// Objects/Constructors/Prototypes
let funcInside = {
  someStr: "Hi everyone!",
  someFunc: function () {
    // objects keys can have a function as a value
    return this.someStr; // objects keys can be accessed by this keyword within an object
  },
};

console.log(funcInside.someFunc());
//someFunc(); // BUT it can't be accessed without a context

let someOtherFunc = function (text) {
  return this.someStr + text;
};
// Context (object) for a function can be specified by call/apply
console.log(someOtherFunc.call(funcInside, " It's me!"));
console.log(someOtherFunc.apply(funcInside, [" How are you?"]));

let stickFunc = someOtherFunc.bind(funcInside); // this function can be bound to delay its usage
console.log(stickFunc(" I'm trying to bind!"));

let product = function (a, b) {
  return a * b;
};
let doubler = product.bind(this, 2); // partial bind, another arg can be added later
console.log(doubler(8));

let MyConstructor = function() {
  this.number = 10;
}
let constructedObject = new MyConstructor(); // yes, it's an object
console.log("This is objects member: " + constructedObject.number)

// Prototypes

let myPrototype = {
  someValue: 43,
  protoFunc: function() {
    return this.someValue * 2;
  }
}

let objWithProto = Object.create(myPrototype); // 1 way to create an obj of prototype
console.log(objWithProto.someValue)
let doubled = objWithProto.protoFunc();
console.log(doubled)

let AnotherConstructor = function() {
  this.number = 10;
}
AnotherConstructor.prototype = { // 2 way is using 'prototype' property with constructor
  secretNum: 15,
  getSecretNum: function() {
    return this.secretNum;
  }
}
let anotherConstrObj = new AnotherConstructor();
console.log(anotherConstrObj.getSecretNum());
anotherConstrObj.secretNum = 50;
console.log(anotherConstrObj.getSecretNum());
anotherConstrObj.number = 30;
console.log(anotherConstrObj.number);




