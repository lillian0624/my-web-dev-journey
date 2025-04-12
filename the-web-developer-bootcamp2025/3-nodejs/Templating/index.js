const express = require("express");
const app = express();
const path = require("path");

//using ejs as a template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random.ejs", { num });
});

app.get("/r/:subreddit", (req, res) => {
  // console.log("Visited subreddit route:", req.params.subreddit);
  const { subreddit } = req.params;
  res.render("subreddit.ejs", { subreddit });
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty"];
  res.render("cats.ejs", { cats });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
