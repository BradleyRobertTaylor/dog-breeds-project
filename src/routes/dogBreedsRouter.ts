import express from "express";
import dogBreedsController from "../controllers/dogBreedsController";
const dogBreedsRouter = express.Router();

dogBreedsRouter.use("/", dogBreedsController.getDogBreeds);

export default dogBreedsRouter;
