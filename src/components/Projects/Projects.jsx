import React from "react";
import Pokedex from "./Pokedex";
import Gamerland from "./Gamerland";
import Task from "./Task";
import Card from './ProjectCard'
import styles from './Projects.module.css'
import { useTranslation } from "react-i18next";
// {t('skills.h1')}

export default function Projects () {
    const [t, i18n] = useTranslation("global")

    return (
        <div className={styles.projectsBody} id='projects'>
            <p className={styles.projectsP}>{t('projects.title')}</p>
            <div className={styles.cardsDiv}>
            <Gamerland />
            <Pokedex />
            <Task />
            </div>
        </div>
    )
}

// {
//     data?.map((data) => {
//         return (
//                 <div className={styles.card}>
//                     <Card data={data} />
//                 </div>
//         )
//     })
// } 