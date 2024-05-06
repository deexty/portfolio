import { Link } from "react-router-dom";

export default function SkillsContainer({skill}) {
  const {titulo, link, imagem} = skill;

  return (
    <li className="flex items-center group mr-3">
      <Link to={link} className="flex items-center group mr-3 my-2">
        <img src={`${import.meta.env.VITE_API_URL}/imagem/${imagem}`} className="w-8 h-8 cursor-pointer"></img>
        {titulo && <p className="ml-2 hidden group-hover:inline-block">{titulo}</p>}
      </Link>
    </li>
  );
}
