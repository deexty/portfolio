import { useEffect, useState } from "react";
import {
    buscaSkills,
    cadastraSkill,
    deletaSkill,
} from "../../../services/skills.js";

export default function SkillsAdmin() {
  const [skills, setSkills] = useState([]);
  const [exibirTelaSkills, setExibirTelaSkills] = useState(false);
  const [message, setMessage] = useState("")

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
    <section className="relative flex items-center justify-center flex-col w-1/3">
      <button
        className="bg-white text-black border-0 outline-0 my-6 w-full rounded hover:text-gray"
        onClick={() => setExibirTelaSkills(true)}
      >
        adicionar skills
      </button>
      {exibirTelaSkills && (
        <form className="text-black absolute bg-white w-full mx-auto rounded p-5 overflow-y-auto">
          <button
            className="absolute right-3 top-2 bg-close bg-center bg-cover w-5 h-5"
            onClick={(e) => {
              e.preventDefault;

              setExibirTelaSkills(false);
            }}
          ></button>

          <div className="flex flex-col">
            <label>titulo:</label>
            <input name="titulo" type="text" />
          </div>
          <div className="flex flex-col">
            <label>imagem:</label>
            <input name="imagem" type="file" />
          </div>
          <div className="flex flex-col">
            <label>link:</label>
            <input name="link" type="text" />
          </div>
          <button
            className="border-2 border-black px-3"
            onClick={async (e) => {
              e.preventDefault();

              const formulario = e.target.parentNode;
              const { titulo, imagem, link } = formulario;
              const formData = new FormData();
              var linkRegex =
                /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

              formData.append("titulo", titulo.value);
              formData.append("file", imagem.files[0]);
              formData.append("link", link.value);

              if (titulo.value.length > 0) {
                if (link.value.length > 0) {
                  if (linkRegex.test(link.value)) {
                    if (imagem.files[0]) {
                      await cadastraSkill(formData);
                      carregaSkills();
                      setExibirTelaSkills(false);
                    } else {
                      setMessage(
                        "é necessario um arquivo de imagem no campo 'imagem'"
                      );
                    }
                  } else {
                    setMessage("o campo 'link' deve ser um link");
                  }
                } else {
                  setMessage("o campo link é obrigatorio");
                }
              } else {
                setMessage("o campo titulo é obrigatorio");
              }
            }}
          >
            cadastrar skill
          </button>
          <p>{message}</p>
        </form>
      )}
      {skills && (
        <ul className="w-full">
          {skills.map((skill) => (
            <li
              key={skill.titulo}
              className="flex items-center border-2 border-white justify-between px-5 mb-3 rounded"
            >
              <p>{skill.titulo}</p>
              <button
                onClick={async () => {
                  await deletaSkill(skill._id);
                  carregaSkills();
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
