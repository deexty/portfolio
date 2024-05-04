import { skillModel } from "../models/skillModel.js";

class Skill{
    static async buscaSkills(req,res){
        try {
            const skillsBuscadas = await skillModel.find({})
            res.status(200).json(skillsBuscadas)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async cadastraSkill(req,res){
        const {titulo, link} = req.body
        console.log(titulo,link);
        try {
            const elementoCriado = await skillModel.create({titulo: titulo, link: link})
            res.status(200).json({skill: elementoCriado, message: "elemento criado com sucesso"})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default Skill