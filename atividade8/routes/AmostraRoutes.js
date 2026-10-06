import express from "express";
import { cadastrarAmostra, listarAmostras, buscarAmostraPorIndice, excluirAmostra } from "../controller/AmostraController.js";

const router = express.Router();

router.post("/amostras", cadastrarAmostra);
router.get("/amostras", listarAmostras);
router.get("/amostras/:indice", buscarAmostraPorIndice);
router.delete("/amostras/:indice", excluirAmostra);

export default router;



