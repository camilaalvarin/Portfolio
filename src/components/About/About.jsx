import React from 'react'
import ParticlesAbout from '../Particles/ParticlesAbout'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.fatherDiv} id='about'>
      <ParticlesAbout />
      {/* <h1 className={styles.about}>ABOUT</h1>  */}
      <div className={styles.textDiv}>
        <p>
          Mi nombre es Camila, soy una desarrolladora Full-Stack creativa e ingeniosa de Argentina.
        </p>
        <p>
          Mis fortalezas incluyen la capacidad de trabajar de manera efectiva como parte de un equipo y brindar apoyo a 
          otros compañeros. <br />
          Destaco mi personalidad positiva y pro activa y el hecho de que aprendo rápido y siempre estoy buscando mejorar.

        </p>
        <p>
          Actualmente, estoy en búsqueda de mi primer trabajo IT para continuar creciendo tanto a nivel profesional 
          como personal.
        </p>
      </div>
    </div>
  )
}

export default About