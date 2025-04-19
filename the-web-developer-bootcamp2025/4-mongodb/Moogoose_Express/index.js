// npm init -y
// //npm i express mongoose ejs

const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
  })

  .then(() => {
    console.log("Mongo Connection open!");
  })
  .catch((err) => {
    console.log("Mongo Connection Error!");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/dog", (req, res) => {
  res.send("home");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

//nodemon index.js
