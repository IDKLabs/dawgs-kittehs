import React from 'react';
import { PetTypeEnum } from './api/enums.js';

const Icons = Object.freeze({
  [PetTypeEnum.DOG]: '🐶',
  [PetTypeEnum.CAT]: '😼',
})

export default ({ pet }) => (
  <div className="petitem">
    <div className="type">{Icons[pet.petType]}</div>
    <div className="name">{pet.name}</div>
    <div className="breed">{pet.breed}</div>
  </div>
);