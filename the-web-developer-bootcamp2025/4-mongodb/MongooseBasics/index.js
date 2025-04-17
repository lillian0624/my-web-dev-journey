const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: String,
  score: Number,
});
const Movie = mongoose.model("Movie", movieSchema);

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/movieApp");

    const amadeus = new Movie({
      title: "Amazon",
      year: 1999,
      rating: "PG-13",
      score: 8.5,
    });

    await amadeus.save();
    console.log("Saved Amazon movie!");

    const amazonMovies = await Movie.find({ title: "Amazon" });
    console.log("Found movies with title 'Amazon':", amazonMovies);

    await Movie.insertMany([
      { title: "The Lion King", year: 1994, rating: "G", score: 8.5 },
      { title: "The Dark Knight", year: 2008, rating: "PG-13", score: 9.0 },
      { title: "Inception", year: 2010, rating: "PG-13", score: 8.8 },
      { title: "Pulp Fiction", year: 1994, rating: "R", score: 8.9 },
      {
        title: "The Shawshank Redemption",
        year: 1994,
        rating: "R",
        score: 9.3,
      },
    ]);

    console.log("Inserted movies!");

    const allMovies = await Movie.find({});
    console.log("All movies in DB:", allMovies);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await mongoose.connection.close();
  }
}

main();
