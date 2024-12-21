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

/**
 * HTTP string with no parentheses (not parsable for JSON)
 */
let contents = readHttpLikeInput();

function outputHttpResponse(statusCode, statusMessage, headers, body) {
  console.log(`HTTP/1.1 ${statusCode} ${statusMessage}
Date: ${Date()}
Server: Apache/2.2.14 (Win32)
Content-Length: ${body.length}
Connection: Closed
Content-Type: text/html; charset=utf-8

${body}`);
}

function processHttpRequest($method, $uri, $headers, $body) {
  let statusCode,
    statusMessage,
    result = "not found";

  if ($method === "GET") {
    if (/^\/sum\?nums=(\d+,?){2,}$/g.test($uri)) {
      statusCode = 200;
      statusMessage = "OK";
      result =
        $uri
          .slice($uri.indexOf("=") + 1)
          .split(",")
          .reduce((sum, el) => sum + +el, 0) + "";
    } else if (/^\/sum(?!(\?nums\=(\d+,?){2,}))/g.test($uri)) {
      statusCode = 400;
      statusMessage = "Bad Request";
    } else {
      statusCode = 404;
      statusMessage = "Not Found";
    }
  } else {
    statusCode = 400;
    statusMessage = "Bad Request";
  }

  outputHttpResponse(statusCode, statusMessage, $headers, result);
}

function parseTcpStringAsHttpRequest(string) {
  return string.split("\n").reduce((obj, el, index, arr) => {
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
processHttpRequest(http.method, http.uri, http.headers, http.body);
