import React from 'react'
import styles from './Navbar.module.css'
import BurgerButton from './BurgerButton'
import { HashLink as Link } from 'react-router-hash-link'
import { BiMenu } from "react-icons/bi";
import { useState } from 'react';


const Navbar = () => {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div className={styles.navbarDiv}>
      <div className={styles.nameDiv}>
        <Link to='#intro'>
          <p><span className={styles.nameLink}>&#60;</span>Camila<span className={styles.surname}>Alvarin</span><span className={styles.nameLink}>&#47;&#62;</span></p>
        </Link>
      </div>
      <div className={`${styles.linksDiv} ${clicked ? styles.active : ''}`} >    
        <Link to='#about' className={styles.link} smooth>
          <p><span className={styles.navLinks}>&#60;</span>Sobre mi<span className={styles.navLinks}>&#47;&#62;</span></p>
        </Link>
        <Link to='#projects' className={styles.link} smooth>
          <p><span className={styles.navLinks}>&#60;</span>Projectos<span className={styles.navLinks}>&#47;&#62;</span></p>
        </Link>
        <Link to='#skills' className={styles.link} smooth>
          <p><span className={styles.navLinks}>&#60;</span>Habilidades<span className={styles.navLinks}>&#47;&#62;</span></p>
        </Link>
        <Link to='#contact' className={styles.link} smooth>
          <p><span className={styles.navLinks}>&#60;</span>Contacto<span className={styles.navLinks}>&#47;&#62;</span></p>
        </Link>
      </div>
      <div className={styles.burger}>   
        <BurgerButton clicked={clicked} handleClick={handleClick} />
      </div>
    </div> 
  )
}

export default Navbar