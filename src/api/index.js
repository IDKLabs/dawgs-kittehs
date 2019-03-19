import _ from "lodash";
import data from "./data.js";
import { PetTypeEnum } from "./enums.js";

export const getPetBatch = async (
  batchSize,
  pagesLoaded,
  sortBy = null,
  filterBy = null
) => {
  pagesLoaded = pagesLoaded || 0; // NaN -> 0
  const pets = data;
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

  const start = pagesLoaded * batchSize;

  if (start >= pets.length || start + batchSize >= pets.length) {
    return { response: {}, status: false };
  }

  // Filtering
  if (filterBy === "dog") {
    const dogs = pets.filter(pet => pet.petType === PetTypeEnum.DOG);
    return { response: dogs.slice(start, start + batchSize), status: true };
  } else if (filterBy === "cat") {
    const cats = pets.filter(pet => pet.petType === PetTypeEnum.CAT);
    return { response: cats.slice(start, start + batchSize), status: true };
  }
  return { response: pets.slice(start, start + batchSize), status: true };
};
