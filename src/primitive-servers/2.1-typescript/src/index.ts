// 1.

function getFirstWord(a: string): number {
  return a.split(/ +/)[0].length;
}

// 2.

interface Input {
  name: string;
  surname: string;
}

interface Output {
  fullname: string,
  initials: string
}

function getUserNamings(a: Input): Output {
  return {
    fullname: a.name + " " + a.surname,
    initials: a.name[0] + "." + a.surname[0],
  };
}

// 3.

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a?: { products?: { name: string }[] }): string[] {
  return a?.products?.map((prod) => prod?.name) || [];
}

// 4.1

// easy way is using 'as' keyword
// hard way is ?...
function hey(a: { name: () => string; cuteness?: number; coolness?: number }) {
  return "hey! i'm " + a.name();
}
hey({ name: () => "roma", cuteness: 100 });
hey({ name: () => "vasya", coolness: 100 });

//---------//

interface Person {
  name: () => string;
}

function hey1<T extends Person>(a: T) {
  return "hey! i'm " + a.name();
}
hey1({ name: () => "roma", cuteness: 100 });
hey1({ name: () => "vasya", coolness: 100 });

//--------//

function hey11(a: Person) {
  return "hey! i'm " + a.name();
}
hey11({ name: () => "roma", cuteness: 100 } as Person);
hey11({ name: () => "vasya", coolness: 100 } as Person);

// 4.2

interface MyAnimal {
  name: () => string;
}

class Cat implements MyAnimal {
  _name: string;
  isAdult: boolean;

  constructor(name: string, isAdult: boolean) {
    this._name = name;
    this.isAdult = isAdult;
  }

  name(): string {
    return this._name;
  }
}

class Dog implements MyAnimal {
  _name: string;
  fleasNum;

  constructor(name: string, fleasNum: number) {
    this._name = name;
    this.fleasNum = fleasNum;
  }

  name(): string {
    return this._name;
  }
}

function hey2(abstractPet: MyAnimal): string {
  return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);
hey2(a);
hey2(b);

// 4.3

interface Profile {
  name: () => string;
  type: string;
  cuteness?: number;
  coolness?: number;
}

function hey3(a: Profile): string {
  return (
    "hey! i'm " +
    a.name() +
    (a.type === "cat" ? "cuteness: " + a.cuteness : "coolness: " + a.coolness)
  );
}
hey3({ name: () => "roma", type: "cat", cuteness: 100 });
hey3({ name: () => "vasya", type: "dog", coolness: 100 });

// 5.

type ArgKey = number | string;

// google for Record type
function stringEntries(a: Record<ArgKey, any>): any[] {
  return Array.isArray(a) ? a : Object.keys(a);
}

stringEntries({ name: () => "vasya", type: "dog", coolness: 100 });

// 6.

// you don't know Promises and async/await yet. Or do you?
// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a: number) {
  return "*".repeat(a);
}
const hello = async () => {
  return await world(10);
};
hello()
  .then((r) => console.log(r))
  .catch((e) => console.log("fail"));
