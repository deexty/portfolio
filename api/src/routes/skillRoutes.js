import { Router } from "express";
import Skill from "../controllers/skillController.js";
import upload from "../config/multerConfig.js";

const skillRouter = Router()

skillRouter.get("/skills",Skill.buscaSkills)
            .post("/skills", upload.single("file"), Skill.cadastraSkill)
            .delete("/skills/:id", Skill.deletaSkill)

export default skillRouter