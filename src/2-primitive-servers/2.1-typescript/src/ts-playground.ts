let aa: number = 5;
let bb: string = " hello";
let cc = aa + bb;

console.log(cc)
console.log(typeof cc)

function resolveInput(name: string, age: number): string {
  return `${name} is ${age} years old`;
}

console.log(resolveInput("John", 22))

//-----------INTERFACE--------------//

interface User {
  readonly ID: number,
  name: string,
  age: number,
  sex?: string,
  getID: () => number,
}

class MediaUser implements User {
  ID: number;
  name: string;
  age: number;
  sex?: string | undefined;

  constructor (ID: number, name: string, age: number) {
    this.ID = ID;
    this.name = name;
    this.age = age;
  }

  getID(): number {
    return this.ID
  };
}

const fbUser = new MediaUser(4325, "Sean", 25);
console.log(fbUser.getID())

interface CustomersList {
  [key: number]: string // for typical props in future obj
}

const fbList = {
  2987: "Amy",
  5393: "Mary",
  2047: "Kyle"
}

//----------ENUM------------//

enum Techs {
  HTML,
  NODE = "Node.js",
  JS = "Javascript",
  HTTP = "HTTP protocol",
  DB = "PostgreSQL",
}

console.log(Techs[0]) // only uninitialized items can be get by index
console.log(Techs.DB)
console.log(Techs.HTTP)

//---------FUNCTION---------//

function composeData(): {};
function composeData(data: Array<string | number>): {data: []};

function composeData(data?: Array<string | number>) {
  return {data}
}

console.log(composeData())
console.log(composeData(['hello', 3993, "world"]))

//----------GENERICS-----------//

function rev<T> (list: T[]): T[] {
  return list.reverse();
}

console.log(rev(["haha", "hoho", "hehe"]))
console.log(rev([1, 2, 3, 4, 5]))

//-------KEYOF-------//

interface Human {
  name: string,
  age: number
}
type HumanProps = keyof Human;

let humanProp: HumanProps = "name";
humanProp = "age";
// humanProp = "profession"; // not allowed

type Animal = {
  id: number,
  added: Date,
  breed: string,
  age: number,
  avgLife: number
}

type Excluded = Exclude<keyof Animal, "id" | "added"> // breed | age | avgLife
type Picked = Pick<Animal, "breed" | "age" | "avgLife">

let an: Excluded = "age";
let ab: Picked = {
  breed: "jsdjk",
  age: 313,
  avgLife: 3
}

function checkNull(data?: string | null) {
  console.log(data!.toUpperCase())
}

checkNull("hello")
checkNull()


