import React from "react";
import styles from './Intro.module.css'
import rizos from '../../image/rizos4.jpg'
import Typewriter from "typewriter-effect";

export default function Intro () {


    return (
        <div className={styles.marginDiv} id='intro'>
            <div className={styles.biColorDiv}>
                    <div className={styles.insideDivs}>
                        <h1>Hi,</h1>
                        <h2>I'm Camila!</h2>
                        <h3>I'm a fullStack developer</h3>
                    </div>
                    <div className="cover-container__jobs">
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
                            .typeString("Camila")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Alvarin")
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