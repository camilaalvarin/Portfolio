import React from "react";
import styles from './Intro.module.css'
import Typewriter from "typewriter-effect";
import videoo from '../../image/coverVideo.mp4'

export default function Intro () {


    return (
        <div className={styles.marginDiv} id='intro'>
            <video src={videoo} autoPlay loop muted></video>
            <div className={styles.biColorDiv}>
                    <div className={styles.insideDivs}>
                        <h1>¡Hola, soy Camila!</h1>
                        {/* <h2>Soy Camila!</h2> */}
                    </div>
                    <div className={styles.typewriter}>
                        <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("Desarrolladora full-stack junior")
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                        }}
                        />
                    </div>
            </div>
        </div>
    )
}