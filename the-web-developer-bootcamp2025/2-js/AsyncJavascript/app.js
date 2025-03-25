// const fakeRequestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("Connection Timeout :(");
//       } else {
//         resolve("Here is our fake data from ${url}");
//       }
//     });
//   });
// };

// fakeRequestPromise("yelp.com/api/coffee")
//   .then(() => {
//     console.log("Promise Resolved!");
//     console.log("IT WORKED!!!");
//   })
//   .catch(() => {
//     console.log("Promise Resolved!");
//     console.log("Oh No, Error!!");
//   });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Your fake data here");
      }
      reject("Request error!");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("Done with request!");
    console.log("data is :", data);
  })
  .catch((err) => {
    console.log("Oh No!", err);
  });
