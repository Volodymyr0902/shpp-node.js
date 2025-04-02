import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5501",
  })
);

enum Signs {
  PLUS,
  MINUS,
}

const clickCounters = {
  plus: Signs.PLUS,
  minus: Signs.PLUS,
};

app.post("/", (req, res) => {
  const { sign } = req.body;

  switch (sign) {
    case Signs.PLUS:
      clickCounters.plus++;
      break;
    case Signs.MINUS:
      clickCounters.minus++;
      break;
  }
  res.json(clickCounters);
});

app.listen(3000, () => {
  console.log(`Server started...`);
});
