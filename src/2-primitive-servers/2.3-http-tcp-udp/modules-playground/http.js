import http from "http";

const vehicle = {
  type: "car",
  transmission: "manual",
  fuel: "diesel",
};

const server = http.createServer((req, res) => {
  res.setHeader("Accept-Language", "us-en");
  res.writeHead(200, { "Content-Type": "text/html" });
  // res.end(JSON.stringify(vehicle, null, 2));

  // Retrieving body
  let body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
    });

  res.end("<h1>Hi everyone</h1>");
});

const port = process.env.port || 3000;

server.listen(port, () => console.log(`Started server at ${port}...`));
