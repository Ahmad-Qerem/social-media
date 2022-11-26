import React from 'react'
import styles from './styles.module.css'
import ListItems from './ListItems'
import Logo from './Logo'

const NavBar = () => {
  return (
    <div className={styles.MainWrapper}>
        <Logo/>
        <ListItems/>
    </div>
  )
}

export default NavBar