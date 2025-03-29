// https://swapi.dev/api/people/1/
const loadStarWarsPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/1/");
  const data = await res.json();
};

loadStarWarsPeople();
