import { Breeds } from "../services/breedsService";

export const flattenDogBreeds = (breeds: Breeds) => {
  const result: string[] = [];

  for (const breed in breeds) {
    if (breeds[breed].length) {
      breeds[breed].forEach((subBreed) => result.push(`${subBreed} ${breed}`));
    } else {
      result.push(breed);
    }
  }

  return result;
};
