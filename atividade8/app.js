import express from "express";
import AmostraRoutes from "./routes/AmostraRoutes.js";

const app = express();

app.use(express.json());

app.use("/amostra", AmostraRoutes);

app.get("/", (res) => {
res.send ("API de Amostras")
});

app.listen(3001, () => { 
    console.log("Servidor rodando na porta 3001");

});