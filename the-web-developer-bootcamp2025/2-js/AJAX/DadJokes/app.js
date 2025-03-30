const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};
//fetch joke and add the returned data to the page without fresh the current page

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    // you can cope this URL to Postman to see what you can get from this API
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);
