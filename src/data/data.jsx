// import React from 'react'
import task from '../../src/image/task.png'
import Gamerland from '../../src/image/gamerland.png'
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
import graphql from "../../src/image/graphql.svg";
import apollo from "../../src/image/apollo.png";
import chakra from "../../src/image/chakra.png";

// import { useTranslation } from "react-i18next";
// const [t, i18n] = useTranslation("global")
// {t('intro.h1')}

const data = [
    {
        id: "1",
        title: "Gamerland",
        img: Gamerland,
        description: "Gamerland es un ecommerce de perifericos, como mouse, teclados, pads, etc",
        descriptionTwo: "Funcionalidades:",
        descriptionThree: "• Registro e inicio de sesión",
        descriptionFour: "• Carrito de compras, descuentos, favoritos",
        descriptionFive: "• Filtrar por categoria o marca",
        descriptionSix: "• Ordenar por precio ascendente o descendente",
        descriptionSeven: "• Buscar productos especificos con una opción de autocompletar",
        descriptionEight: "• Pasarela de pagos de MercadoPago",
        descriptionNine: "• Panel de administrador",
        gitHub: "https://github.com/TomasCasco/E-commerce-Group-Project",
        web: "https://gamerland.vercel.app/",
        icons: [javascript, next, redux, apollo, chakra, node, graphql],
        alt: 'javascript, next, redux, apollo, chakraUI, node, graphQL'
    },
    {
        id: "2",
        title: "Task Manager",
        img: task,
        description: "Es una app que te permite llevar un control de las tareas por hacer, en curso o terminadas, y todas se guardan localmente con Firebase.",
        descriptionTwo: "Funcionalidades:",
        descriptionThree: "• Registro e inicio de sesión",
        descriptionFour: "• Agregar tareas con su descripción y estado (por hacer, en curso, terminada)",
        descriptionFive: "• Modificar la descripción y estado de las tareas",
        descriptionSix: "• Eliminar las tareas",
        gitHub: "https://github.com/camilaalvarin/task-test",
        web: "https://task-test-sigma.vercel.app/",
        icons: [javascript, next, firebase],
        alt: 'javascript, next, firebase'
    },
    {
        id: "3",
        title: "Pokedex",
        img: pokedex,
        description: "Es una SPA, que hace uso de una API de datos, y luego parte de la información es extraída y almacenada en una Base de Datos, (#PostgreSQL) para que pueda usarse más tarde a conveniencia.",
        descriptionTwo: "Funcionalidades:",
        descriptionThree: "• Filtrar por tipo de pokemon y por pokemons creados por el usuario.",
        descriptionFour: "• Ordenar pokemons alfabeticamente (A-Z, Z-A) y por fuerza de ataque.",
        descriptionFive: "• Buscar por nombre.",
        descriptionSix: "• Visualizar los detalles de cada Pokémon en paginas individuales.",
        descriptionSeven: "• Crear pokémons a través de un formulario controlado.",
        web: "https://task-test-sigma.vercel.app/",
        icons: [javascript, react, redux, node, express, sequelize, postgresql],
        alt: 'javascript, react, redux, node, express, sequelize, postgresql'
    }
] 

export default data