import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from './ProjectCard.module.css'
// import flip from '../../image/flip.svg'
import mundo from '../../image/mundo.svg'
import mundohover from '../../image/mundohover.svg'
import flip from '../../image/flip.svg'
import fliphover from '../../image/fliphover.svg'
import github from '../../image/github.svg'
import githubhover from '../../image/githubhover.svg'
import pokeApp from '../../image/pokeapp.gif'
import js from '../../image/js.png'
import react from '../../image/react.png'
import redux from '../../image/redux.png'
import node from '../../image/node.png'
import sequelize from '../../image/sequelize.png'
import postgresql from '../../image/postgresql.png'

export default function Project () {
    const [isFlipped, setIsFlipped] = useState(false)


    function handleClick(e) {
        e.preventDefault();
        setIsFlipped(!isFlipped);
      }
  
      return (
        <ReactCardFlip  isFlipped={isFlipped} flipDirection="horizontal">
            <div className={styles.frontCard}>
                <div className={styles.cardIconsDiv}>
                    <a href="">
                        <img src={mundo} className={styles.hoverOff} alt="" />
                        <img src={mundohover} className={styles.hoverOn} alt="" />
                    </a>
                    <a href="">
                        <img src={github} className={styles.hoverOff} alt="" />
                        <img src={githubhover} className={styles.hoverOn} alt="" />
                    </a>
                    <a className={styles.projectImgDiv} onClick={handleClick}> <p className={styles.info}>Info</p> 
                        <img src={flip} className={styles.hoverOff}  alt="" />
                        <img src={fliphover} className={styles.hoverOn} alt="" />
                    </a>
                </div>
                <div className={styles.descriptionFront}>
                    <h2>PokeApp</h2>
                    <img src={pokeApp} alt="" />
                </div>
            </div>


            <div className={styles.backCard}>
                <div className={styles.cardIconsDiv}>
                <a href="">
                        <img src={mundo} className={styles.hoverOff} alt="" />
                        <img src={mundohover} className={styles.hoverOn} alt="" />
                    </a>
                    <a href="">
                        <img src={github} className={styles.hoverOff} alt="" />
                        <img src={githubhover} className={styles.hoverOn} alt="" />
                    </a>
                    <a className={styles.projectImgDiv} onClick={handleClick}> <p className={styles.info}>Info</p> 
                        <img src={flip} className={styles.hoverOff}  alt="" />
                        <img src={fliphover} className={styles.hoverOn} alt="" />
                    </a>
                </div>
                <div className={styles.descriptionBack}>
                    <h2>PokeApp</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas assumenda 
                        laudantium, temporibus id inventore nisi dolore aut repellat dolores 
                        asperiores reprehenderit dolorem maiores vel magnam ad, ex, eius 
                        necessitatibus facere.</p>
                </div>
                <div>
                    <div className={styles.backIcons}>
                        <img src={js} alt="" className={styles.icons} />
                        <img src={react} className={styles.icons} alt="" />
                        <img src={redux} className={styles.icons} alt="" />
                        <img src={node} alt="" className={styles.icons} />
                        <img src={sequelize} className={styles.icons} alt="" />
                        <img src={postgresql} className={styles.icons} alt="" />
                    </div>
                </div>
            </div>
        </ReactCardFlip>
      )
    
  }

   {/* className={styles.projectCard} */}