const express = require("express");
const app = express();

const host = "127.0.0.1";
const port = 5050;

app.get("/hello", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Дозволяє запити з будь-якого домену
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).json({greet: `Hello, ${req.query.name}`})
});

app.listen(port, host, () => {
  console.log(`Listening to ${host} on port ${port}`);
});
