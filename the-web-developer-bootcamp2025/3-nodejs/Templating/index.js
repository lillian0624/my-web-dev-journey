const express = require("express");
const app = express();

//using ejs as a template engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("Home.ejs");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
