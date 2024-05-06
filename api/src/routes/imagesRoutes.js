import { Router } from "express";
import Imagem from "../controllers/imagemController.js";

const imageRouter = Router()

imageRouter.get("/imagem/:arquivo",Imagem.consomeImagem)
        
export default imageRouter