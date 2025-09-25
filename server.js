// server.js
import express from "express"; // kalau pakai ES Module
// const express = require("express"); // kalau pakai CommonJS

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
