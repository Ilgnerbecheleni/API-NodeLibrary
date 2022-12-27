import express from "express";
import AutorController from "../Controllers/autoresController.js";


const router = express.Router();

router.get("/autores", AutorController.getAutores)
    .get("/autores/:id", AutorController.getAutoreId)
    .post("/autores", AutorController.postAutores)
    .put("/autores/:id", AutorController.putAutores)
    .delete("/autores/:id", AutorController.deleteAutor);

export default router;