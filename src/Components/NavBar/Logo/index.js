import React from 'react'
import styles from './styles.module.css'
const Logo = () => {
  return (
    <a className={styles.Logo}>
          <img src='./images/URSOY.png' alt='Logo'/>
          <span className={styles.Text}>Queue Over Flow</span>
    </a>
  )
}

export default Logo