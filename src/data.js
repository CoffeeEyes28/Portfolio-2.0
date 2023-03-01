import React from "react";

import Medley from './Assets/Images/Projects/medley.png';
import Furrever from './Assets/Images/Projects/furrever.png';
import Anon from './Assets/Images/Projects/anon.png'



export const projects = [
    {
        id: 1,
        title: 'Medley',
        description: 'web based interactive online music collection that allows users to showcase their taste to others in a quick and engaging manner',
        tools: ' React, LastFM API, Material UI, Bootstrap, Node, Mongoose, NoSQL/MongoDB, Apollo, HTML, CSS',
        image: `${Medley}`,
        link: 'https://medley.herokuapp.com/',
        repo: 'https://github.com/CoffeeEyes28/Medley'
    },
    {
        id: 2,
        title: 'Furrever',
        description: 'web based social media platform designed to help get fostered animals adopted and provide information that will help keep them adopted',
        tools: 'HTML, Bulma CSS , JavaScript, Node, Express, Handlebars, Cloudinary, MySQL, Sequelize',
        image: `${Furrever}`,
        link: 'https://enigmatic-gorge-61389.herokuapp.com/',
        repo: 'https://github.com/CoffeeEyes28/Furrever'
    },
    {
        id: 3,
        title: 'Anonymous Profile Generator',
        description: 'web based application which will randomly generate a profile picture and bio asset for users to help quickly build an anonymous social media profile',
        tools: 'HTML, CSS, Bootstrap, JavaScript, Pixel Encounter API, Random Fact Generator API',
        image: `${Anon}`,
        link: 'https://dmerk2.github.io/Anon-Profile-Generator/',
        repo: 'https://github.com/CoffeeEyes28/Anon-Profile-Generator'
    }
]