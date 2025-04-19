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

// const p = new Product({
//   name: "Ruby Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Avocado",
    price: 2.5,
    category: "fruit",
  },
  {
    name: "Organic Garlic",
    price: 2.0,
    category: "vegetable",
  },
  {
    name: "Organic Melon",
    price: 3.0,
    category: "fruit",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
