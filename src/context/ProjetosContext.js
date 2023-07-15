import { createContext, useEffect, useState } from "react";

export const ProjetosContext = createContext();

export const ProjetosProvider = ({children}) =>{
    const [projetos , setProjetos] = useState([]);

    useEffect(() => {
        buscaApi();
    }, []);

    function buscaApi() {
        fetch("https://api.github.com/users/deexty/repos")
            .then(async res =>{
                const data = await res.json();
                setProjetos(data)
            })
    }

    return(
        <ProjetosContext.Provider value={{projetos}}>
            {children}
        </ProjetosContext.Provider>
    )
}
