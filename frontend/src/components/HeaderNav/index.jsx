import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  return (
    <header className="flex justify-center py-3">
      {[
        ["inicio", "/"],
        ["projetos", "/projetos"],
      ].map(([titulo, url]) => (
        <NavLink
          to={url}
          key={titulo}
          className={({ isActive }) =>
            `py-0.5 mr-4 hover:opacity-100 transition duration-200 last:m-0 
            ${!isActive ? "opacity-40" : null}`
          }
        >
          {titulo}
        </NavLink>
      ))}
    </header>
  );
}
