import { skillModel } from "../models/skillModel.js";
import fs from "fs"

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
        const {titulo, link} = req.body;
        const file = req.file;

        try {
            const elementoCriado = await skillModel.create({titulo: titulo, link: link, imagem: file.filename})
            res.status(200).json({skill: elementoCriado, message: "elemento criado com sucesso"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async deletaSkill(req,res){
        try {
            const skill = await skillModel.findById(req.params.id);
            if (!skill) {
                return res.status(404).json({ message: "Skill não encontrada" });
            }
            
            fs.unlinkSync(`/var/api/uploads/${skill.imagem}`);

            const skillRemovida = await skillModel.findByIdAndDelete(skill._id)
            res.json({ message: "Imagem removida com sucesso" });
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default Skill