import express from "express";
import { getLibDB } from "./db";
import { Db, ObjectId } from "mongodb";

const port = 2525;
const app = express();
let db: Db;

app.use(express.json());

// Connect to DB and start server
getLibDB()
  .then((dbInstance) => {
    db = dbInstance;
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Failed to connect to DB: ${err}`);
  });

// Get paginated list of books
app.get("/library", (req, res) => {
  const startPage: number = parseInt(req.query.p as string) || 0;
  const pageSize = 10;

  db.collection("books")
    .find()
    .sort({ title: 1 })
    .skip(startPage * pageSize)
    .limit(pageSize)
    .toArray()
    .then((books) => {
      res.json({ booksLength: books.length, books });
    });
});

// Get book by ID
app.get("/library/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.sendStatus(400);
    return
  }

  db.collection("books")
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((book) => {
      if (book) {
        res.json(book);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(`Failed to find book: ${err}`);
      res.sendStatus(500);
    });
});

// Add book
app.post("/library", (req, res) => {
  const book = req.body;

  db.collection("books")
    .insertOne(book)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(`Failed to insert book: ${err}`);
      res.sendStatus(500);
    });
});

// Delete book
app.delete("/library/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.sendStatus(400);
    return
  }

  db.collection("books")
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then((result) => {
      if (result.deletedCount) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(`Failed to delete book: ${err}`);
      res.sendStatus(500);
    });
});

interface Book {
  title: string;
  author: string;
  pages: number;
  genre: string[];
}

const isBook = (obj: any): obj is Book => {
  for (const key of Object.keys(obj)) {
    if (
      key !== "title" &&
      key !== "author" &&
      key !== "pages" &&
      key !== "genre"
    ) {
      return false;
    }
  }

  return true;
};

// Update book
app.patch("/library/:id", (req, res) => {
  const id = req.params.id;
  const upd = req.body;

  if (!ObjectId.isValid(id) || !isBook(upd)) {
    res.sendStatus(400);
    return;
  }

  db.collection("books")
    .updateOne({ _id: new ObjectId(id) }, { $set: upd })
    .then((result) => {
      if (result.modifiedCount) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(`Failed to update book: ${err}`);
      res.sendStatus(500);
    });
});
