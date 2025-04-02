"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
const np = { x: 10, y: 10, name: "string" };
printCoord({ x: 10, y: 10, name: "string", b: 33 });
const defFn = (x = 10) => console.log(x);
defFn();
defFn(30);
// Decorators.
// Class.
function getConstr(constructor) {
    console.log(constructor);
}
// Property.
const logProperty = (target, propertyKey) => {
    console.log(propertyKey);
};
// Method/accessor.
function logMethod(target, propertyKey, descriptor) {
    console.log(propertyKey);
}
let User = class User {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    completeData() {
        return `${this._name} ${this.age}`;
    }
    get name() {
        return this._name;
    }
};
__decorate([
    logProperty,
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], User.prototype, "completeData", null);
__decorate([
    logMethod,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "name", null);
User = __decorate([
    getConstr,
    __metadata("design:paramtypes", [String, Number])
], User);
const user1 = new User("sean", 34);
console.log(user1.completeData());
function makeGreetable(Clazz) {
    return class extends Clazz {
        greet() {
            return `Hello! I'm ${this.name}`;
        }
    };
}
function makeTalkable(Clazz) {
    return class extends Clazz {
        talk() {
            return "Let's talk";
        }
    };
}
const FriendlyUser = makeTalkable(makeGreetable(User));
const fu1 = new FriendlyUser("john", 43);
console.log(fu1.greet());
console.log(fu1.talk());
console.log(new Date());
console.log(Date());
console.log(Date.now());
