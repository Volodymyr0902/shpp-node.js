function readHttpLikeInput() {
  var fs = require("fs");
  var res = "";
  var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
  let was10 = 0;
  for (;;) {
    try {
      fs.readSync(0 /*stdin fd*/, buffer, 0, 1);
    } catch (e) {
      break; /* windows */
    }
    if (buffer[0] === 10 || buffer[0] === 13) {
      if (was10 > 10) break;
      was10++;
    } else was10 = 0;
    res += new String(buffer);
  }

  return res;
}

let contents = readHttpLikeInput();

function parseTcpStringAsHttpRequest(string) {
  return string
    .split("\n")
    .reduce((obj, el, index, arr) => {
      if (index === 0) {
        const splitTop = el.split(" ");
        obj.method = splitTop[0];
        obj.uri = splitTop[1];
      } else if (index > arr.indexOf("") && el !== "") {
        obj.body = el;
      } else if (el !== "") {
        const splitHeader = el.split(": ");
        obj.headers = obj.headers || {};
        obj.headers[splitHeader[0]] = splitHeader[1];
      }
      return obj;
    }, {});
}

http = parseTcpStringAsHttpRequest(contents);
console.log(JSON.stringify(http, undefined, 2));