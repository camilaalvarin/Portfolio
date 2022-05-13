import React from 'react'
import styles from './Navbar.module.css'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className={styles.navbarDiv}>
      <div className={styles.nameDiv}>
        <Link to='#intro'>
          <p>CamilaAlvarin</p>
        </Link>
      </div>
      <div className={styles.linksDiv}>
        <Link to='#about' className={styles.link} smooth>
          <p>About</p>
        </Link>
        <Link to='#projects' className={styles.link} smooth>
          <p>Projects</p>
        </Link>
        <Link to='#skills' className={styles.link} smooth>
          <p>Skills</p>
        </Link>
        <Link to='#contact' className={styles.link} smooth>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

{/* <div className={styles.linksDiv}>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div> */}