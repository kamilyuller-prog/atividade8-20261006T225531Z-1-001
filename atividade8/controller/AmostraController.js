import { Amostra } from "../model/Amostra.js";
import {cadastrar,listar,buscarPorIndice} from "../repository/amostraRepository.js";

export function cadastrarAmostra(req, res) {
    const { codigo, material, origem, resultado } = req.body;

    // Pegar o JSON da requisição e salvar em variáveis
    const amostra = new Amostra(codigo, material, origem, resultado);

    cadastrar(amostra);

    res.status(201).json(amostra);
}

export function listarAmostras(req, res) {
    const amostras = listar();

    res.status(200).json(amostras);
}

export function buscarAmostraPorIndice(req, res) {
    const indice = Number(req.params.indice);

    const amostra = buscarPorIndice(indice);

    if (!amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada"
        });
    }

    res.status(200).json(amostra);
}

export function excluirAmostra(req, res) {
    const indice = Number(req.params.indice);

    const amostra = buscarPorIndice(indice);

    if (!amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada"
        });
    }

    excluir(indice);

    res.status(200).json({
        mensagem: "Amostra excluída com sucesso"
    });
}