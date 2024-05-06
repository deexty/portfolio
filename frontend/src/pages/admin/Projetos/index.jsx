import { useEffect, useState } from "react";
import {
  adicionaProjetos,
  buscaProjetos,
  deletaProjeto,
} from "../../../services/projetos.js";
import { buscaSkills } from "../../../services/skills.js";

export default function ProjetosAdmin() {
  //projetos
  const [projetos, setProjetos] = useState([]);
  const [exibirTelaProjetos, setExibirTelaProjetos] = useState(false);

  //skills
  const [skills, setSkills] = useState([]);
  const [skillsSelecionadas, setSkillsSelecionadas] = useState([]);

  const [message, setMessage] = useState("");

  //carrega api projetos
  const carregaProjetos = async () => {
    try {
      const projetosCarregadas = await buscaProjetos();
      setProjetos(projetosCarregadas);
    } catch (error) {
      // Lidar com erros
      console.error("Erro ao carregar as habilidades:", error);
    }
  };

  useEffect(() => {
    carregaProjetos();
  }, []);

  //carrega api skills
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
        onClick={() => setExibirTelaProjetos(true)}
      >
        adicionar projeto
      </button>
      {exibirTelaProjetos === true && (
        <form className="text-black absolute bg-white w-full mx-auto rounded p-5 overflow-y-auto">
          <button
            className="absolute right-3 top-2 bg-close bg-center bg-cover w-5 h-5"
            onClick={() => setExibirTelaProjetos(false)}
          ></button>
          <div className="flex flex-col mb-3">
            <label>titulo:</label>
            <input name="titulo" required={true}></input>
          </div>
          <div className="flex flex-col mb-3">
            <label>descricao:</label>
            <input name="descricao" required={true}></input>
          </div>
          <div className="flex flex-col mb-3">
            <label>imagem:</label>
            <input name="imagem" type="file" required={true}></input>
          </div>
          {skills && (
            <div className="mb-3">
              <div className="flex flex-col">
                <label>skills:</label>
                <select
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setSkillsSelecionadas(() => {
                        if (skillsSelecionadas.length > 0) {
                          return [...skillsSelecionadas, e.target.value];
                        } else {
                          return [e.target.value];
                        }
                      });
                    }
                  }}
                >
                  <option value={""}>selecionar skill</option>
                  {skills.map((skill) => (
                    <option key={skill.titulo} value={JSON.stringify(skill)}>
                      {skill.titulo}
                    </option>
                  ))}
                </select>
              </div>
              {skillsSelecionadas.length > 0 && (
                <div>
                  <p className="flex items-center">
                    skills selecionadas:{" "}
                    {skillsSelecionadas.map((skill) => {
                      const skillMudada = JSON.parse(skill);
                      return skillMudada.titulo + ", ";
                    })}{" "}
                    <button
                      className="ml-3 bg-close bg-center bg-cover w-5 h-5"
                      onClick={async (e) => {
                        e.preventDefault();

                        setSkillsSelecionadas([
                          ...skillsSelecionadas.slice(0, -1),
                        ]);
                      }}
                    ></button>
                  </p>
                </div>
              )}
            </div>
          )}
          <div className="flex flex-col mb-3">
            <label>link do deploy:</label>
            <input name="deploy" required={true}></input>
          </div>
          <div className="flex flex-col mb-3">
            <label>link do repositorio:</label>
            <input name="repositorio" required={true}></input>
          </div>

          <button
            onClick={async (e) => {
              e.preventDefault();

              const formulario = e.target.parentNode;
              const { titulo, descricao, imagem, deploy, repositorio } =
                formulario;
              const skillsAtual = [];
              const formData = new FormData();
              var linkRegex =
                /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

              skillsSelecionadas.forEach((skill) => {
                const skillConvertida = JSON.parse(skill);
                skillsAtual.push(`${skillConvertida._id}`);
              });

              formData.append("titulo", titulo.value);
              formData.append("descricao", descricao.value);
              formData.append("file", imagem.files[0]);
              formData.append("deploy", deploy.value);
              formData.append("repositorio", repositorio.value);
              formData.append("skills", JSON.stringify(skillsAtual));

              const showError = (message) => setMessage(message);

              const isValidLink = (value) => linkRegex.test(value);
              const isValidLength = (value) => value.length > 0;

              const validateField = (value, errorMessage) => {
                if (!isValidLength(value)) {
                  showError(errorMessage);
                  return false;
                }
                return true;
              };

              if (
                !validateField(
                  titulo.value,
                  "o campo 'titulo' é obrigatório"
                ) ||
                !validateField(
                  descricao.value,
                  "o campo 'descricao' é obrigatório"
                ) ||
                !imagem.files[0] ||
                !validateField(
                  deploy.value,
                  "o campo 'deploy' é obrigatório e deve ser um link"
                ) ||
                !isValidLink(deploy.value) ||
                !validateField(
                  repositorio.value,
                  "o campo 'repositorio' é obrigatório e deve ser um link"
                ) ||
                !isValidLink(repositorio.value) ||
                !validateField(
                  skillsAtual,
                  "o campo 'skills' deve ter pelo menos um elemento"
                )
              ) {
                return;
              } else {
                await adicionaProjetos(formData);
                carregaProjetos();
                setMessage("objeto cadastrado");
                setExibirTelaProjetos(false);
              }
            }}
            className="border-2 border-black px-3"
          >
            criar projeto
          </button>
          <p>{message}</p>
        </form>
      )}
      {projetos && (
        <ul className="w-full">
          {projetos.map((projeto, i) => (
            <li
              key={i}
              className="flex items-center border-2 border-white justify-between px-5 mb-3 rounded"
            >
              <p>{projeto.titulo}</p>
              <button
                className="ml-3"
                onClick={async () => {
                  await deletaProjeto(projeto._id);
                  carregaProjetos();
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
