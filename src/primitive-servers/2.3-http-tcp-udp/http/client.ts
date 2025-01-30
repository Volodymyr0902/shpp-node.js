import http from "http";

const message: string = "Very important message";
const startTime = Date.now();

const options = {
  hostname: "127.0.0.1",
  port: 8080,
  path: "/echo",
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
  },
};

const req = http.request(options, (res) => {
  const serverResData: Buffer[] = [];

  res
    .on("data", (chunk) => {
      serverResData.push(chunk);
    })
    .on("end", () => {
      console.log(`Sent: ${message}`);
      console.log(`Received: ${Buffer.concat(serverResData).toString()}`);
      console.log(`Transfer time: ${Date.now() - startTime} ms`);
    })
    .on("error", (err) => {
      console.error(`${res.statusCode} ${res.statusMessage}: ${err}`);
    });
});

req.on("error", (err) => {
  console.error(`Failed to send a request: ${err}`);
});

req.end(message);
