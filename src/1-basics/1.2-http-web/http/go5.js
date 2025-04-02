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

/**
 * Server
 */
function processHttpRequest($method, $uri, $headers, $body) {
  let finalPath = $uri;

  if (!/^\/hey/.test($uri)) {
    return outputHttpResponse(403, "Forbidden", $headers, "Outside home directory");
  } else if (/^student.shpp.me/.test($headers["Host"])) {
    finalPath = $uri.split("/");
    finalPath.shift();
    finalPath = finalPath
      .toSpliced(finalPath.indexOf(finalPath.length - 1), 0, "/student/")
      .join("");
  } else if (/^another.shpp.me/.test($headers["Host"])) {
    finalPath = $uri.split("/");
    finalPath.shift();
    finalPath = finalPath
      .toSpliced(finalPath.indexOf(finalPath.length - 1), 0, "/another/")
      .join("");
  }

  try {
    var buffer = require("fs").readFileSync(finalPath);
  } catch (err) {
    return outputHttpResponse(404, "Not Found", $headers, "Resource not found");
  }

  if ($method === "GET") {
    return outputHttpResponse(200, "OK", $headers, buffer.toString());
  }
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

const http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);
