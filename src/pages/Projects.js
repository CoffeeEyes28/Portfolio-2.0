import React, {useState} from "react";
import "../Style/projects.css";

import { motion } from 'framer-motion'

import { projects } from '../data';

import  Carousel  from "react-bootstrap/Carousel";

export default function Projects(){

const [index, setIndex] = useState(0);





    return (
        <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        className="projects"
        >
            <div className="d-flex align-items-center justify-content-center">
                <h1 className="text-white">Projects</h1>
            </div>
      
<br></br>


<div className="">

{projects.map((project,id) => (
<div className="d-flex flex-column align-items-center justify-content-center">
    <div>
    <a href={project.link} target="_blank" rel="noreferrer">
    <img className="projectImg" src={project.image} alt={project.title}/>
    </a>
    </div>
    <br></br>
    <br></br>
    <div className=" bg-dark w-50 text-center text-light">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
</div>
<br></br>
<br></br>
    </div>

))}
</div>





</motion.div>



    )
}