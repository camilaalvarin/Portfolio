import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Form.module.css'
import github from '../../image/github.svg'
import githubhover from '../../image/githubhover.svg'
import linkedin from '../../image/linkedin.png'
import linkedinhover from '../../image/linkedinhover.png'
import whatsapp from '../../image/whatsapp.png'
import whatsapphover from '../../image/whatsapphover.png'
import video from '../../image/background2.mp4'
import video2 from '../../image/backgroundgif.gif'

import { BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs";


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
      <p className={styles.formContacto}>CONTACTO</p>
      <p>Soy desarrolladora fullStack junior creativa y con muchas ganas de aprender. 
        Si tenés una propuesta para acercarme, ¡escribime! <br /> Estoy buscando nuevos desafíos.</p>
      <div className={styles.formDiv}>
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name</label> */}
          <input type="text" name="name" className={styles.inputs} placeholder='Nombre' />
          {/* <label>Email</label> */}
          <input type="email" name="email" className={styles.inputs} placeholder='Email'/>
          <br />
          {/* <label>Mensaje</label>  */}
          <br />
          <textarea name="message" placeholder='Mensaje...' />
          <button> 
          <input type="submit" value="ENVIAR" className={styles.buttonEnv} />
            <div className={styles.liquid}></div>
          </button>
        </form>
      {/* </div> */}
        <div className={styles.iconsDiv}>
          <a href="">
            <BsGithub alt="" className={styles.icons} />  {/* className={`${styles.socialIcons} ${styles.hoverOff}`} */}
          </a>
          <a href="">
            <BsLinkedin alt="" className={styles.icons} />
          </a>
          <a href="">
            <BsWhatsapp alt="" className={styles.icons} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// className={styles.hoverOff}
// className={styles.hoverOn}