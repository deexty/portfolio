import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProjetosAdmin from "./Projetos/index.jsx";
import SkillsAdmin from "./Skills/index.jsx";

export default function Admin({ usuarioLogado }) {
  const navigate = useNavigate();
  const [campoAtual, setCampoAtual] = useState("skills");

  useEffect(() => {
    if (usuarioLogado === false) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <section className="min-h-screen-calc flex-col flex items-center justify-center">
        <select
          name="campo"
          defaultValue={"skills"}
          onChange={(e) => setCampoAtual(e.target.value)}
          className="text-black"
        >
          <option value="skills">skills</option>
          <option value="projetos">projetos</option>
        </select>
        {campoAtual === "skills" && <SkillsAdmin></SkillsAdmin>}
        {campoAtual === "projetos" && <ProjetosAdmin></ProjetosAdmin>}
      </section>
    </>
  );
}
