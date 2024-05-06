import {mongoose} from "mongoose"
import ErroRequicicaoIncorreta from "../errors/ErroRequicicaoIncorreta.js"
import ErroBase from "../errors/ErrorBase.js";
import ErroValidacao from "../errors/ErroValidacao.js";
import Erro404 from "../errors/Erro404.js";

function handlerErros(error,req,res,next) {
    if(error instanceof mongoose.Error.CastError){
        new ErroRequicicaoIncorreta().enviaMensagem(res);
    }else if(error instanceof mongoose.Error.ValidationError){
        new ErroValidacao(error).enviaMensagem(res)
    }else if(error instanceof Erro404){
        new Erro404().enviaMensagem(res)
    }else{
        new ErroBase().enviaMensagem(res)
    }
}

export default handlerErros