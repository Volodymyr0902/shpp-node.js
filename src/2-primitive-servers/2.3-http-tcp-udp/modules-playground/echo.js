import http from "http"

const port = process.env.port || 8080
const host = "localhost"

const server = http.createServer((req, res) => {
  const body = []

  req.on("error", err => {
    console.error(err)
    res.statusCode = 400
    res.end()
  })

  res.on("error", err => {
    console.error(err)
    res.statusCode = 500
  })

  if (req.method === "POST" && req.url === "/echo") {
    // req.pipe(res);
    req.on("data", chunk => {
      body.push(chunk)
    }).on("end", () => {
      body = Buffer.concat(body).toString()
      res.end(body)
    })
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(port, host, () => console.log(`Server started on ${host} on port ${port}...`))