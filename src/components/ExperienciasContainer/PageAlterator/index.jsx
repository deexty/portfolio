import React from 'react'
import styles from './PageAlterator.module.scss'
import { UseExperienciasContext } from '../../../context/ExperienciasContext'

export default function PageAlterator({lista}) {
    const [paginaAtual,alteraIndex] = UseExperienciasContext();
    return (
        <>
            <ul className={styles.pageAlterator}>
                {lista.map((item,index) => <li key={index}><button style={index === paginaAtual ? {backgroundColor: "var(--vermelho)"} : {border: "1px solid var(--vermelho)"}} onClick={() => alteraIndex(index)}></button></li>)}
            </ul>
        </>
    )
}
