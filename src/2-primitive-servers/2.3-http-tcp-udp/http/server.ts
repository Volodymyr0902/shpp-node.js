import http from "http";

const port = 8080;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  req.on("error", (err) => {
    console.error(`400 Bad Request: ${err}`);
  });

  res.on("error", (err) => {
    console.error(`500 Server Error: ${err}`);
  });

  if (req.method === "POST" && req.url === "/echo") {
    const clientMessageBody: Buffer[] = [];
    const clientIP = req.socket.remoteAddress;
    const clientPort = req.socket.remotePort;
    const timepoint = new Date().toLocaleString();

    console.log(`${timepoint}: Incoming message from ${clientIP}:${clientPort}`);

    req
      .on("data", (chunk) => {
        clientMessageBody.push(chunk);
      })
      .on("end", () => {
        const messageStr = Buffer.concat(clientMessageBody).toString();
        console.log(
          `Message body: ${messageStr}`
        );

        res.end(messageStr);
        console.log("Response sent back to client");
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server started on ${hostname} on port ${port}...`);
});
