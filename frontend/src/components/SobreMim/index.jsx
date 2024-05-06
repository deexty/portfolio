import { Link } from "react-router-dom";
import me from "../../assets/img/me.png"
import TituloSecundario from "../TituloSecundario";
import SkillsContainer from "../SkillsContainer";
import { useEffect, useState } from "react";
import { buscaSkills } from "../../services/skills";

export default function SobreMim() {
  const [skills, setSkills] = useState()

  const topicos = [
    ["Desenvolvedor Full-Stack Apaixonado","Com anos de estudo e prática autodidata."],
    ["Habilidades em Tecnologias Avançadas","Experiência em linguagens de programação para front-end e back-end, e metodologias ágeis."],
    ["Colaboração e Comunicação","Valorizo o trabalho em equipe e a comunicação eficaz."],
    ["Adaptabilidade","Capacidade de se adaptar rapidamente a novos desafios."],
    ["Busca por Oportunidades","Desejo de contribuir com paixão e crescimento contínuo em tecnologia."],
    ["Entusiasmo","Pronto para se juntar a uma equipe dinâmica e inovadora e alinhar habilidades com as suas necessidades."],
  ]

  useEffect(() => {
      const carregaSkills = async () => {
        try {
          const skillsCarregadas = await buscaSkills();
          setSkills(skillsCarregadas);
        } catch (error) {
          // Lidar com erros
          console.error('Erro ao carregar as habilidades:', error);
        }
      };
  
      carregaSkills();
  },[])

    return(
        <section data-aos="fade-up" className="flex items-center flex-col md:flex-row min-h-svh justify-center relative bg-sobreMim-vetor bg-center bg-no-repeat px-10 mt-20 md:mt-10 ">
        <img className="w-full md:w-1/4 md:mr-6 mb-10 md:mb-0" data-aos="fade-up" data-aos-delay="50" src={me}></img>
        <div className="md:ml-10 w-4/5 md:w-2/5 text-center md:text-left" data-aos="fade-up" data-aos-delay="50">
          <TituloSecundario>Olá, Meu nome é Eduardo Soares</TituloSecundario>
          <ul className="mb-6 list-disc">
            {topicos.map((topico, i) => <li className="mb-3"><strong>{topico[0]}: </strong>{topico[1]}</li>)}
          </ul>
          <ul className="flex items-center mb-6 flex-wrap">
            <p className="font-bold mr-3">skills:</p>
            {skills && skills.map(skill => (
              <SkillsContainer key={skill.titulo} skill={skill}></SkillsContainer>
            ))}
          </ul>
          <div className="flex">
            <p className="font-bold mr-4">Fale comigo:</p>
            <ul className="flex items-center">
              <li>
                <Link to={""} className="w-7 h-7 bg-linkedin bg-center bg-cover mr-4 inline-block"></Link>
              </li>
              <li>
                <Link className="w-7 h-7 bg-github-icon bg-center bg-cover mr-4 inline-block"></Link>
              </li>
              <li>
                <Link to={"https://api.whatsapp.com/send?phone=+554388742099&text=Olá%20gostaria%20de%20fazer%20um%20orçamento"} className="w-7 h-7 bg-whatsapp-icon bg-center bg-cover mr-4 inline-block"></Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
}