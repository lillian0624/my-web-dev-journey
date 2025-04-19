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

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual("fullName").get(function () {
  return `${this.first} ${this.last}`;
});

//pre and post hooks
personSchema.pre("save", function (next) {
  console.log("About to save!");
  this.first = "XXX";
  next();
});
personSchema.post("save", function (doc) {
  console.log("Just saved:", doc);
});

personSchema.pre("remove", function (next) {
  console.log("About to remove!");
  next();
});

const Person = mongoose.model("Person", personSchema);

// const Tammy = new Person({ first: "Tammy", last: "Chow" });
// console.log(Tammy.fullName);

//run it
//node
//.load Person.js
