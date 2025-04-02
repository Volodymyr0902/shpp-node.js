const app = require("express")();
const reader = require("fs");

const host = "localhost";
const port = 8080;

app.get("/", (req, res) => {
  let counterValue = reader.readFileSync("counterBD.txt");
  reader.writeFileSync("counterBD.txt", +counterValue + 1 + "")
  res.send(`${counterValue}`)
})

app.listen(port, host, () => {
  console.log(`Listening to ${port} on host ${host}`)
})