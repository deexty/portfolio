import { Link } from "react-router-dom";
import me from "../../assets/img/me.png"
import TituloSecundario from "../TituloSecundario";
import SkillsContainer from "../SkillsContainer";

export default function SobreMim() {
    return(
        <section data-aos="fade-up" className="flex items-center flex-col md:flex-row min-h-svh justify-center relative bg-sobreMim-vetor bg-center bg-no-repeat">
        <img className="w-64 mb-6 md:mb-0" data-aos="fade-up" data-aos-delay="50" src={me}></img>
        <div className="md:ml-10 w-4/5 md:w-2/5 text-center md:text-left" data-aos="fade-up" data-aos-delay="50">
          <TituloSecundario>Olá, Meu nome é Eduardo Soares</TituloSecundario>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam lorem mauris, id lacinia nunc semper eu. Etiam gravida ipsum nunc, at ultrices nisl gravida non. </p>
          <ul className="flex items-center mb-6">
            <p className="font-bold mr-3">skills:</p>
            <SkillsContainer titulo="node.js"></SkillsContainer>
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