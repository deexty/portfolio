import { Link } from "react-router-dom";
import TituloSecundario from "../TituloSecundario";
import SkillsContainer from "../SkillsContainer";

export default function LastProject() {
  return (
    <section data-aos="fade-up" className="flex flex-col items-center justify-center min-h-screen bg-lastProject-vetor bg-no-repeat bg-center px-10">
      <div data-aos="fade-up">
        <TituloSecundario>Ultimo projeto</TituloSecundario>
      </div>
      <div className="flex flex-col md:flex-row flex-nowrap items-center mt-10" data-aos="fade-up">
        <div className="w-full md:w-2/5 flex flex-col justify-between items-start h-64">
          <p className="text-2xl pl-4 border-l-2 border-white">nome</p>
          <div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquam lorem mauris, id lacinia nunc semper...
            </p>
            <ul>
              <SkillsContainer titulo={"node.js"}></SkillsContainer>
            </ul>
          </div>
          <Link to={"/projetos"} className="border-white border-2 px-4 py-1 rounded-md">ver mais</Link>
        </div>
        <div className="inline-block w-full md:w-3/5 h-48 mt-10 sm:mt-0 sm:h-72 bg-white md:ml-10"></div>
      </div>
    </section>
  );
}
