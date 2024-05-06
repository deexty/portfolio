import ErroBase from "./ErrorBase.js";

class ErroValidacao extends ErroBase{
    constructor(erro){
        const mensagemErro = Object.values(erro.errors).map(erro => erro.message).join(";")
        super(mensagemErro, 400)
    }
}

export default ErroValidacao