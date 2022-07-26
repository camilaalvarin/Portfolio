import React from 'react'
import styles from './Navbar.module.css'
import BurgerButton from './BurgerButton'
import { HashLink as Link } from 'react-router-hash-link'
import { BiMenu } from "react-icons/bi";
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import enImg from '../../image/eng.png'
import esImg from '../../image/esp.png'
// const [t, i18n] = useTranslation("global")
// {t('intro.h1')}

const Navbar = () => {
  const [t, i18n] = useTranslation("global")

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
      <div className={styles.flexDiv}>
        <div className={`${styles.linksDiv} ${clicked ? styles.active : ''}`} >    
          <Link to='#about' className={styles.link} smooth>
            <p><span className={styles.navLinks}>&#60;</span>{t('navbar.firstLink')}<span className={styles.navLinks}>&#47;&#62;</span></p>
          </Link>
          <Link to='#projects' className={styles.link} smooth>
            <p><span className={styles.navLinks}>&#60;</span>{t('navbar.secondLink')}<span className={styles.navLinks}>&#47;&#62;</span></p>
          </Link>
          <Link to='#skills' className={styles.link} smooth>
            <p><span className={styles.navLinks}>&#60;</span>{t('navbar.thirdLink')}<span className={styles.navLinks}>&#47;&#62;</span></p>
          </Link>
          <Link to='#contact' className={styles.link} smooth>
            <p><span className={styles.navLinks}>&#60;</span>{t('navbar.fourthLink')}<span className={styles.navLinks}>&#47;&#62;</span></p>
          </Link>
        </div>
        <div className={styles.langDesktop}>
          <img src={enImg} className={styles.langIcon} onClick={() => i18n.changeLanguage('en')} />
          <img src={esImg} className={styles.langIcon} onClick={() => i18n.changeLanguage('es')} />
        </div>
      </div>
      <div className={styles.burger}>  
        <div className={styles.langMob}>
            <img src={enImg} className={styles.langIcon} onClick={() => i18n.changeLanguage('en')} />
            <img src={esImg} className={styles.langIcon} onClick={() => i18n.changeLanguage('es')} />
        </div> 
        <BurgerButton clicked={clicked} handleClick={handleClick} />
      </div>
    </div> 
  )
}

export default Navbar