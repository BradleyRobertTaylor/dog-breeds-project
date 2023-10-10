import express from "express";
import breedsRouter from "./routes/breedsRouter";
const app = express();

app.use("/breeds", breedsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
