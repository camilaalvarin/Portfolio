import React from 'react'
// import iconsProjectsHTML from "../media/htmlSassGulp.svg";
import task from '../../src/image/task.png'
import pokedex from '../../src/image/pokeapp.gif'

import javascript from "../../src/image/javascript.svg";
import react from "../../src/image/react.svg";
import redux from "../../src/image/redux.svg";
import next from "../../src/image/next2.svg";
import node from "../../src/image/node.svg";
import express from "../../src/image/express.svg";
import postgresql from "../../src/image/postgresql.svg";
import sequelize from "../../src/image/sequelize.svg";
import firebase from "../../src/image/firebase.svg";
import git from "../../src/image/git.svg";
import github from "../../src/image/github.svg";
import trello from "../../src/image/trello2.svg";
import figma from "../../src/image/figma.svg";
import python from "../../src/image/python.svg";
import jira from "../../src/image/jira.svg";
import slack from "../../src/image/slack.svg";
import html from "../../src/image/html5.svg";
import css from "../../src/image/css.svg";

const data = [
    {
        id: "1",
        title: "Gamerland",
        img: task,
        description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dignissimos exercitationem nisi ullam, omnis repellendus delectus velit necessitatibus blanditiis dicta! Culpa, eligendi itaque repudiandae sapiente veniam ullam animi rem iusto!",
        gitHub: "https://github.com/TomasCasco/E-commerce-Group-Project",
        web: "https://gamerland.vercel.app/",
        icons: [javascript, next, redux],
        alt: 'javascript, next, firebase'
    },
    {
        id: "2",
        title: "Task Manager",
        img: task,
        description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dignissimos exercitationem nisi ullam, omnis repellendus delectus velit necessitatibus blanditiis dicta! Culpa, eligendi itaque repudiandae sapiente veniam ullam animi rem iusto!",
        gitHub: "https://github.com/camilaalvarin/task-test",
        web: "https://task-test-sigma.vercel.app/",
        icons: [javascript, next, firebase],
        alt: 'javascript, next, firebase'
    },
    {
        id: "3",
        title: "Pokedex",
        img: pokedex,
        description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dignissimos exercitationem nisi ullam, omnis repellendus delectus velit necessitatibus blanditiis dicta! Culpa, eligendi itaque repudiandae sapiente veniam ullam animi rem iusto!",
        gitHub: "https://github.com/camilaalvarin/task-test",
        web: "https://task-test-sigma.vercel.app/",
        icons: [javascript, react, redux, node, express, sequelize, postgresql],
        alt: 'javascript, react, redux, node, express, sequelize, postgresql'
    }
] 

export default data