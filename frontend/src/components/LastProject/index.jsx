import { Link } from "react-router-dom";
import TituloSecundario from "../TituloSecundario";
import SkillsContainer from "../SkillsContainer";
import { useEffect, useState } from "react";
import { buscaProjetos } from "../../services/projetos.js";

export default function LastProject() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const carregaProjetos = async () => {
      try {
        const projetosCarregadas = await buscaProjetos();
        setProjetos(projetosCarregadas);
      } catch (error) {
        // Lidar com erros
        console.error("Erro ao carregar as habilidades:", error);
      }
    };

    carregaProjetos();
  }, []);

  return (
    <>
      {projetos[projetos.length - 1] && (
        <section
          data-aos="fade-up"
          className="flex flex-col items-center justify-center min-h-screen bg-lastProject-vetor bg-no-repeat bg-center px-5 md:px-10 mb-20 md:mb-0"
        >
          <div data-aos="fade-up">
            <TituloSecundario>Ultimo projeto</TituloSecundario>
          </div>
          <div
            className="flex flex-col lg:flex-row flex-nowrap items-center mt-10 w-full lg:w-7/12 "
            data-aos="fade-up"
          >
            <div className="w-full md:w-3/5 flex flex-col justify-between items-start order-2 lg:order-1 mb-10 lg:mb-0">
              <p className="text-2xl pl-4 border-l-2 border-white mb-6 capitalize">
                {projetos[projetos.length - 1].titulo}
              </p>
              <div>
                <p className="mb-4">
                  {projetos[projetos.length - 1].descricao.substring(0, 200) +
                    "..."}
                </p>
                <ul className="flex flex-wrap justify-end lg:justify-start mb-6">
                  {projetos[projetos.length - 1].skills.map((skill, i) => {
                    if (i <= 2) {
                      return (
                        <SkillsContainer
                          key={skill.titulo}
                          skill={skill}
                        ></SkillsContainer>
                      );
                    }
                  })}
                </ul>
              </div>
              <Link
                to={"/projetos"}
                className="border-white border-2 px-4 py-1 rounded-md"
              >
                ver mais
              </Link>
            </div>
            <img
              src={`${import.meta.env.VITE_API_URL}/imagem/${
                projetos[projetos.length - 1].imagem
              }`}
              className="inline-block w-full mb-6 md:mb-0 md:w-3/5 mt-10 sm:mt-0 bg-white lg:ml-10 order-1 md:order-2"
            ></img>
          </div>
        </section>
      )}
    </>
  );
}
