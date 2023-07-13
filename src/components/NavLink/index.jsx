import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavLink.module.scss'

export default function NavLink({link,titulo}) {
  return (
    <Link className={styles.navLinkContainer} to={link}>{titulo}</Link>
  )
}
