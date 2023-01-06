import React, {useState} from "react";

import { motion } from 'framer-motion'

import { projects } from '../data';

import  Carousel  from "react-bootstrap/Carousel";

export default function Projects(){

const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
}



    return (
        <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        >
            <div className="d-flex align-items-center justify-content-center">
                <h1 className="text-white">Projects</h1>
            </div>
      
<br></br>


<div className="d-flex align-items-center justify-content-center">
<Carousel activeIndex={index} onSelect={handleSelect} className="w-50">
{projects.map((project,id) => (
<Carousel.Item>
    <a href={project.link} target="_blank">
    <img className="w-100 bg-dark" src={project.image} alt={project.title}/>
    </a>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    <Carousel.Caption className="p-2 text-light bg-dark">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

    </Carousel.Caption>
</Carousel.Item>
))}


</Carousel>
</div>


</motion.div>



    )
}