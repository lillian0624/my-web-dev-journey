const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
  })

  .then(() => {
    console.log("Connection open!");
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  price: {
    type: Number,
    min: [0, "Price must be positive!"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

productSchema.methods.greet = function () {
  console.log("Hello from product!");
  console.log(`- ${this.name}`);
};

//static methods
productSchema.statics.fireSale = function () {
  return this.updateMany({ onSale: true }, { price: 0.0 });
};

const Product = mongoose.model("Product", productSchema);

// const findProduct = async () => {
//   const products = await Product.find({ name: "Bike Helmet" });
//   for (let p of products) {
//     p.greet();
//   }
// };
// findProduct();

Product.fireSale().then((res) => {
  console.log(res);
});

// new Product({
//   name: "Bike Helmet",
//   price: 100,
//   onSale: true,
//   categories: ["Cycling", "Safety"],
//   qty: { online: 10, inStore: 5 },
//   size: "S",
// }).save();

// Product.findOneAndUpdate(
//   { name: "Bike Helmet" },
//   { price: -99.99 },
//   { new: true, runValidators: true }
// )
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     if (e.errors) {
//       for (let field in e.errors) {
//         console.log(`${field}: ${e.errors[field].message}`);
//       }
//     } else {
//       console.log("Error:", e.message);
//     }
//   });
