import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from './ProjectCard.module.css'

import mundo from '../../image/mundo.svg'
import mundohover from '../../image/mundohover.svg'
import flip from '../../image/flip.svg'
import fliphover from '../../image/fliphover.svg'
import github from '../../image/github.svg'
import githubhover from '../../image/githubhover.svg'

import task from '../../image/task.png'

import javascript from "../../image/javascript.svg";
import next from "../../image/next2.svg";
import firebase from "../../image/firebase.svg";

import { useTranslation } from "react-i18next";

export default function Pokedex () {

    const [t, i18n] = useTranslation("global")

    const icons = [javascript, next, firebase]
  
    
    // const { img, web, title, icons, alt, gitHub } = data
    const [isFlipped, setIsFlipped] = useState(false)


    function handleClick(e) {
        e.preventDefault();
        setIsFlipped(!isFlipped);
      }

   
  
      return (
        <ReactCardFlip  isFlipped={isFlipped} flipDirection="horizontal">
            <div className={styles.frontCard}>
                <div className={styles.cardIconsDiv}>
                    <a href={"https://task-test-sigma.vercel.app/"} target='_blank'>
                        <img src={mundo} className={styles.hoverOff} alt="sitio web" />
                        <img src={mundohover} className={styles.hoverOn} alt="sitio web" />
                    </a>
                    <a href={"https://github.com/camilaalvarin/task-test"} target='_blank'>
                        <img src={github} className={styles.hoverOff} alt="github" />
                        <img src={githubhover} className={styles.hoverOn} alt="github" />
                    </a>
                    <a className={styles.projectImgDiv} onClick={handleClick}> 
                        <p className={styles.info}>Info</p> 
                        <img src={flip} className={styles.hoverOff}  alt="info" />
                        <img src={fliphover} className={styles.hoverOn} alt="info" />
                    </a>
                </div>
                <div className={styles.descriptionFront}>
                    <h2>Task Manager</h2>
                    <img src={task} alt="Task Manager" />
                </div>
            </div>


            <div className={styles.backCard}>
                <div className={styles.cardIconsDiv}>
                <a href={"https://task-test-sigma.vercel.app/"} target='_blank'>
                        <img src={mundo} className={styles.hoverOff} alt="sitio web" />
                        <img src={mundohover} className={styles.hoverOn} alt="sitio web" />
                    </a>
                    <a href={"https://github.com/camilaalvarin/task-test"} target='_blank'>
                        <img src={github} className={styles.hoverOff} alt="github" />
                        <img src={githubhover} className={styles.hoverOn} alt="github" />
                    </a>
                    <a className={styles.projectImgDiv} onClick={handleClick}> <p className={styles.info}>Info</p> 
                        <img src={flip} className={styles.hoverOff}  alt="info" />
                        <img src={fliphover} className={styles.hoverOn} alt="info" />
                    </a>
                </div>
                <div className={styles.descriptionBack}>
                    <h2>Task Manager</h2>
                    <div className={styles.scrollbarPDiv}>
                        <p>{t('task.funcionality')}</p>
                        <p className={styles.pRight}>
                            <b>{t('task.firstDescription')}</b>
                            <br /> 
                            {t('task.secondDescription')} 
                            <br /> 
                            {t('task.thirdDescription')}
                            <br />
                            {t('task.fourthDescription')}
                            <br />
                            {t('task.fifthDescription')}
                            <br />
                        </p> 
                        
                    </div>
                </div>
                <div title={'javascript, next, firebase'}>
                    {
                        icons?.map((icon) => {
                            return (
                                <img src={icon} alt="" className={styles.icons} />
                            )
                        })
                    }
                </div>
            </div>
        </ReactCardFlip>
      )    
}

    

