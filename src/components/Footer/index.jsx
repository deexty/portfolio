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
                    <a href='https://www.linkedin.com/in/eduardo-soares-14ab94233/'><FaLinkedinIn></FaLinkedinIn></a>
                </li>
                <li>
                    <a href="https://github.com/deexty"><AiFillGithub></AiFillGithub></a>
                </li>
            </ul>
        </footer>
    )
}
