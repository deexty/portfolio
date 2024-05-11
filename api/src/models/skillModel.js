import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema({
    titulo: {type: String, required: [true, "o campo ${PATH} é obrigatorio"]},
    imagem: {type: String},
    link: {
        type:String,
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

const skillModel = mongoose.model("skills", skillSchema)

export {skillModel, skillSchema}