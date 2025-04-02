import express from "express";
import morgan from "morgan";
import parser from "body-parser";
import cookie from "cookie-parser";
import { router } from "./routes/super-router.js";
import mongoose from "mongoose";
import { ActiveUser } from "./models/user.js";
import errorHandler from "errorhandler";
const port = 5353;
const dbURI = "mongodb+srv://admin:todosproject@todo.i2ft2.mongodb.net/Users?retryWrites=true&w=majority&appName=TODO";
const app = express();
// Use logger
app.use(morgan("dev"));
// Use parsers
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.text());
app.use(cookie());
// Set views
app.set("view engine", "ejs");
app.set("views", "/Users/volodymyr/Desktop/Ш++/Node/src/primitive-servers/2.4-rest-mongo/views");
// Serve static
app.use("/media", express.static("public"));
// Connect to DB
// const client = new MongoClient(dbURI);
// client
//   .connect()
//   .then(() => {
//     client.db("admin").command({ ping: 1 });
//   })
//   .then(() => console.log("Successfully connected to Mongo"))
//   .catch((err) => console.error(`Failed to connect to mongo: ${err}`))
mongoose
    .connect(dbURI)
    .then(() => {
    console.log(`Connected to Mongo`);
    app.listen(port, () => {
        console.log(`Server started on port ${port}...`);
    });
})
    .catch((err) => console.error(`Failed to connect to mongo: ${err}`));
// Save data in DB
app.get("/user-create", (req, res) => {
    const user1 = new ActiveUser({
        name: "Kyle",
        age: 25,
        position: "Mobile dev",
    });
    user1
        .save()
        .then((result) => res.send(`Result is: ${result}`))
        .catch((err) => console.error(`Failed to save new document: ${err}`));
});
// Get data from DB
app.get("/user-get/all", (req, res) => {
    ActiveUser.find()
        .then((result) => {
        res.send(result);
    })
        .catch((err) => console.log(`Failed to get users: ${err}`));
});
app.get("/user-get/id", (req, res) => {
    ActiveUser.findById("6796c552b9b21de62ad97184")
        .then((result) => res.send(result))
        .catch((err) => console.log(`Failed to get user by ID: ${err}`));
});
app.get("/user-get/age", (req, res) => {
    ActiveUser.find({ age: 25 })
        .then((results) => res.send(results))
        .catch((err) => console.log(`Failed to get user by age: ${err}`));
});
// Use router
app.use("/versions", router);
// Basic routes
app.get("/", (req, res) => {
    res.write("Hello world");
    res.send();
});
app.get("/api", (req, res) => {
    res.render("api", { inner: "Docs on API" });
});
app.get("/main", (req, res) => {
    ActiveUser.find().then((users) => {
        res.render("main", { inner: "Main", users });
    });
});
app.post("/main", (req, res) => {
    const data = req.body;
    console.log(data);
    console.log(JSON.parse(data));
    res.json(`You sent ${data}`);
});
app.get("/cookie", (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send();
});
// Form filling
app.get("/form", (req, res) => {
    res.render("form");
});
app.post("/submit-form", (req, res) => {
    const newUser = new ActiveUser(req.body);
    newUser
        .save()
        .then((input) => res.render("success-submit", { input }))
        .catch((err) => console.error(err));
});
// Using route params
app.get("/person/:id", (req, res) => {
    const id = req.params.id;
    ActiveUser.findById(id)
        .then((user) => {
        res.render("person", { user });
    })
        .catch((err) => console.error(`Failed to read user's data: ${err}`));
});
// Delete
app.delete("/person/:id", (req, res) => {
    const id = req.params.id;
    ActiveUser.findByIdAndDelete(id)
        .then((result) => {
        res.json({ redirect: "/main" });
    })
        .catch((err) => console.error(`Failed to delete person: ${err}`));
});
// Download
app.get("/random-text", (req, res) => {
    res.download("public/to-be-got.txt", (err) => {
        if (err) {
            console.log(`Failed to download file: ${err}`);
        }
        else {
            console.log(`File downloaded successfully`);
        }
    });
});
app.use(errorHandler());
// Handle errors
// app.use((err, req, res, next) => {
//   console.error(err)
//   res.status(400).send("BAD REQUEST")
// })
