const app = require('express')();
const file = require('fs').readFileSync("index.html")

const host = 'localhost';
const port = 8080;

app.get('/', (req, res) => {
  var query = req.query;
  var obj = Object.values(query)
  sum = obj.reduce((accum, num) => accum + +num, 0)
  res.status(200).type('text/plain');
  res.send(`Sum: ${sum}`)
})

app.get('/home', (req, res) => {
    res.status(200).type('text/html');
    res.send(file);
});

app.get('/about', (req, res) => {
    res.status(200).type('text/plain');
    res.send('About page');
});

// app.post('/api/admin', (req, res) => {
//     res.status(200).type('text/plain');
//     res.send('Create admin request');
// });

// app.post('/api/user', (req, res) => {
//     res.status(200).type('text/plain');
//     res.send('Create user request');
// });

// app.use((req, res, next) => {
//     res.status(404).type('text/plain');
//     res.send('Not found');
// });

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`);
});