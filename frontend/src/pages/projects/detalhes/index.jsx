import { Link, useParams } from "react-router-dom";
import SkillsContainer from "../../../components/SkillsContainer";
import { useEffect, useState } from "react";
import { buscaProjetoId } from "../../../services/projetos";
import Page404 from "../../404";

export default function DetalhesProjeto() {
    const {id} = useParams();
    const [projeto, setProjeto] = useState(null);

    useEffect(() => {
      const carregaProjeto = async () => {
        try {
          const projetoCarregadas = await buscaProjetoId(id);
          setProjeto(projetoCarregadas);
        } catch (error) {
          // Lidar com erros
          console.error("Erro ao carregar as habilidades:", error);
        }
      };
  
      carregaProjeto();
    }, []);
  
    return(
        <>
            {projeto ?
                <section className="min-h-screen-calc flex flex-col md:flex-row items-center px-10 md:px-20 py-20 animate-fade">
                <div className="md:w-1/2 order-2 md:order-1">
                    <h1 className="text-2xl font-bold text-center mb-4 capitalize">{projeto.titulo}</h1>
                    <p className="mb-4">{projeto.descricao}</p>
                    <p className="font-bold mb-2">
                        Skills utilizadas:
                    </p>
                    <ul className="flex">
                        {(projeto.skills).map(skill => <SkillsContainer key={skill.titulo} skill={skill}></SkillsContainer>)}
                    </ul>
                    <ul className="flex justify-center mt-6 underline">
                        <li className="flex items-center mr-6">
                            <Link to={projeto.deploy}>acessar aplicação</Link>
                            <div className="inline-block bg-right_arrow bg-center bg-cover w-6 h-6"></div>
                        </li>
                        <li className="flex items-center">
                            <Link to={projeto.repositorio}>acessar repositorio</Link>
                            <div className="inline-block bg-right_arrow bg-center bg-cover w-6 h-6"></div>
                        </li>
                        
                    </ul>
                </div>
                <img className="mb-10 md:mb-0 md:w-1/2 md:ml-10 md:order-2" src={`${import.meta.env.VITE_API_URL}/imagem/${projeto.imagem}`}></img>
                </section>

                : <Page404></Page404>
            }
        </>
    )
}