import _ from 'lodash';
import data from './data.js';

export const getPets = async (_args) => {
  const pets = data;

  // Simulates an async api
  await new Promise(resolve => setTimeout(resolve, _.random(300, 1500)));
  
  // Simulates receiving an error from the API. Please uncomment to test handling errors client-side.
  // if (_.random(0, 10) === 10) throw new Error('☹️');

  return pets;
}
