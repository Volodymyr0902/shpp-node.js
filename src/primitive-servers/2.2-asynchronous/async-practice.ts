import fetch, { Response } from "node-fetch";

//-------------TASK1-------------//

interface IPRes {
  ip: string;
}

const res: Response = await fetch("https://api.ipify.org?format=json");
const data = (await res.json()) as IPRes;

console.log(`1. await IP: ${data.ip}\n`);

//----------TASK-2-----------//

async function getMyIP(): Promise<string> {
  const res: Response = await fetch("https://api.ipify.org?format=json");

  if (!res.ok) {
    throw new Error(`${res.status} Failed to fetch data`);
  }

  const data = (await res.json()) as IPRes;
  return data.ip;
}

getMyIP()
  .then((data: string) => console.log(`2. async/await IP: ${data}\n`))
  .catch((err) => console.log(`Failed to fetch data: ${err}`));

//--------------TASK-3-COMMON-RESOURCES--------------//

const link = "https://random-data-api.com/api/name/random_name";

interface Person {
  name: string;
}

async function requestSuccess() {
  let res: Response;
  do {
    res = await fetch(link);
  } while (!res.ok);
  return res;
}

function isPerson(data: any): data is Person {
  return (
    typeof data === "object" &&
    data !== null &&
    "name" in data &&
    typeof data.name === "string"
  );
}

//--------------TASK-3-A--------------//

async function getNames1() {
  const responses: Response[] = await Promise.all([
    requestSuccess(),
    requestSuccess(),
    requestSuccess(),
  ]);

  // This time type assertion is used
  const persons = (await Promise.all(
    responses.map((response) => response.json())
  )) as Person[];

  return persons.map((person: Person) => person.name);
}

getNames1()
  .then((names) => console.log(`3.A. Names: ${names}\n`))
  .catch((err) => console.log(`Failed to fetch data: ${err}`));

//-----------TASK-3-B------------//

async function getSingleName() {
  const res: Response = await requestSuccess();
  const data: unknown = await res.json();

  // This time strict type check
  if (isPerson(data)) {
    return data.name;
  }
}

async function getNames2() {
  const res1 = getSingleName();
  const res2 = getSingleName();
  const res3 = getSingleName();

  const dataPromise1 = await res1;
  const dataPromise2 = await res2;
  const dataPromise3 = await res3;

  return [dataPromise1, dataPromise2, dataPromise3];
}

getNames2()
  .then((names) => console.log(`3.B. Names: ${names}\n`))
  .catch((err) => console.log(`Failed to fetch data: ${err}`));

//----------TASK-3-C----------//

function requestSuccess2(): Promise<Response> {
  function makeAttempt(): Promise<Response> {
    return fetch(link).then((res) => {
      if (res.ok) {
        return res;
      }
      return makeAttempt();
    });
  }

  return makeAttempt();
}

function getSingleName2(): Promise<string> {
  const res: Promise<Response> = requestSuccess2();
  return new Promise((resolve, reject) => {
    res
      .then((data) => data.json())
      .then((person) => {
        if (isPerson(person)) {
          resolve(person.name);
        } else {
          reject("Response object doesn't overlap type 'Person'");
        }
      })
      .catch((err) => console.log(err));
  });
}

function getNames3(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const names: string[] = [];

    const handleRes = (name: string): void => {
      names.push(name);
      if (names.length === 3) {
        resolve(names);
      }
    };

    try {
      getSingleName2().then((val) => handleRes(val));
      getSingleName2().then((val) => handleRes(val));
      getSingleName2().then((val) => handleRes(val));
    } catch (err) {
      reject(`Failed to resolve: ${err}`);
    }
  });
}

getNames3()
  .then((data) => console.log(`3.C. Names: ${data}\n`))
  .catch((err) => `Error: ${err}`);
