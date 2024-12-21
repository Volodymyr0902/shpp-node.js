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
  if (
    $method !== "POST" ||
    /^\/api(?!\/checkLoginAndPassword)/.test($uri) ||
    $headers["Content-Type"] !== "application/x-www-form-urlencoded"
  ) {
    return outputHttpResponse(
      400,
      "Bad Request",
      $headers,
      `<h1 style="color:green">ERROR: Invalid request</h1>`
    );
  } else if (!/^\/api/.test($uri)) {
    return outputHttpResponse(
      404,
      "Not Found",
      $headers,
      `<h1 style="color:green">ERROR: Resource not found</h1>`
    );
  }

  const login = $body.substring($body.indexOf("=") + 1, $body.indexOf("&"));
  const password = $body.substring($body.lastIndexOf("=") + 1);

  try {
    if (
      require("fs")
        .readFileSync("passwords.txt")
        .toString()
        .split("\n")
        .includes(`${login}:${password}`)
    ) {
      return outputHttpResponse(
        200,
        "OK",
        $headers,
        `<h1 style="color:green">FOUND</h1>`
      );
    } else {
      return outputHttpResponse(
        401,
        "Unathorized",
        $headers,
        `<h1 style="color:green">ERROR: Wrong input data</h1>`
      );
    }
  } catch (error) {
    return outputHttpResponse(
      500,
      "Internal Server Error",
      $headers,
      `<h1 style="color:green">ERROR: Server error</h1>`
    );
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
