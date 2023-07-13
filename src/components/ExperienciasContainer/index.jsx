import React from 'react'
import Titulo from '../Titulo'
import styles from './ExperienciasContainer.module.scss'
import PageAlterator from './PageAlterator'
import experiencias from '../../jsons/experiencias.json'
import { UseExperienciasContext } from '../../context/ExperienciasContext'

export default function ExperienciasContainer() {
    const [paginaAtual] = UseExperienciasContext();
    return (
        <div className={styles.experienciasContainer}>
                <div className={styles.experienciasContainer__container} id='experienciasContainer'>
                    <Titulo><h3>{experiencias[paginaAtual].titulo}</h3></Titulo>
                    <p>
                        {experiencias[paginaAtual].texto}
                    </p>
                </div>
                <PageAlterator lista={experiencias}></PageAlterator>
        </div>
    )
}
