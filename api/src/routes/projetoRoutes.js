import { Router } from "express";
import upload from "../config/multerConfig.js";
import Projetos from "../controllers/projetoController.js";

const projetoRouter = Router()

projetoRouter.get("/projetos",Projetos.buscaProjetos)
            .get("/projetos/:id",Projetos.buscaProjetosPorId)        
            .get("/projetos/filtrar/:skill",Projetos.filtraProjetosPorSkill)        
            .post("/projetos", upload.single("file"), Projetos.cadastraProjetos)
            .delete("/projetos/:id", Projetos.deletaProjetos)

export default projetoRouter