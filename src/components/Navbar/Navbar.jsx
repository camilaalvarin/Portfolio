import React from 'react'
import styles from './Navbar.module.css'
import { HashLink as Link } from 'react-router-hash-link'
import { BiMenu } from "react-icons/bi";


const Navbar = () => {
  return (
    <div className={styles.navbarDiv}>
      <div className={styles.nameDiv}>
        <Link to='#intro'>
          <p><span className={styles.nameLink}>&#60;</span>Camila<span className={styles.surname}>Alvarin</span><span className={styles.nameLink}>&#47;&#62;</span></p>
        </Link>
      </div>
      <div className={styles.linksDiv}>
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
    </div>
  )
}

export default Navbar