import { Link } from "react-router-dom"
import projeto from "../../assets/img/projeto_teste.png"
import SkillsContainer from "../SkillsContainer"

export default function ItemsProjeto({ordem}) {
    return (
        <li data-aos="fade-up">
            <p className="text-xl pl-6 mb-6 border-l-2 border-white">nome</p>
            <img src={projeto}></img>
            <p className="my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam lorem mauris, id lacinia nunc semper eu. Etiam gravida ipsum nunc, at ultrices nisl gravida non... </p>
            <div className="flex justify-between">
                <Link to={"/projetos/1"} className="w-full mr-3 text-center border-2 border-white rounded py-1 hover:text-gray hover:border-gray">ver detalhes</Link>
                <ul className="flex">
                    <SkillsContainer></SkillsContainer>
                    <SkillsContainer></SkillsContainer>
                    <SkillsContainer></SkillsContainer>
                </ul>
            </div>
        </li>
    )
}