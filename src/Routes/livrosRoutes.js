import express from "express";
import LIvroController from "../Controllers/livrosController.js";


const router = express.Router();

router.get("/livros", LIvroController.getLivros)
    .get("/livros/busca", LIvroController.GetLivroEditora)  // deve ser antes de buscar por ID
    .get("/livros/:id", LIvroController.getLivroId)
    .post("/livros", LIvroController.postLivro)
    .put("/livros/:id", LIvroController.putLivro)
    .delete("/livros/:id", LIvroController.deleteLivro);

export default router;