import dgram from "dgram";

const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
  const time = new Date().toLocaleString();
  console.log(
    `${time}: Received message from ${rinfo.address}:${
      rinfo.port
    }:\n${msg.toString()}`
  );

  server.send(msg, rinfo.port, rinfo.address, (err) => {
    if (err) {
      console.error(`Failed to send response: ${err}`);
    } else {
      console.log("Sent response back.");
    }
  });
});

server
  .on("listening", () => {
    const meta = server.address();
    console.log(
      `Started UDP server on ${meta.address} on port ${meta.port}...`
    );
  })
  .on("error", (err) => {
    console.error(`Server error: ${err}`);
  });

server.bind(53);
