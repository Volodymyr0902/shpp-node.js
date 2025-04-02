// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       setTimeout(() => {
//         console.log('Hello!')
//       }, 5000)
//     }, 5000)
//   }, 5000)
// }, 5000)

//----------------//

function someAsyncFunc(callbackfn) {
  setTimeout(() => callbackfn("haha"), 2000);
}

function beDoneLater(text) {
  console.log("Is done later " + text);
}

// someAsyncFunc(beDoneLater)
// console.log("Is done immeadiately")

//--------------//

// let course;

// fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5c59253e6dbe4006a3db5475e0dbcdea&base=USD")
//   .then(data => data.json())
//   .then(data => course = data.rates.UAH)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// console.log(course)

//---------------//

async function getData() {
  const res = await fetch(
    "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5c59253e6dbe4006a3db5475e0dbcdea&base=USD"
  );
  const data = await res.json();
  return data;
}

// getData().then((data) => console.log(data));

//-------------//

const aData = fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5c59253e6dbe4006a3db5475e0dbcdea&base=USD"
);
const bData = fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5c59253e6dbe4006a3db5475e0dbcdea&base=USD"
);
const cData = fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5c59253e6dbe4006a3db5475e0dbcdea&base=USD"
);

Promise.all([aData, bData, cData])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((data) => data.map((item) => item.rates.UAH))
  .then((data) => console.log(`from promise.all(): ${data}`));

//-----------------//

// const fakeAPI = fetch("https://api.fake.haha");

// Promise.race([aData, fakeAPI])
//   .then((val) => val.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//-----------------//

async function grabData() {
  try {
    return await fetch("https://api.ipify.org?format=json");
  } catch (err) {
    console.log("from second", err);
  }
}

grabData()
  .then((res) => res.json())
  .then(val => console.log(val))
  .catch((err) => console.error(err));

console.log("Must be first");



  