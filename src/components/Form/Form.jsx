import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Form.module.css'
import cv from "../../data/Alvarin-CV.pdf";

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
        <p>Soy desarrolladora fullStack junior creativa y con muchas ganas de aprender. 
          Si tenés una propuesta para acercarme, ¡escribime! <br /> Estoy buscando nuevos desafíos.</p>
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
          <a href="">
            <BsGithub alt="GitHub" title="GitHub" className={styles.icons} />  {/* className={`${styles.socialIcons} ${styles.hoverOff}`} */}
          </a>
          <a href="">
            <BsLinkedin alt="LinkedIn" title="LinkedIn" className={styles.icons} />
          </a>
          <a href="">
            <BsWhatsapp alt="Whatsapp" title="Whatsapp" className={styles.icons} />
          </a>
          <a href={cv} download>
            <BsDownload alt="Cv" title="Descargar Cv" className={styles.icons} />
          </a>
        </div>
      </div>
    </div>
  ); 
};

export default ContactUs;

// className={styles.hoverOff}
// className={styles.hoverOn}