import { Request, Response } from "express";
import { getAllBreeds } from "../services/breedsService";
import { flattenDogBreeds } from "../utils/flattenDogBreeds";

const getBreeds = async (_: Request, res: Response) => {
  const data = await getAllBreeds();
  if ("error" in data) {
    res.status(504).json({ error: data.error });
  } else {
    const parsedData = flattenDogBreeds(data.message);
    res.status(200).json({ data: parsedData });
  }
};

export default { getBreeds };
