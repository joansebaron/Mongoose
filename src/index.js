import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import router from "./routes/categorias.routes.js";
import Categoria from "./models/Categorias.js";
const app = express();

dotenv.config();

app.use("/categoria",router);


const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
