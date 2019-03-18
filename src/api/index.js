import _ from "lodash";
import data from "./data.js";

export const getPets = async _args => {
  const pets = data;

  // Simulates an async api
  await new Promise(resolve => setTimeout(resolve, _.random(300, 1500)));

  // Simulates receiving an error from the API. Please uncomment to test handling errors client-side.
  // if (_.random(0, 10) === 10) throw new Error('☹️');

  return pets;
};

export const getPetBatch = async (batchSize, pagesLoaded) => {
  pagesLoaded = pagesLoaded || 0; // NaN -> 0
  const pets = data;
  await new Promise(resolve => setTimeout(resolve, _.random(300, 1500)));

  const start = pagesLoaded * 10;
  console.log("returning pets", start, "through", start + batchSize);
  return pets.slice(start, start + batchSize);
};
