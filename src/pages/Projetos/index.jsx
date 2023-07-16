import React, { useContext } from 'react'
import './Projetos.module.scss'
import { ProjetosContext } from '../../context/ProjetosContext';
import CardProjetos from '../../components/CardProjetos';
import Titulo from '../../components/Titulo';

export default function Projetos() {
    const {projetos} = useContext(ProjetosContext);
    return (
        <>
            <Titulo><h2 style={{textAlign: 'center', marginTop: '2rem'}}>projetos</h2></Titulo>
            <ul>
                {projetos.map(projeto => <CardProjetos projeto={projeto}></CardProjetos>)}
            </ul>
        </>
    )
}
