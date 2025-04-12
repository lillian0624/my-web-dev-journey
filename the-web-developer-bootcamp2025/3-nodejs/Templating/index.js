const express = require("express");
const app = express();
const path = require("path");

//using ejs as a template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("Home.ejs");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
