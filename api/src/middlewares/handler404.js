import Erro404 from "../errors/Erro404.js";

function handler404(req,res,next) {
    const error = new Erro404()
    next(error)
}

export default handler404