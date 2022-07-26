import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from './ProjectCard.module.css'

import mundo from '../../image/mundo.svg'
import mundohover from '../../image/mundohover.svg'
import flip from '../../image/flip.svg'
import fliphover from '../../image/fliphover.svg'
import github from '../../image/github.svg'
import githubhover from '../../image/githubhover.svg'

import pokedex from '../../image/pokeapp.gif'

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

    const icons = [javascript, react, redux, node, express, sequelize, postgresql]
    
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
                        <img src={mundo} className={styles.hoverOff} alt="" />
                        <img src={mundohover} className={styles.hoverOn} alt="" />
                    </a>
                    <a href={"https://task-test-sigma.vercel.app/"} target='_blank'>
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
                    <h2>Pokedex</h2>
                    <img src={pokedex} alt="" />
                </div>
            </div>


            <div className={styles.backCard}>
                <div className={styles.cardIconsDiv}>
                <a href={"https://task-test-sigma.vercel.app/"} target='_blank'>
                        <img src={mundo} className={styles.hoverOff} alt="" />
                        <img src={mundohover} className={styles.hoverOn} alt="" />
                    </a>
                    <a href={"https://task-test-sigma.vercel.app/"} target='_blank'>
                        <img src={github} className={styles.hoverOff} alt="" />
                        <img src={githubhover} className={styles.hoverOn} alt="" />
                    </a>
                    <a className={styles.projectImgDiv} onClick={handleClick}> <p className={styles.info}>Info</p> 
                        <img src={flip} className={styles.hoverOff}  alt="" />
                        <img src={fliphover} className={styles.hoverOn} alt="" />
                    </a>
                </div>
                <div className={styles.descriptionBack}>
                    <h2>Pokedex</h2>
                    <div className={styles.scrollbarPDiv}>
                        <p>{t('pokedex.funcionality')}</p>
                        <p className={styles.pRight}>
                            <b>{t('pokedex.firstDescription')}</b>
                            <br /> 
                            {t('pokedex.secondDescription')} 
                            <br /> 
                            {t('pokedex.thirdDescription')}
                            <br />
                            {t('pokedex.fourthDescription')}
                            <br />
                            {t('pokedex.fifthDescription')}
                            <br />
                            {t('pokedex.sixthDescription')}
                            <br />
                        </p> 
                        
                    </div>
                </div>
                <div title={'javascript, react, redux, node, express, sequelize, postgresql'}>
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

    

