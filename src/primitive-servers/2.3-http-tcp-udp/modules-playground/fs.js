// URL

const myUrl = new URL(
  "https://shpp.gitbook.io/m-web-nodejs/levels/2.-primitivnye-servera/2.2-pishem-http-tcp-udp-servers"
);

console.log(myUrl.href);
console.log(myUrl.host);
console.log(myUrl.pathname);

// process

console.log(process.argv);
// console.log(__dirname)
// console.log(__filename)
console.log("\n///////////////////////////\n");

// modules

// const received = require("./module")
// import * as data from "./my-module.js"

// received.greet(received.name)
// data.greet(data._name)

// fs

import fs from "fs/promises";

const create = async () => {
  try {
    const data = await fs.readFile("./modules-playground/text.txt", "utf8");
    console.log(`Data read`);
  
    await fs.mkdir("./modules-playground/new-data");
    console.log(`dir created`)
    
    await fs.writeFile("./modules-playground/new-data/written.txt", data);
    console.log(`file written`)
  } catch (err) {
    console.log("ERROR: Dir exists" + err)
  }
};

create()
  .then(() => {
    console.log("Removed file");
    return fs.unlink("./modules-playground/new-data/written.txt");
  })
  .then(() => {
    console.log("Removed dir");
    return fs.rmdir("./modules-playground/new-data")
  }).catch(err => console.log(`Failed to delete: ${err}`));

console.log("Must be first");
console.log("\n///////////////////////////\n");


