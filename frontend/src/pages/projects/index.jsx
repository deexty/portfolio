import { useEffect, useState } from "react";
import ItemsProjeto from "../../components/ItemsProjeto";
import { buscaProjetos, filtraProjetosSkill } from "../../services/projetos.js";
import { buscaSkills } from "../../services/skills.js";

export default function Projects() {
  const [projetos, setProjetos] = useState([]);
  const [skills, setSkills] = useState([]);

  const carregaProjetos = async () => {
    try {
      const projetosCarregadas = await buscaProjetos();
      setProjetos(projetosCarregadas);
    } catch (error) {
      // Lidar com erros
      console.error("Erro ao carregar as habilidades:", error);
    }
  };
  
  const carregaProjetosFiltradas = async (skill) => {
    try {
      const skillsCarregadas = await filtraProjetosSkill(skill);
      setProjetos(skillsCarregadas);
    } catch (error) {
      // Lidar com erros
      console.error("Erro ao carregar as habilidades:", error);
    }
  };

  useEffect(() => {
    carregaProjetos();
  }, []);

  const carregaSkills = async () => {
    try {
      const skillsCarregadas = await buscaSkills();
      setSkills(skillsCarregadas);
    } catch (error) {
      // Lidar com erros
      console.error("Erro ao carregar as habilidades:", error);
    }
  };

  useEffect(() => {
    carregaSkills();
  }, []);


  return (
    <>
      <section className="min-h-screen-calc px-10 sm:px-20 pb-20">
        <div className="flex items-center mb-6">
          <select
            className="block appearance-none bg-black py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer before:"
            onChange={(e) => {
              if(e.target.value){
                carregaProjetosFiltradas(e.target.value)
              }else{
                carregaProjetos()
              }
            }}
          >
            <option
              value=""
              className="selection:bg-red"
            >
              filtrar
            </option>
            {skills.map(skill => <option value={skill.titulo} key={skill.titulo}>{skill.titulo}</option>)}
          </select>
          <div className="inline-block bg-down_arrow bg-center bg-cover w-6 h-6"></div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projetos &&
            projetos.map((projeto, i) => (
              <ItemsProjeto
                projeto={projeto}
                key={projeto.titulo}
              ></ItemsProjeto>
            ))}
        </ul>
      </section>
    </>
  );
}
