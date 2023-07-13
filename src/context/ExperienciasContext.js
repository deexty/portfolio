const { createContext, useState, useContext } = require("react");

const ExperienciasContext = createContext();

export const ExperienciasProvider = ({children}) =>{
    const [paginaAtual, setPagina] = useState(0);
    return(
        <ExperienciasContext.Provider value={{paginaAtual,setPagina}}>{children}</ExperienciasContext.Provider>
    )
}

export const UseExperienciasContext = () =>{
    const {paginaAtual, setPagina} = useContext(ExperienciasContext);
    function alteraIndex(indexAtual) {
        if (paginaAtual !== indexAtual) {
            const elementoExperiencias = document.querySelector("#experienciasContainer")   
            if (indexAtual < paginaAtual) {
                elementoExperiencias.style.transition = ".5s";
                elementoExperiencias.style.transform = "translate(-100%, 0)"
                elementoExperiencias.style.filter = 'blur(3px)'
                setTimeout(()=>{
                    elementoExperiencias.style.transition = "none";
                    elementoExperiencias.style.transform = "translate(100%, 0)"
                },450)
                setTimeout(()=>{
                    elementoExperiencias.style.transition = ".5s";
                    elementoExperiencias.style.transform = "translate(0, 0)"
                    elementoExperiencias.style.filter = 'none'
                    setPagina(indexAtual)
                    
                },500)
            }else{
                const elementoExperiencias = document.querySelector("#experienciasContainer")   
                elementoExperiencias.style.transition = ".5s";
                elementoExperiencias.style.transform = "translate(100%, 0)"
                elementoExperiencias.style.filter = 'blur(3px)'
                setTimeout(()=>{
                    elementoExperiencias.style.transition = "none";
                    elementoExperiencias.style.transform = "translate(-100%, 0)"
                },450)
                setTimeout(()=>{
                    elementoExperiencias.style.transition = ".5s";
                    elementoExperiencias.style.transform = "translate(0, 0)"
                    elementoExperiencias.style.filter = 'none'
                    setPagina(indexAtual)
                },500)
            }
        }
    }

    return (
        [paginaAtual,alteraIndex]
    )
}