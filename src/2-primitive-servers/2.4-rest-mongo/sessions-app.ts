import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import bcrypt from "bcrypt";
import { Account } from "./models/account";

declare module "express-session" {
  interface Session {
    userID: string;
  }
}

const sessionName = "sid";
const port = 3030;
const app = express();

const mongoUrl = "mongodb://localhost:27017/todos_db";
const mongoStore = MongoStore.create({
  mongoUrl: mongoUrl,
  collectionName: "sessions",
});

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to DB!");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}...`);
    });
  })
  .catch((err) => {
    console.error(`Failed to connect to DB: ${err}`);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(
  session({
    name: sessionName,
    secret: "super-secret",
    resave: false, // not to save session on every request
    saveUninitialized: false, // not to save empty session
    store: mongoStore,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      httpOnly: true,
      secure: false,
    },
  })
);

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  res.json({ message: "Hello, world!" });
});

app.get("/login", (req, res) => {
  res.render("auth/login");
});

app.get("/register", (req, res) => {
  res.render("auth/register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  let account = await Account.findOne({ username: username });

  if (account) {
    res.status(400).render("auth/register");
    return;
  }

  account = new Account({
    username: username,
    password: await bcrypt.hash(password, 10),
  });

  await account.save();

  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const account = await Account.findOne({ username: username });

  if (!account) {
    res.status(400).render("auth/login");
    return;
  }

  const match = await bcrypt.compare(password, account.password);

  if (!match) {
    res.status(401).render("auth/login");
    return;
  }

  req.session.userID = account._id.toString();

  res.redirect("/top-secret");
})

app.get("/top-secret", (req, res) => {
  if (!req.session.userID) {
    res.status(401).render("auth/login");
    return;
  }

  res.render("top-secret");
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).redirect("/top-secret");
      return;
    }

    res.clearCookie(sessionName).redirect("/login");
  });
});

