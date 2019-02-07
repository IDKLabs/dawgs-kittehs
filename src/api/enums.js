export const PetTypeEnum = Object.freeze({
  DOG: 'DOG',
  CAT: 'CAT',
});

export const DogBreedEnum = Object.freeze({
  'Labrador': 'Labrador Retriever',
  'Great Dane': 'Great Dane',
  'Bernese Mountain Dog': 'Bernese Mountain Dog',
  'Siberian Husky': 'Siberian Husky',
  'Rottweiler': 'Rottweiler',
  'Australian Shepherd': 'Australian Shepherd',
  'Dalmation': 'Dalmatian',
  'Bulldog': 'French Bulldog',
  'Boston Terrier': 'Boston Terrier',
  'Yorkshire Terrier': 'Yorkshire Terrier',
  'Cavalier King Charles Spaniel': 'Cavalier King Charles Spaniel',
  'Beagle': 'Beagle',
  'Doberman Pinscher': 'Doberman Pinscher',
  'Boxer': 'Boxer',
  'Brittany': 'Brittany',
  'Pointer': 'German Shorthaired Pointer',
  'Golden Retriever': 'Golden Retriever',
  'German Shepherd': 'German Shepherd',
  'Corgi': 'Pembroke Welsh Corgi',
  'Pug': 'Pug',
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