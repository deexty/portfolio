import mongoose, { Schema, version } from "mongoose";
import { skillSchema } from "./skillModel.js";

const projetosSchema = new Schema({
    titulo: {type: String, required: [true, "o campo ${PATH} é obrigatorio"]},
    descricao: {type: String, required: [true, "o campo ${PATH} é obrigatorio"]},
    imagem: {type: String},
    skills: [skillSchema], // Array de referências
    deploy: {
        type: String,
        required: [true, "o campo ${PATH} é obrigatorio"],
        validate:{
            validator: (string) => {
                try {
                    new URL(string);
                    return true;
                } catch (err) {
                    return false;
                }
            },
            message: props => `${props.value} não é um link`            
        }
    },
    repositorio: {
        type: String,
        required: [true, "o campo ${PATH} é obrigatorio"],
        validate:{
            validator: (string) => {
                try {
                    new URL(string);
                    return true;
                } catch (err) {
                    return false;
                }
            },
            message: props => `${props.value} não é um link`            
        }
    }
}, {versionKey: false})

const projetosModel = mongoose.model("projetos", projetosSchema)

export default projetosModel