const express = require("express");
const router = express.Router();
const db = require("../../database");

router.get("/", (req, res) => {
  db.select()
    .from("todo")
    .then((data) => {
      res.send(data);
    });
});

router.post("/", (req, res) => {
  db.insert(req.body)
    .returning("*")
    .into("todo")
    .then((data) => {
      res.send(data);
    });
});

module.exports = router;
