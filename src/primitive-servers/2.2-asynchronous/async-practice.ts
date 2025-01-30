import fetch, { Response } from "node-fetch";

//-------------TASK-1-------------//

interface IPRes {
  ip: string;
}

const res: Response = await fetch("https://api.ipify.org?format=json");
const data = (await res.json()) as IPRes;

console.log(`1. await IP: ${data.ip}\n`);

// //----------TASK-2-----------//

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

//-----------TASK-4-A-------------//

const link2 = "https://random-data-api.com/api/users/random_user";

interface PersonWithGender {
  gender: string;
}

function isWoman(data: any): data is PersonWithGender {
  return (
    typeof data === "object" &&
    data !== null &&
    "gender" in data &&
    data.gender === "Female"
  );
}

function requestSuccess3(): Promise<Response> {
  return fetch(link2)
    .then((res) => {
      if (res.ok) {
        return res;
      } else if (res.status === 429) {
        return requestSuccess3();
      } else {
        throw new Error(`Failed to fetch: ${res.status}`);
      }
    })
    .catch((err) => Promise.reject(err));
}

function getFemaleUser(reqsCounter = 0): Promise<PersonWithGender> {
  return requestSuccess3()
    .then((res) => res.json())
    .then((person) => {
      if (isWoman(person)) {
        console.log(`4.A. Took ${reqsCounter} requests to get female user`);
        return person;
      } else {
        return getFemaleUser(++reqsCounter);
      }
    })
    .catch((err) => Promise.reject(err));
}

getFemaleUser()
  .then((person) => console.log(`${person.gender}\n`))
  .catch((err) => console.log(err));

//----------TASK-4-B------------//

async function requestSuccess4(): Promise<Response> {
  let res: Response;
  do {
    res = await fetch(link2);
    if (res.status !== 429 && res.status !== 200) {
      Promise.reject(`Failed to fetch: ${res.status}`);
    }
  } while (!res.ok);

  return res;
}

async function getFemaleUser2(reqsCounter = 0): Promise<PersonWithGender> {
  try {
    const person = await requestSuccess4().then((res) => res.json());
    if (isWoman(person)) {
      console.log(`4.B. Took ${reqsCounter} requests to get female user`);
      return person;
    } else {
      return getFemaleUser2(++reqsCounter);
    }
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

getFemaleUser2()
  .then((person) => console.log(`${person.gender}\n`))
  .catch((err) => console.log(err));

//------------TASK-5---------------//

async function getIP(): Promise<string> {
  try {
    const res: Response = await fetch("https://api.ipify.org?format=json");
    const data = (await res.json()) as IPRes;
    return data.ip;
  } catch (error) {
    throw new Error(`Failed to fetch: ${error}`);
  }
}

async function fun1(callbackfn: (ip: string) => string): Promise<string> {
  try {
    const ip: string = await getIP();
    return callbackfn(ip);
  } catch (error) {
    throw new Error(`Failed to fetch: ${error}`);
  }
}

function fun2(): Promise<string> {
  return fun1((ip) => `5. IP: ${ip}\n`);
}

const result: string = await fun2();
console.log(result);

//-------------TASK-6--------------//

async function fn3(): Promise<string> {
  try {
    const ip: string = await getIP();
    return ip;
  } catch (error) {
    throw new Error(`Failed to fetch: ${error}`);
  }
}

async function fn4(callbackfn: (ip: string) => string) {
  try {
    const res: string = await fn3();
    return callbackfn(res);
  } catch (error) {
    throw new Error(`Failed to fetch: ${error}`);
  }
}

fn4((ip) => `6. IP: ${ip}`)
  .then((ip) => console.log(`${ip}\n`))
  .catch((err) => console.log(err));
