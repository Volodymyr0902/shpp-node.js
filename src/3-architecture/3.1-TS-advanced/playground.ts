interface Point {
  x: number;
  y: number;
}
 
function printCoord<T extends Point>(pt: T) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

interface NamedPont {
  x: number;
  y: number;
  name: string
}

let np: NamedPont = {x: 10, y: 10, name: "string"};
let np2 = {x: 10, y: 10, name: "string", b: "jshj"}
np = np2 
printCoord({x: 10, y: 10, name: "string", b: 33});

type fnWithDef = (x?: number) => void
const defFn: fnWithDef = (x = 10) => console.log(x)
defFn()
defFn(30)

// Decorators.

// Class.
function getConstr(constructor: Function) {
  console.log(constructor)
}

// Property.
const logProperty = (target: Object, propertyKey: string) => {
  console.log(propertyKey)
}

// Method/accessor.
function logMethod(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  console.log(propertyKey)
}

@getConstr
class User {

  @logProperty
  public age: number

  constructor (protected _name: string, age: number) {
    this.age = age
  }

  @logMethod
  public completeData(): string {
    return `${this._name} ${this.age}`
  }

  @logMethod
  get name() {
    return this._name
  }
}

const user1  = new User("sean", 34)
console.log(user1.completeData())

// Mixins.

type Constructor<T> = new (...args: any[]) => T 

function makeGreetable<T extends Constructor<any>>(Clazz: T) {
  return class extends Clazz {
    greet() {
      return `Hello! I'm ${this.name}`
    }
  }
}

function makeTalkable<T extends Constructor<any>>(Clazz: T) {
  return class extends Clazz {
    talk() {
      return "Let's talk" 
    }
  }
}

const FriendlyUser = makeTalkable(makeGreetable(User))
const fu1 = new FriendlyUser("john", 43)
console.log(fu1.greet())
console.log(fu1.talk())

console.log(new Date())
console.log(Date())
console.log(Date.now())

