const link1 =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

const link2 =
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5c59253e6dbe4006a3db5475e0dbcdea&base=USD";

const link3 = "http://127.0.0.1:5050/hello?name=john";

document.getElementById("fetcher").addEventListener("click", () => {
  fetch(link3)
    .then((res) => {return res.json()})
    .then((data) => {
      document.getElementById("data").innerHTML = data.greet
      console.log(data.greet);
    });
});
