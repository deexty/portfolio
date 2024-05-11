import { Link } from "react-router-dom"
import SkillsContainer from "../SkillsContainer"

export default function ItemsProjeto({projeto}) {
    const {titulo, imagem, descricao, skills, deploy, repositorio, _id} = projeto
    return (
        <li className="animate-fade">
            <p className="text-xl pl-6 mb-6 border-l-2 border-white capitalize">{titulo}</p>
            <img src={`${import.meta.env.VITE_API_URL}/imagem/${imagem}`}></img>
            <p className="my-6">{(descricao).substring(0,200) + "..."}</p>
            <div className="flex justify-between items-center">
                <Link to={`/projetos/${_id}`} className="px-5 mr-3 text-center border-2 border-white rounded py-1 hover:text-gray hover:border-gray">ver detalhes</Link>
                <ul className="flex">
                    {skills.map((element, i) => {
                        if(i <= 2){
                            return <SkillsContainer key={i} skill={element}></SkillsContainer>
                        }
                    })}
                </ul>
            </div>
        </li>
    )
}