import _ from 'lodash';
import data from './data.js';

export const getPets = async (_args) => {
  const pets = data;

  // Simulates an asyc api that occasionally fails. 
  // Feel free to comment this out if you start working on task #2. 
  await new Promise(resolve => setTimeout(resolve, _.random(300, 1500)));
  if (_.random(0, 10) === 10) throw new Error('☹️');
  // ==============================

  return pets;
}