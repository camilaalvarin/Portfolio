import React from "react";
import Card from './ProjectCard'
import styles from './Projects.module.css'
// import data from '../../data/data'

export default function Projects ({ data }) {


    // return (
    //     <div className={styles.projectsBody} id='projects'>
    //         <p className={styles.projectsP}>Mis Proyectos</p>
    //         <div className={styles.cardsDiv}>
    //             <div className={styles.card}>
    //                 <Card />
    //             </div>
    //             <div className={styles.card}>
    //                 <Card />
    //             </div>
    //             <div className={styles.card}>
    //                 <Card />
    //             </div>
    //         </div>
    //     <br />
    //     </div>
    // )

    return (
        <div className={styles.projectsBody} id='projects'>
            <p className={styles.projectsP}>Mis Proyectos</p>
            <div className={styles.cardsDiv}>
            {
                data?.map((data) => {
                    return (
                            <div className={styles.card}>
                                <Card data={data} />
                            </div>
                    )
                })
            }
            </div>
        <br />
        </div>
    )
}

// img={data.img} web={data.web} title={data.title} gitHub={data.gitHub} description={data.description}