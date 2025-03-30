const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  //   config object is defined because there will be multi different things we can add to the query.
  const config = { params: { q: searchTerm, isFunny: "colt" } };
  //   can use postman to test this API can get data or not
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  // can use console.dir() to inspect DOM elements, shows complete structure
  form.elements.query.value = "";
});

// make a loop of all the images return from the search
const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      /*    this is the image source in the document, when you search something, it will
            a array about all the shows. there is a property , the id is show, and you can navigate
        show.img.medium */
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
