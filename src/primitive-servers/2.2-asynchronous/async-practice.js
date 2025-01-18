import fetch from "node-fetch";
const res = await fetch("https://api.ipify.org?format=json");
const data = (await res.json());
console.log(`1. await IP: ${data.ip}\n`);
//----------TASK-2-----------//
async function getMyIP() {
    const res = await fetch("https://api.ipify.org?format=json");
    if (!res.ok) {
        throw new Error(`${res.status} Failed to fetch data`);
    }
    const data = (await res.json());
    return data.ip;
}
getMyIP()
    .then((data) => console.log(`2. async/await IP: ${data}\n`))
    .catch((err) => console.log(`Failed to fetch data: ${err}`));
//--------------TASK-3-COMMON-RESOURCES--------------//
const link = "https://random-data-api.com/api/name/random_name";
async function requestSuccess() {
    let res;
    do {
        res = await fetch(link);
    } while (!res.ok);
    return res;
}
function isPerson(data) {
    return (typeof data === "object" &&
        data !== null &&
        "name" in data &&
        typeof data.name === "string");
}
//--------------TASK-3-A--------------//
async function getNames1() {
    const responses = await Promise.all([
        requestSuccess(),
        requestSuccess(),
        requestSuccess(),
    ]);
    // This time type assertion is used
    const persons = (await Promise.all(responses.map((response) => response.json())));
    return persons.map((person) => person.name);
}
getNames1()
    .then((names) => console.log(`3.A. Names: ${names}\n`))
    .catch((err) => console.log(`Failed to fetch data: ${err}`));
//-----------TASK-3-B------------//
async function getSingleName() {
    const res = await requestSuccess();
    const data = await res.json();
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
function requestSuccess2() {
    function makeAttempt() {
        return fetch(link).then((res) => {
            if (res.ok) {
                return res;
            }
            return makeAttempt();
        });
    }
    return makeAttempt();
}
function getSingleName2() {
    const res = requestSuccess2();
    return new Promise((resolve, reject) => {
        res
            .then((data) => data.json())
            .then((person) => {
            if (isPerson(person)) {
                resolve(person.name);
            }
            else {
                reject("Response object doesn't overlap type 'Person'");
            }
        })
            .catch((err) => console.log(err));
    });
}
function getNames3() {
    return new Promise((resolve, reject) => {
        const names = [];
        const handleRes = (name) => {
            names.push(name);
            if (names.length === 3) {
                resolve(names);
            }
        };
        try {
            getSingleName2().then((val) => handleRes(val));
            getSingleName2().then((val) => handleRes(val));
            getSingleName2().then((val) => handleRes(val));
        }
        catch (err) {
            reject(`Failed to resolve: ${err}`);
        }
    });
}
getNames3()
    .then((data) => console.log(`3.C. Names: ${data}\n`))
    .catch((err) => `Error: ${err}`);
