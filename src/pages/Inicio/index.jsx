/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from 'react'
import Titulo from '../../components/Titulo'
import styles from './Inicio.module.scss'
import ExperienciasContainer from '../../components/ExperienciasContainer'
import sobreMimSvg from '../../assets/sobreMim.svg'
import {ProjetosContext} from '../../context/ProjetosContext'
import NavLink from '../../components/NavLink'

export default function Inicio() {
    const {projetos} = useContext(ProjetosContext);
    const randomItems = projetos.sort(() => Math.random() - 0.5).slice(0, 3);
    return (
        <>
            <section className={styles.headeBanner} id='inicio'>
                <div>
                    <Titulo><h1>front end</h1></Titulo>
                    <p>developer</p>
                </div>
            </section>
            <section className={styles.sobreContainer}>
                <div className={styles.sobreContainer__img} style={{backgroundImage: `url(${sobreMimSvg})`}}></div>
                <div className={styles.sobreContainer__container}>
                    <div>
                        <Titulo><h2>sobre mim</h2></Titulo>
                        <p>eu sou o <span>{"<eduardo>"}</span> desenvolvedor front-end</p>
                    </div>
                    <ExperienciasContainer></ExperienciasContainer>
                </div>
            </section>
            <section className={styles.projetosContainer}>
                <Titulo><h2>Projetos recentes</h2></Titulo>
                <ul>
                    {randomItems.map((projeto,i) =>{
                        return <li>
                            <h3>{projeto.name}</h3>
                            <p>{projeto.description}</p>
                            <span>{projeto.language}</span>
                            <a href={projeto.html_url} target="_blank">acessar</a>
                        </li>;
                    })}
                </ul>
                <div>
                    <NavLink link={"/projetos"} titulo={"ver mais"}></NavLink>
                </div>
            </section>
        </>
    )
}
