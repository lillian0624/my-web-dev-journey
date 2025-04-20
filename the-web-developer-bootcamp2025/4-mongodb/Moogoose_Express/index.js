// npm init -y
// //npm i express mongoose ejs

const express = require("express");
const app = express();
const path = require("path");

const Product = require("./models/product");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/farmStand", {
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

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render("products/index", { products });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  console.log(product);
  // res.send("details page!");
  res.render("products/show", { product });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

//nodemon index.js

// mongosh
// use farmStand
// show collections
// db.products.find()
