/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styles from './CardProjetos.module.scss'

export default function CardProjetos({projeto}) {
    return (
        <li className={styles.cardContainer}>
            <h3>{projeto.name}</h3>
            <p>{projeto.description}</p>
            <span>{projeto.language}</span>
            <a href={projeto.html_url} target="_blank">acessar</a>
        </li>
    )
}
