const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["fruit", "vegetable", "dairy", "meat", "grain"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
