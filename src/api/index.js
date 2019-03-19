import _ from "lodash";
import data from "./data.js";

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

  // Sorting
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

  // Filtering
  // if (filterBy === "dog") {
  //   pets = pets.filter(pet => pet.petType === PetTypeEnum.DOG);
  // } else if (filterBy === "cat") {
  //   pets = pets.filter(pet => pet.petType === PetTypeEnum.CAT);
  // }

  const start = pagesLoaded * batchSize;
  console.log("Page", pagesLoaded);
  console.log("returning pets", start, "through", start + batchSize);
  return pets.slice(start, start + batchSize);
};
