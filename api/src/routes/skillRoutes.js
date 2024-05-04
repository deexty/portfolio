import { Router } from "express";
import Skill from "../controllers/skillController.js";

const skillRouter = Router()

skillRouter.get("/skills", Skill.buscaSkills)
            .post("/skills", Skill.cadastraSkill)

export default skillRouter