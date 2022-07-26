import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Form.module.css'
import cv from "../../data/AlvarinCamila-CV.pdf";
import swal from 'sweetalert'

import { BsGithub, BsLinkedin, BsWhatsapp, BsDownload } from "react-icons/bs";

import { useTranslation } from "react-i18next";
// {t('contact.h1')}


const ContactUs = () => {
  const [t, i18n] = useTranslation("global")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zddg40m', 'template_h4e0vdl', form.current, 'user_EwqsIAenHEou7Y4j8mi8a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      swal({
        title: "Mensaje enviado",
        icon: "success",
        timer: "1200",
        buttons: false
    })
      e.target.reset() 
  };

  return (
    <div className={styles.formFatherDiv} id='contact'>
        <p className={styles.formContacto}>{t('contact.title')}</p>
        <p>{t('contact.firstP')}</p>
      <div className={styles.formDiv}>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className={`${styles.inputs} ${styles.marginInput}`} placeholder={t('contact.firstPlaceHolder')} /> 
          <br />
          <input type="email" name="email" className={styles.inputs} placeholder='Email' />
          <br />
          <br />
          <textarea name="message" placeholder={t('contact.thirdPlaceHolder')} />
          <button className={styles.marginButon}> 
          <input type="submit" value={t('contact.button')} className={styles.buttonEnv} />
            <div className={styles.liquid}></div>
          </button>
        </form>   
        <div className={styles.iconsDiv}>
          <a target="_blank" href="https://github.com/camilaalvarin">
            <BsGithub alt="GitHub" title="GitHub" className={styles.icons} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/camila-alvarin-bb2634a8/">
            <BsLinkedin alt="LinkedIn" title="LinkedIn" className={styles.icons} />
          </a>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=5491161827685&text=Hola%20Camila!%20Te%20escribo%20porque%20vi%20tu%20portfolio%20y%20...">
            <BsWhatsapp alt="Whatsapp" title="Whatsapp" className={styles.icons} />
          </a>
          <a href={cv} download>
            <BsDownload alt="Cv" title="Descargar Cv" className={styles.icons} />
          </a>
        </div>
      </div>
      {/* <p>
        Espero te haya gustado mi porfolio, ¡me encantaría que me des un feedback o alguna recomendación!
      </p> */}
    </div>
  ); 
};

export default ContactUs;