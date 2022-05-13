import React from 'react'
import Particles from 'react-tsparticles'
// import ParticlesBackground from '../Particles/ParticlesBackground'
import ParticlesAbout from '../Particles/ParticlesAbout'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.fatherDiv} id='about'>
      <ParticlesAbout />
      {/* <ParticlesBackground /> */}
      <div className={styles.textDiv}>
        <p>
          I'm a full-stack developer located in Argentina. I love to create simple yet beautiful websites with great user experience.
        </p>
        <p>
          I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
        </p>
        <p>
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </p>
      </div>
    </div>
  )
}

export default About