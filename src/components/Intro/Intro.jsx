import React from "react";
import styles from './Intro.module.css'
import Typewriter from "typewriter-effect";
import videoo from '../../image/coverVideo.mp4'
import { useTranslation } from "react-i18next";

export default function Intro () {
    const [t, i18n] = useTranslation("global")

    return (
        <div className={styles.marginDiv} id='intro'>
            <video src={videoo} autoPlay loop muted></video>
            <div className={styles.biColorDiv}>
                    <div className={styles.insideDivs}>
                        <h1>{t('intro.h1')}</h1>
                    </div>
                    <div className={styles.typewriter}>
                        <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("Full-Stack developer Junior")
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