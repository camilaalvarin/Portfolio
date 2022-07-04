import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Form.module.css'
import cv from "../../data/AlvarinCamila-CV.pdf";

import { BsGithub, BsLinkedin, BsWhatsapp, BsDownload } from "react-icons/bs";


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zddg40m', 'template_h4e0vdl', form.current, 'user_EwqsIAenHEou7Y4j8mi8a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset() 
  };

  return (
    <div className={styles.formFatherDiv} id='contact'>
      {/* <div> */}
        <p className={styles.formContacto}>CONTACTO</p>
        <p>
           Estoy buscando mi primera oportunidad como desarrolladora. Si tenés una propuesta para acercarme, ¡escribime! 
        </p>
      {/* </div> */}
      <div className={styles.formDiv}>
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name</label> */}
          <input type="text" name="name" className={`${styles.inputs} ${styles.marginInput}`} placeholder='Nombre' /> 
          {/* <label>Email</label> */}
          <br />
          <input type="email" name="email" className={styles.inputs} placeholder='Email'/>
          <br />
          {/* <label>Mensaje</label>  */}
          <br />
          <textarea name="message" placeholder='Mensaje...' />
          <button className={styles.marginButon}> 
          <input type="submit" value="ENVIAR" className={styles.buttonEnv} />
            <div className={styles.liquid}></div>
          </button>
        </form>
      {/* </div> */}
        <div className={styles.iconsDiv}>
          <a target="_blank" href="https://github.com/camilaalvarin">
            <BsGithub alt="GitHub" title="GitHub" className={styles.icons} />  {/* className={`${styles.socialIcons} ${styles.hoverOff}`} */}
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/camila-alvarin-bb2634a8/">
            <BsLinkedin alt="LinkedIn" title="LinkedIn" className={styles.icons} />
          </a>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=1161827685&text=Hola%20Camila!%20Te%20escribo%20porque%20estaba%20viendo%20tu%20portfolio%20y%20...">
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

// className={styles.hoverOff}
// className={styles.hoverOn}