import dgram from "dgram";

const port = 53;
const hostname = "127.0.0.1";
const message = Buffer.from("Hope I receive this back");
const startTime = Date.now();

const client = dgram.createSocket("udp4");

client.send(message, port, hostname, (err) => {
  if (err) {
    console.error(`Failed to send message to server: ${err}`);
  } else {
    console.log(`Sent: ${message.toString()}`);
  }
});

client
  .on("message", (msg, rinfo) => {
    console.log(`Received: ${msg}`);
    console.log(`Transfer time: ${Date.now() - startTime} ms`);
    client.close(() => {
      console.log("Closed connection");
    });
  })
  .on("error", (err) => {
    console.error(`Client error: ${err}`);
  });
