import fs from "fs";

const readStream = fs.createReadStream("./node-local/text.txt");
const writeStream = fs.createWriteStream("./node-local/written.txt");

// readStream.on("data", (chunk) => {
//   for (let index = 0; index < 1000; index++) {
//     writeStream.write(chunk);
//   }
// });

readStream.pipe(writeStream);




