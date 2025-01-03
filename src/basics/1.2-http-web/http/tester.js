if (process.argv.length != 4) {
  console.log(process.argv)
console.log("usage: node tester.js <tasknum> <path/to/taskN.js>\nexample: node tester.js 1 t1.js\n");
  process.exit(1);
}

const inputs = {
  1: `hello`,

  2: `POST /doc/test HTTP/1.1
Host: shpp.me
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0
Content-Length: 35

bookId=12345&author=Tan+Ah+Teck
`,

  3: `GET /sum?nums=1,2,3,4,5,6,7 HTTP/1.1
Host: shpp.me
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0

`,

  4: `POST /api/checkLoginAndPassword HTTP/1.1
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/4.0
Content-Length: 35

login=student&password=12345
`,

  5: `GET / HTTP/1.1
Host: student.shpp.me
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0

`,

6: `POST /doc/test HTTP/1.1
Host: shpp.me
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0
Content-Length: 35
`,

7: `POST /doc/test HTTP/1.1

bookId=12345&author=Tan+Ah+Teck
`,

8: `GET /sum?nums=1,2,3 HTTP/1.1
Host: student.shpp.me

`,

9: `POST /api/checkLoginAndPassword HTTP/1.1
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/4.0
Content-Length: 35

login=student&password=12345
`,

10: `GET /hey/file.txt HTTP/1.1
Host: another.shpp.me
Accept: text/txt
Content-Type: text/txt
User-Agent: Mozilla/4.0
`
}

// =============================================== ANSWERS

answers = {
1: `3`,
2: JSON.stringify({
          "method": "POST",
          "uri": "\/doc\/test",
          "headers": {
              "Host": "shpp.me",
              "Accept": "image\/gif, image\/jpeg, *\/*",
              "Accept-Language": "en-us",
              "Accept-Encoding": "gzip, deflate",
              "User-Agent": "Mozilla\/4.0",
              "Content-Length": "35"
          },
          "body": "bookId=12345&author=Tan+Ah+Teck"
      }, undefined, 2),
  3: `HTTP/1.1 200 OK
Server: Apache/2.2.14 (Win32)
Connection: Closed
Content-Type: text/html; charset=utf-8
Content-Length: 2

10`,

4: `HTTP/1.1 200 OK
Server: Apache/2.2.14 (Win32)
Content-Length: 34
Connection: Closed
Content-Type: text/html; charset=utf-8

<h1 style="color:green">FOUND</h1>`,

5: `HTTP/1.1 200 OK
Server: Apache/2.2/14 (Win64)
Connection: Closed
Content-Type: text/html; charset=utf-8
Content-Length: 61

<h1 style="color:white background-color:green">Welcome!</h1>`,

6: JSON.stringify({
  "method": "POST",
  "uri": "\/doc\/test",
  "headers": {
      "Host": "shpp.me",
      "Accept": "image\/gif, image\/jpeg, *\/*",
      "Accept-Language": "en-us",
      "Accept-Encoding": "gzip, deflate",
      "User-Agent": "Mozilla\/4.0",
      "Content-Length": "35"
  }
}, undefined, 2),

7: JSON.stringify({
  "method": "POST",
  "uri": "\/doc\/test",
  "body": "bookId=12345&author=Tan+Ah+Teck"
}, undefined, 2),

// 8: ``

9: '5'
}


const custom = exports.custom = (cmd, input) => {
  try {
      return "" + require('child_process').execSync(cmd, {input});
  } catch (e) {
      return undefined;
  }
};

let res = custom("node "+process.argv[3], inputs[process.argv[2]]);

console.log(`got: 
=======================
${res}
=======================
`);

res = res.replace(/Date:[^\n]+\n/, "").replace(/[\n\r]+$/, "");

// Commented out for go3.js/go4.js
// if (res === answers[process.argv[2]])
//   console.log("OK");
// else
//   console.log("mismatch, was waiting for response like: \n"+answers[process.argv[2]]);

