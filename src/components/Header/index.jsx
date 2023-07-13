import React from 'react'
import Logo from '../Logo'
import NavLink from '../NavLink'
import styles from './Header.module.scss'
import {RiMenuFoldLine} from 'react-icons/ri'
/* import {RxCross1} from 'react-icons/rx' */

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContainer__logo}>
                <Logo></Logo>
            </div>
            <nav>
                <NavLink link={"/"} titulo={"inicio"}></NavLink> 
                <NavLink link={"/"} titulo={"projetos"}></NavLink> 
                <NavLink link={"/"} titulo={"contatos"}></NavLink> 
            </nav>
            <button><RiMenuFoldLine></RiMenuFoldLine></button>
            {/* <aside className={styles.headerContainer__menu}>
                <div className={styles.headerContainer__menu__button}><RxCross1></RxCross1></div>
                    <div className={styles.headerContainer__menu__nav}>
                        <NavLink link={"/"} titulo={"inicio"}></NavLink> 
                        <NavLink link={"/"} titulo={"projetos"}></NavLink> 
                        <NavLink link={"/"} titulo={"contatos"}></NavLink> 
                    </div>
            </aside> */}
        </header>
    )
}
