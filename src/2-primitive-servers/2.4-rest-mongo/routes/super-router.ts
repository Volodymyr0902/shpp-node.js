import express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
  res.send("Main page of sub-catalog")
})

router.get("/v0", (req, res) => {
  res.send("V0 page of sub-catalog")
})

router.get("/v1", (req, res) => {
  res.send("V1 page of sub-catalog")
})