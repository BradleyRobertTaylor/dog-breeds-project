import express from "express";
import dogBreedsRouter from "./routes/dogBreedsRouter";
const app = express();

app.use("/breeds", dogBreedsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
