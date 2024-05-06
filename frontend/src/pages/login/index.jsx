import { useNavigate } from "react-router-dom"

export default function Login({setUsuarioLogado}) {
    const navigate = useNavigate()

    return (
        <>
            <section className="min-h-screen-calc flex items-center justify-center">
                <form>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1">Usuario:</label>
                        <input name="usuario" className="text-black bg-white py-1 px-2 border-0 outline-0 rounded"></input>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1">Senha:</label>
                        <input type="password" name="senha" className="text-black bg-white py-1 px-2 border-0 outline-0 rounded"></input>
                    </div>
                    <button className="border-2 border-white w-full rounded py-1 hover:text-gray hover:border-gray" onClick={(e) =>{
                        const elementoPai = e.target.parentNode

                        e.preventDefault()

                        if(elementoPai.usuario.value === import.meta.env.VITE_USUARIO && elementoPai.senha.value === import.meta.env.VITE_SENHA){
                            setUsuarioLogado(true)
                            navigate("/admin")
                        }else{
                            alert("informações incorretas")
                        }

                    }}>login</button>
                </form>
            </section>
        </>
    )
}