// https://swapi.dev/api/people/1/

const getStarWarsPeople = async () => {
  try {
    const res = await axios.get("https://swapi.dev/api/people/1/");
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPeople();
