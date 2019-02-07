export const PetTypeEnum = Object.freeze({
  DOG: 'DOG',
  CAT: 'CAT',
});

export const DogBreedEnum = Object.freeze({
  'Labrador': 'Labrador',
  'Great Dane': 'Great Dane',
  'Bernese Mountain Dog': 'Bernese Mountain Dog',
  'Siberian Husky': 'Siberian Husky',
  'Rottweiler': 'Rottweiler',
  'Australian Shepherd': 'Australian Shepherd',
  'Dachshund': 'Dachshund',
  'Bulldog': 'Bulldog',
  'Boston Terrier': 'Boston Terrier',
  'Yorkshire Terrier': 'Yorkshire Terrier',
  'Cavalier King Charles Spaniel': 'Cavalier King Charles Spaniel',
  'Beagle': 'Beagle',
  'Doberman Pinscher': 'Doberman Pinscher',
  'Boxer': 'Boxer',
  'Brittany': 'Brittany',
  'Pointer': 'Pointer',
  'Golden Retriever': 'Golden Retriever',
  'German Shepherd': 'German Shepherd',
  'Corgi': 'Corgi',
  'Poodle': 'Poodle',
});

export const CatBreedEnum = Object.freeze({
  'Oriental': 'Oriental',
  'Exotic': 'Exotic',
  'Persian': 'Persian',
  'Birman': 'Birman',
  'American Shorthair': 'American Shorthair',
  'Sphynx': 'Sphynx',
  'Siamese': 'Siamese',
  'Abyssinian': 'Abyssinian',
  'Maine Coon': 'Maine Coon',
  'Ragdoll': 'Ragdoll',
});

export const BreedEnum = Object.freeze({
  ...DogBreedEnum,
  ...CatBreedEnum,
})