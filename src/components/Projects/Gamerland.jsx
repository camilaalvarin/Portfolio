import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from './ProjectCard.module.css'

import mundo from '../../image/mundo.svg'
import mundohover from '../../image/mundohover.svg'
import flip from '../../image/flip.svg'
import fliphover from '../../image/fliphover.svg'
import github from '../../image/github.svg'
import githubhover from '../../image/githubhover.svg'

import Gamerland from '../../image/gamerland.png'

import javascript from "../../image/javascript.svg";
import react from "../../image/react.svg";
import redux from "../../image/redux.svg";
import next from "../../image/next2.svg";
import node from "../../image/node.svg";
import express from "../../image/express.svg";
import postgresql from "../../image/postgresql.svg";
import sequelize from "../../image/sequelize.svg";
import firebase from "../../image/firebase.svg";
import graphql from "../../image/graphql.svg";
import apollo from "../../image/apollo.png";
import chakra from "../../image/chakra.png";

import { useTranslation } from "react-i18next";
// const [t, i18n] = useTranslation("global")
// {t('pokedex.firstDescription')}

 // "funcionality"
        // "firstDescription"
        // "secondDescription"
        // "thirdDescription"
        // "fourthDescription"
        // "fifthDescription"
        // "sixthDescription"
        // "seventhDescription"
        // "eighthDescription"

export default function Pokedex () {

    const [t, i18n] = useTranslation("global")

    const icons = [javascript, next, redux, apollo, chakra, node, graphql]
    
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
                    <a href={"https://gamerland.vercel.app/"} target='_blank'>
                        <img src={mundo} className={styles.hoverOff} alt="" />
                        <img src={mundohover} className={styles.hoverOn} alt="" />
                    </a>
                    <a href={"https://github.com/TomasCasco/E-commerce-Group-Project"} target='_blank'>
                        <img src={github} className={styles.hoverOff} alt="" />
                        <img src={githubhover} className={styles.hoverOn} alt="" />
                    </a>
                    <a className={styles.projectImgDiv} onClick={handleClick}> 
                        <p className={styles.info}>Info</p> 
                        <img src={flip} className={styles.hoverOff}  alt="" />
                        <img src={fliphover} className={styles.hoverOn} alt="" />
                    </a>
                </div>
                <div className={styles.descriptionFront}>
                    <h2>Gamerland</h2>
                    <img src={Gamerland} alt="" />
                </div>
            </div>


            <div className={styles.backCard}>
                <div className={styles.cardIconsDiv}>
                <a href={"https://gamerland.vercel.app/"} target='_blank'>
                        <img src={mundo} className={styles.hoverOff} alt="" />
                        <img src={mundohover} className={styles.hoverOn} alt="" />
                    </a>
                    <a href={"https://github.com/TomasCasco/E-commerce-Group-Project"} target='_blank'>
                        <img src={github} className={styles.hoverOff} alt="" />
                        <img src={githubhover} className={styles.hoverOn} alt="" />
                    </a>
                    <a className={styles.projectImgDiv} onClick={handleClick}> <p className={styles.info}>Info</p> 
                        <img src={flip} className={styles.hoverOff}  alt="" />
                        <img src={fliphover} className={styles.hoverOn} alt="" />
                    </a>
                </div>
                <div className={styles.descriptionBack}>
                    <h2>Gamerland</h2>
                    <div className={styles.scrollbarPDiv}>
                        <p>{t('gamerland.funcionality')}</p>
                        <p className={styles.pRight}>
                            <b>{t('gamerland.firstDescription')}</b>
                            <br /> 
                            {t('gamerland.secondDescription')} 
                            <br /> 
                            {t('gamerland.thirdDescription')}
                            <br />
                            {t('gamerland.fourthDescription')}
                            <br />
                            {t('gamerland.fifthDescription')}
                            <br />
                            {t('gamerland.sixthDescription')}
                            <br />
                            {t('gamerland.seventhDescription')}
                            <br />
                            {t('gamerland.eighthDescription')}
                            <br />
                        </p> 
                        
                    </div>
                </div>
                <div title={'javascript, next, redux, apollo, chakra, node, graphql'} className={styles.iconsDiv}>
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

    

