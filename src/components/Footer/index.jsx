import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p>copyright © 2023 eduardo soares</p>
            <ul>
                <li>
                    <FaLinkedinIn></FaLinkedinIn>
                </li>
                <li>
                    <AiFillGithub></AiFillGithub>
                </li>
            </ul>
        </footer>
    )
}
