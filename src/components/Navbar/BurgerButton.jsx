import React from 'react'
import styles from './BurgerButton.module.css'

const BurgerButton = (props) => { 
  return (
    <div onClick={props.handleClick} 
    className={`${styles.icon} ${styles.navIcon5} ${props.clicked ? styles.open : ''}`}> 
        <span></span>
        <span></span>
        <span></span>
  </div>
  )
}

export default BurgerButton