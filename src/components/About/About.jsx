import React from 'react'
import ParticlesAbout from '../Particles/ParticlesAbout'
import styles from './About.module.css'
import { useTranslation } from "react-i18next";
// {t('intro.h1')}

const About = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <div className={styles.fatherDiv} id='about'>
      <ParticlesAbout />
      <div className={styles.textDiv}>
        <p>{t('about.firstP')}</p>
        <p>
          {t('about.secondP')} 
          {t('about.seventhP')}
         {t('about.thirdP')}
         </p>
        <p>
          {t('about.fourthP')}
          {t('about.seventhP')}
         {t('about.fifthP')}
         </p>
        <p>{t('about.sixthP')}</p>
      </div>
    </div>
  )
}

export default About