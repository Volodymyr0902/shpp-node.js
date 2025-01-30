import net from "net";
import { stdin } from "process";

const message = "Hello, I'm client";
let startTime = Date.now()

const options = {
  port: 3360,
};

const socket = net.createConnection(options, () => {
  socket.write(message);
  console.log(`Sent: ${message}`)
});

socket
  .on("data", (chunk) => {
    console.log(`Received: ${chunk}`);
    console.log(`Transfer time: ${Date.now() - startTime} ms`)
    if (chunk.toString() === "end") {
      socket.end()
      stdin.destroy()
    }
    // socket.end()
  })
  .on("error", (err) => {
    console.error(`ERRROR: ${err}`);
  });

// To chat with server
stdin.on("data", data => {
  startTime = Date.now()
  socket.write(data.toString().trim())
})
