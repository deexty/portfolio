import React from 'react'
import Titulo from '../../components/Titulo'
import styles from './Inicio.module.scss'
import ExperienciasContainer from '../../components/ExperienciasContainer'

export default function Inicio() {
    return (
        <>
            <section className={styles.headeBanner} id='inicio'>
                <div>
                    <Titulo><h1>front end</h1></Titulo>
                    <p>developer</p>
                </div>
            </section>
            <section className={styles.sobreContainer}>
                <div className={styles.sobreContainer__container}>
                    <div>
                        <Titulo><h2>sobre mim</h2></Titulo>
                        <p>eu sou o <span>{"<eduardo>"}</span> desenvolvedor front-end</p>
                    </div>
                    <ExperienciasContainer></ExperienciasContainer>
                </div>
            </section>
        </>
    )
}
