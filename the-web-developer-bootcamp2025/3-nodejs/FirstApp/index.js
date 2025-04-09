const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got a new request");
//   //   res.send("Hello, we got your request. This is a response");
//   res.send("<h1>This is my website</h1>");
// });

// app.use("/", (req, res) => {});

app.get("/dogs", (req, res) => {
  res.send("This si the  page");
});
app.get("/cats", (req, res) => {
  res.send("Meow Meow");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`Welcome to the ${subreddit} subreddit!`);
});
