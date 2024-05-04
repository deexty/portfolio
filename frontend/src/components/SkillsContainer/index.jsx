export default function SkillsContainer({titulo, imagem}) {
  return (
    <li className="flex items-center group mr-3">
      <div className="w-8 h-8 bg-white"></div>
      {titulo && <p className="ml-2 hidden group-hover:inline-block">{titulo}</p>}
    </li>
  );
}
