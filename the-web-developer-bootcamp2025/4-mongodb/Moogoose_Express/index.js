// npm init -y
// //npm i express mongoose ejs

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

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
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render("products/index", { products });
});

app.get("/products/new", (req, res) => {
  const categories = ["Fruit", "Vegetable", "Dairy", "Meat", "Grain"];
  res.render("products/new", { categories });
});

//submit new product
app.post("/products", async (req, res) => {
  newProduct = new Product(req.body);
  await newProduct.save();
  // console.log(newProduct);
  // res.send("Creating a new product!");
  res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  console.log(product);c
  // res.send("details page!");
  res.render("products/show", { product });
});
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  const categories = ["Fruit", "Vegetable", "Dairy", "Meat", "Grain"];
  res.render("products/edit", { product, categories });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/products/${product._id}`);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

//nodemon index.js

// mongosh
// use farmStand
// show collections
// db.products.find()
