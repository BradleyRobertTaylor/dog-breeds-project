import express from "express";
import breedsController from "../controllers/breedsController";
const breedsRouter = express.Router();

breedsRouter.use("/", breedsController.getBreeds);

export default breedsRouter;
