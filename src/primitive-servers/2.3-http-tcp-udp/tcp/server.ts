import net from "net";

const port = 3360;
const hostname = "127.0.0.1";

const server = net.createServer((socket) => {
  const IP = socket.remoteAddress;
  const port = socket.remotePort;
  const connectionTime = new Date().toLocaleString();

  console.log(`${connectionTime}: Client ${IP}:${port} has connected.`);

  socket
    .on("data", (chunk) => {
      console.log(`Message: ${chunk}`);
      socket.write(chunk);
    })
    .on("end", () => {
      console.log("Client has left.\n");
    })
    .on("error", (err) => {
      console.error(`Failed to transfer data: ${err}`);
    });
});

server.listen(port, hostname, () => {
  console.log(`TCP server started on ${hostname} on port ${port}...`);
});
