import React, {useState} from "react";
import "../Style/projects.css";

import { motion } from 'framer-motion'

import { projects } from '../data';

import  Carousel  from "react-bootstrap/Carousel";

export default function Projects(){






    return (
        <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        className="projects"
        >
            <div className="d-flex flex-row align-items-center justify-content-center">
                <h1 className="text-white">Projects</h1>
            </div>
      
<br></br>


<div className="container-fluid">
<div className="row justify-content-center">
{projects.map((project,id) => (
<div className="col-lg-3 mx-md-2 mb-md-2 mt-md-2 bg-dark ">
    <div className="d-flex justify-content-center py-2">
    <a href={project.link} target="_blank" rel="noreferrer">
    <img className="projectImg" src={project.image} alt={project.title}/>
    </a>
    </div>
    <br></br>
    <br></br>
    <div className="bg-dark text-center text-light">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <br></br>
        <h4>Built with:</h4>
        <p>{project.tools}</p>
        <a href={project.repo} target="_blank" rel="noreferrer"><p>GitHub</p></a>
        <a href={project.link} target="_blank" rel="noreferrer">🔗</a>
</div>
<br></br>

    </div>
))}
</div>
</div>





</motion.div>



    )
}