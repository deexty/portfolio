import ErroBase from "./ErrorBase.js";

class ErroRequicicaoIncorreta extends ErroBase{
    constructor(){
        super('um ou mais dados fornecidos estão incorretos', 400)
    }
}

export default ErroRequicicaoIncorreta