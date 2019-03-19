import _ from "lodash";
import data from "./data.js";

// export const getPets = async _args => {
//   const pets = data;

//   // Simulates an async api
//   await new Promise(resolve => setTimeout(resolve, _.random(300, 1500)));

//   // Simulates receiving an error from the API. Please uncomment to test handling errors client-side.
//   // if (_.random(0, 10) === 10) throw new Error('☹️');

//   return pets;
// };

export const getPetBatch = async (
  batchSize,
  pagesLoaded,
  sortBy = null,
  filterBy = null
) => {
  pagesLoaded = pagesLoaded || 0; // NaN -> 0
  const pets = data; // comment on fetch/re-sort every time
  await new Promise(resolve => setTimeout(resolve, _.random(300, 1500)));
  if (_.random(0, 10) === 10) throw new Error("☹️");

  if (sortBy === "name") {
    pets.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "breed") {
    pets.sort(function(a, b) {
      var breedA = a.breed.toUpperCase();
      var breedB = b.breed.toUpperCase();
      if (breedA < breedB) {
        return -1;
      }
      if (breedA > breedB) {
        return 1;
      }
      return 0;
    });
  }

  const start = pagesLoaded * batchSize;
  console.log("Page", pagesLoaded);
  console.log("returning pets", start, "through", start + batchSize);
  return pets.slice(start, start + batchSize);
};
