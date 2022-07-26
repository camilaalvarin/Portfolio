import React from "react";
import styles from "./Skills.module.css";
import javascript from "../../image/javascript.svg";
import react from "../../image/react.svg";
import redux from "../../image/redux.svg";
import next from "../../image/next2.svg";
import node from "../../image/node.svg";
import express from "../../image/express.svg";
import postgresql from "../../image/postgresql.svg";
import sequelize from "../../image/sequelize.svg";
import firebase from "../../image/firebase.svg";
import git from "../../image/git.svg";
import github from "../../image/github.svg";
import trello from "../../image/trello2.svg";
import figma from "../../image/figma.svg";
import python from "../../image/python.svg";
import jira from "../../image/jira.svg";
import slack from "../../image/slack.svg";
import html from "../../image/html5.svg";
import css from "../../image/css.svg";

import { FaGraduationCap } from "react-icons/fa";
import { IoPlayForward, IoPlayForwardSharp } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";

import { useTranslation } from "react-i18next";
// {t('skills.h1')}

const Skills = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <div className={styles.skillsFather} id="skills">
      <div>
        <p className={styles.mySkills}>{t('skills.title')}</p>
      </div>

      <div className={styles.skillsDescription}>
        <div className={styles.skillsDescriptionEach}>
          <IoPlayForward className={styles.icons} />
          <p className={styles.text}>{t('skills.firstP')}</p>
        </div>
        <div className={styles.skillsDescriptionEach}>
          <MdOutlinePhoneIphone className={styles.icons} />
          <p className={styles.text}>{t('skills.secondP')}</p>
        </div>
        <div className={styles.skillsDescriptionEach}>
          <FaGraduationCap className={styles.icons} />
          <p className={styles.text}>{t('skills.thirdP')}</p>
        </div>
      </div>

      <div className={styles.tables}>
        <div className={styles.borderDiv}>
          <div className={styles.frontDiv}>
            <p className={styles.title}>Front-end</p>
            <div className={styles.iconsDiv}>
              <div className={styles.pruebaa}>
                <div className={styles.iconNameDiv}>
                  <p>HTLM</p>
                  <img src={html} alt="" className={styles.languageIcon} />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>CSS</p>
                  <img src={css} alt="" className={styles.languageIcon} />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>Next</p>
                  <img src={next} alt="" className={styles.languageIcon} />
                </div>
              </div>
              <div className={styles.pruebaa}>
                <div className={styles.iconNameDiv}>
                  <p>Javascript</p>
                  <img
                    src={javascript}
                    alt=""
                    className={styles.languageIcon}
                  />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>React</p>
                  <img src={react} alt="" className={styles.languageIcon} />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>Redux</p>
                  <img src={redux} alt="" className={styles.languageIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.borderDiv}>
          <div className={styles.frontDiv}>
            <p className={styles.title}>Back-end || DataBase</p>
            <div className={styles.iconsDiv}>
              <div className={styles.pruebaa}>
                <div className={styles.iconNameDiv}>
                  <p>Node</p>
                  <img src={node} alt="" className={styles.languageIcon} />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>Express</p>
                  <img src={express} alt="" className={styles.languageIcon} />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>Python</p>
                  <img src={python} alt="" className={styles.languageIcon} />
                </div>
              </div>
              <div className={styles.pruebaa}>
                <div className={styles.iconNameDiv}>
                  <p>Postgresql</p>
                  <img
                    src={postgresql}
                    alt=""
                    className={styles.languageIcon}
                  />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>Sequelize</p>
                  <img src={sequelize} alt="" className={styles.languageIcon} />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>Firebase</p>
                  <img src={firebase} alt="" className={styles.languageIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.borderDiv}>
          <div className={styles.frontDiv}>
            <p className={styles.title}>{t('skills.tableTools')}</p>
            <div className={styles.iconsDiv}>
              <div className={styles.pruebaa}>
                <div className={styles.iconNameDiv}>
                  <p>Git</p>
                  <img src={git} alt="" className={styles.languageIcon} />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>GitHub</p>
                  <img src={github} alt="" className={styles.languageIcon} />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>Trello</p>
                  <img src={trello} alt="" className={styles.languageIcon} />
                </div>
              </div>
              <div className={styles.pruebaa}>
                <div className={styles.iconNameDiv}>
                  <p>Figma</p>
                  <img src={figma} alt="" className={styles.languageIcon} />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>Jira</p>
                  <img src={jira} alt="" className={styles.languageIcon} />
                </div>
                <div className={styles.iconNameDiv}>
                  <p>Slack</p>
                  <img src={slack} alt="" className={styles.languageIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
