import ErroBase from "./ErrorBase.js";

class Erro404 extends ErroBase{
    constructor(){
        super('Pagina não encontrada', 404)
    }
}

export default Erro404