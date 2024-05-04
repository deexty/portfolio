import { Link } from "react-router-dom";
import SkillsContainer from "../../../components/SkillsContainer";
import projeto from "../../../assets/img/projeto_teste.png"

export default function DetalhesProjeto() {
    return(
        <>
            <section className="min-h-screen-calc flex flex-col md:flex-row items-center px-10 md:px-20 py-20">
                <div data-aos="fade-up" className="md:w-1/2 order-2 md:order-1">
                    <h1 className="text-2xl font-bold text-center mb-4 capitalize">nome</h1>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam lorem mauris, id lacinia nunc semper eu. Etiam gravida ipsum nunc, at ultrices nisl gravida non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam lorem mauris, id lacinia nunc semper eu. Etiam gravida ipsum nunc, at ultrices nisl gravida non... </p>
                    <p className="font-bold mb-2">
                        Skills utilizadas:
                    </p>
                    <ul className="flex">
                        <SkillsContainer titulo={"node"}></SkillsContainer>
                    </ul>
                    <ul className="flex justify-center mt-6 underline">
                        <li className="flex items-center mr-6">
                            <Link>acessar aplicação</Link>
                            <div className="inline-block bg-right_arrow bg-center bg-cover w-6 h-6"></div>
                        </li>
                        <li className="flex items-center">
                            <Link>acessar repositorio</Link>
                            <div className="inline-block bg-right_arrow bg-center bg-cover w-6 h-6"></div>
                        </li>
                        
                    </ul>
                </div>
                <img data-aos="fade-up" className="mb-10 md:mb-0 md:w-1/2 md:ml-10 md:order-2" src={projeto}>
                    
                </img>
            </section>
        </>
    )
}