import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from './ProjectCard.module.css'

import mundo from '../../image/mundo.svg'
import mundohover from '../../image/mundohover.svg'
import flip from '../../image/flip.svg'
import fliphover from '../../image/fliphover.svg'
import github from '../../image/github.svg'
import githubhover from '../../image/githubhover.svg'


export default function Project ({ data }) {
    const {img, web, title, description, icons, alt, gitHub} = data
    const [isFlipped, setIsFlipped] = useState(false)


    function handleClick(e) {
        e.preventDefault();
        setIsFlipped(!isFlipped);
      }
  
      return (
        <ReactCardFlip  isFlipped={isFlipped} flipDirection="horizontal">
            <div className={styles.frontCard}>
                <div className={styles.cardIconsDiv}>
                    <a href={web} target='_blank'>
                        <img src={mundo} className={styles.hoverOff} alt="" />
                        <img src={mundohover} className={styles.hoverOn} alt="" />
                    </a>
                    <a href={gitHub} target='_blank'>
                        <img src={github} className={styles.hoverOff} alt="" />
                        <img src={githubhover} className={styles.hoverOn} alt="" />
                    </a>
                    <a className={styles.projectImgDiv} onClick={handleClick}> 
                        <p className={styles.info}>Info</p> 
                        <img src={flip} className={styles.hoverOff}  alt="" />
                        <img src={fliphover} className={styles.hoverOn} alt="" />
                    </a>
                </div>
                <div className={styles.descriptionFront}>
                    <h2>{title}</h2>
                    <img src={img} alt="" />
                </div>
            </div>


            <div className={styles.backCard}>
                <div className={styles.cardIconsDiv}>
                <a href={web} target='_blank'>
                        <img src={mundo} className={styles.hoverOff} alt="" />
                        <img src={mundohover} className={styles.hoverOn} alt="" />
                    </a>
                    <a href={gitHub} target='_blank'>
                        <img src={github} className={styles.hoverOff} alt="" />
                        <img src={githubhover} className={styles.hoverOn} alt="" />
                    </a>
                    <a className={styles.projectImgDiv} onClick={handleClick}> <p className={styles.info}>Info</p> 
                        <img src={flip} className={styles.hoverOff}  alt="" />
                        <img src={fliphover} className={styles.hoverOn} alt="" />
                    </a>
                </div>
                <div className={styles.descriptionBack}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div title={alt}>
                    {
                        icons?.map((icon) => {
                            return (
                                <img src={icon} alt="" className={styles.icons} />
                            )
                        })
                    }
                </div>
            </div>
        </ReactCardFlip>
      )

    //   return (
    //     <ReactCardFlip  isFlipped={isFlipped} flipDirection="horizontal">
    //         <div className={styles.frontCard}>
    //             <div className={styles.cardIconsDiv}>
    //                 <a href="">
    //                     <img src={mundo} className={styles.hoverOff} alt="" />
    //                     <img src={mundohover} className={styles.hoverOn} alt="" />
    //                 </a>
    //                 <a href="">
    //                     <img src={github} className={styles.hoverOff} alt="" />
    //                     <img src={githubhover} className={styles.hoverOn} alt="" />
    //                 </a>
    //                 <a className={styles.projectImgDiv} onClick={handleClick}> <p className={styles.info}>Info</p> 
    //                     <img src={flip} className={styles.hoverOff}  alt="" />
    //                     <img src={fliphover} className={styles.hoverOn} alt="" />
    //                 </a>
    //             </div>
    //             <div className={styles.descriptionFront}>
    //                 <h2>PokeApp</h2>
    //                 <img src={pokeApp} alt="" />
    //             </div>
    //         </div>


    //         <div className={styles.backCard}>
    //             <div className={styles.cardIconsDiv}>
    //             <a href="">
    //                     <img src={mundo} className={styles.hoverOff} alt="" />
    //                     <img src={mundohover} className={styles.hoverOn} alt="" />
    //                 </a>
    //                 <a href="">
    //                     <img src={github} className={styles.hoverOff} alt="" />
    //                     <img src={githubhover} className={styles.hoverOn} alt="" />
    //                 </a>
    //                 <a className={styles.projectImgDiv} onClick={handleClick}> <p className={styles.info}>Info</p> 
    //                     <img src={flip} className={styles.hoverOff}  alt="" />
    //                     <img src={fliphover} className={styles.hoverOn} alt="" />
    //                 </a>
    //             </div>
    //             <div className={styles.descriptionBack}>
    //                 <h2>PokeApp</h2>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas assumenda 
    //                     laudantium, temporibus id inventore nisi dolore aut repellat dolores 
    //                     asperiores reprehenderit dolorem maiores vel magnam ad, ex, eius 
    //                     necessitatibus facere.</p>
    //             </div>
    //             <div>
    //                 <div className={styles.backIcons}>
    //                     <img src={js} alt="" className={styles.icons} />
    //                     <img src={react} className={styles.icons} alt="" />
    //                     <img src={redux} className={styles.icons} alt="" />
    //                     <img src={node} alt="" className={styles.icons} />
    //                     <img src={sequelize} className={styles.icons} alt="" />
    //                     <img src={postgresql} className={styles.icons} alt="" />
    //                 </div>
    //             </div>
    //         </div>
    //     </ReactCardFlip>
    //   )
    
  }

   {/* className={styles.projectCard} */}