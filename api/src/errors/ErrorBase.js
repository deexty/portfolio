class ErroBase extends Error{
    constructor(msg = "erro interno do servidor", status = 500){
        super()
        this.msg = msg;
        this.status = status;
    }

    enviaMensagem(res){
        res.status(this.status).json({message: this.msg})
    }
}

export default ErroBase