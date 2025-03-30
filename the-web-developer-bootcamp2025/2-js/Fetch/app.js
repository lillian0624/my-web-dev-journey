// https://swapi.dev/api/people/1/
const getStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPeople();
