import { Request, Response } from "express";
import { fetchAllDogBreeds } from "../services/dogBreedsService";
import { flattenDogBreeds } from "../utils/flattenDogBreeds";

const getDogBreeds = async (_: Request, res: Response) => {
  const data = await fetchAllDogBreeds();
  if ("error" in data) {
    res.status(504).json({ error: data.error });
  } else {
    const parsedData = flattenDogBreeds(data.message);
    res.status(200).json({ data: parsedData });
  }
};

export default { getDogBreeds };
