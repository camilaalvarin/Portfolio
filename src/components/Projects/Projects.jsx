import React from "react";
import Card from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects () {


    return (
        <div className={styles.projectsBody} id='projects'>
        <p className={styles.projectsP}>Mis Proyectos</p>
        <div className={styles.cardsDiv}>
            <div className={styles.card}>
                <Card />
            </div>
            <div className={styles.card}>
                <Card />
            </div>
            <div className={styles.card}>
                <Card />
            </div>
        </div>
        <br />
        </div>
    )
}