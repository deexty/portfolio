import fs from "fs"
import projetosModel from "../models/projetosModel.js";
import { skillModel } from "../models/skillModel.js";

class Projetos{
    static async buscaProjetos(req,res, next){
        try {
            const objetosBuscados = await projetosModel.find({}).populate("skills")
            res.status(200).json(objetosBuscados)
        } catch (error) {
            next(error)
        }
    }

    static async filtraProjetosPorSkill(req, res, next) {
        try {
            const skillBuscada = req.params.skill;
            const objetosBuscados = await projetosModel.find({
                'skills': { $elemMatch: { 'titulo': skillBuscada } }
            }).populate('skills');
            res.status(200).json(objetosBuscados);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
    static async buscaProjetosPorId(req,res, next){
        try {
            const objetoBuscado = await projetosModel.findById(req.params.id).populate("skills")
            res.status(200).json(objetoBuscado)
        } catch (error) {
            next(error)
        }
    }

    static async cadastraProjetos(req,res, next){
        const file = req.file;
        const {skills} = req.body;
        let skillsBuscadas = [];

        try {
            if(file){
                if(!skills){
                    res.status(400).json({message: "é necessario uma lista de skills para cadastrar um projeto"})
                }else{
                    if(JSON.parse(skills).length > 0){
                        for (let i = 0; i < (JSON.parse(skills)).length; i++) {
                            const skillBuscada = await skillModel.findById(JSON.parse(skills)[i])
                            skillsBuscadas.push(skillBuscada)
                        }
            
                        const elementoCriado = await projetosModel.create({...req.body, imagem: file.filename, skills: skillsBuscadas})
                        res.status(200).json({projeto: elementoCriado, message: "elemento criado com sucesso"})
                    }else{
                        res.status(400).json({message: "é necessario pelo meno um id de skill na lista para cadastrar um projeto"})
                    }
                }
            }else{
                res.status(400).json({message: "é necessario um arquivo de imagem para cadastrar um projeto"})
            }
        } catch (error) {
            next(error)
        }
    }

    static async deletaProjetos(req,res, next){
        try {
            const projeto = await projetosModel.findById(req.params.id);
            if (!projeto) {
                return res.status(404).json({ message: "Projeto não encontrado" });
            }
            fs.unlinkSync(`/var/api/uploads/${projeto.imagem}`);

            const projetoDeletado = await projetosModel.findByIdAndDelete(projeto._id);
            res.json({ message: "Imagem removida com sucesso" });
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default Projetos