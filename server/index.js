const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("ad");
});

app.listen("3001");
