const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1/movieApp");
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: String,
  score: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

const amadeus = new Movie({
  title: "Amazon",
  year: 1999,
  rating: "PG-13",
  score: 8.5,
});

amadeus
  .save()
  .then(() => {
    console.log("Saved Amazon movie!");
    return Movie.find({ title: "Amazon" });
  })
  .then((data) => {
    console.log("Found movies with title 'Amazon':", data);
    mongoose.connection.close();
  });
