import { Link } from "react-router-dom";
import me from "../../assets/img/me.png";
import TituloSecundario from "../TituloSecundario";
import SkillsContainer from "../SkillsContainer";
import { useEffect, useState } from "react";
import { buscaSkills } from "../../services/skills";

export default function SobreMim() {
  const [skills, setSkills] = useState();

  const topicos = [
    ["Desenvolvedor Full-Stack", "Com anos de estudo e prática autodidata."],
    [
      "Habilidades em Tecnologias Avançadas",
      "Experiência em linguagens de programação para front-end e back-end, e metodologias ágeis.",
    ],
    [
      "Colaboração e Comunicação",
      "Valorizo o trabalho em equipe e a comunicação eficaz.",
    ],
    [
      "Adaptabilidade",
      "Capacidade de se adaptar rapidamente a novos desafios.",
    ],
  ];

  useEffect(() => {
    const carregaSkills = async () => {
      try {
        const skillsCarregadas = await buscaSkills();
        setSkills(skillsCarregadas);
      } catch (error) {
        // Lidar com erros
        console.error("Erro ao carregar as habilidades:", error);
      }
    };

    carregaSkills();
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="flex items-center flex-col min-h-screen justify-center relative bg-sobreMim-vetor bg-center bg-no-repeat px-10 my-32 lg:my-0 "
    >
      <div data-aos="fade-up" className="flex flex-col lg:flex-row justify-center items-center sm:px-24 lg:px-0">
        <img
          className="w-full lg:w-1/4 mb-10 mr-0 lg:mr-6 lg:mb-0 rounded-full max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="50"
          src={me}
          alt="garoto jovem, cabelo curto e escuro, e pelos faciais em estilo cavanhaque"
        ></img>
        <div
          className="md:ml-10 text-center md:text-left max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <TituloSecundario>Olá, Meu nome é Eduardo Soares</TituloSecundario>
          <ul className="mb-6 list-disc px-7 sm:px-0">
            {topicos.map((topico, i) => (
              <li className="mb-3">
                <strong>{topico[0]}: </strong>
                {topico[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul data-aos="fade-up" className="flex items-center justify-center mb-6 flex-wrap mt-4">
        <p className="font-bold mr-3">Skills:</p>
        {skills &&
          skills.map((skill) => (
            <SkillsContainer key={skill.titulo} skill={skill}></SkillsContainer>
          ))}
      </ul>
      <div data-aos="fade-up" className="flex flex-col items-center text-center">
        <div className="flex">
          <p className="font-bold mr-4">Fale comigo:</p>
          <ul className="flex items-center">
            <li>
              <Link
                to={"https://linkedin.com/in/eduardo-soares-14ab94233"}
                className="w-7 h-7 bg-linkedin bg-center bg-cover mr-4 inline-block hover:scale-125"
              ></Link>
            </li>
            <li>
              <Link to={"https://github.com/deexty"} className="w-7 h-7 bg-github-icon bg-center bg-cover mr-4 inline-block hover:scale-125"></Link>
            </li>
            <li>
              <Link
                to={
                  "https://api.whatsapp.com/send?phone=+554388742099&text=Olá%20gostaria%20de%20fazer%20um%20orçamento"
                }
                className="w-7 h-7 bg-whatsapp-icon bg-center bg-cover mr-4 inline-block hover:scale-125"
              ></Link>
            </li>
          </ul>
        </div>
        <p className="text-xs italic mt-2 opacity-75">
          Desenvolvimento profissional e educacional presentes no linkedin.
        </p>
      </div>
    </section>
  );
}
