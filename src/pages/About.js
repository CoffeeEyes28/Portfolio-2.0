import React from "react";
import "../Style/about.css";


import aboutPic from '../Assets/Images/about.JPG'
import { motion } from 'framer-motion'

import { Container } from "react-bootstrap";

import Image from 'react-bootstrap/Image'






export default function About(){







    return (
        <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        className="about"
        >
        <Container className="text-white m-2 p-4 d-flex flex-wrap">
            <div className="d-flex flex-row align-items-center">
            
            <div className="d-flex flex-col align-items-center">
            <Container>
            <Image className="w-100 shadow rounded-circle"  src={aboutPic} alt='Gregory Johnston'/>
            </Container>
            </div>
            <br></br>

            <div className="d-flex col-6 text-center">
            <Container>
            <h1 >About</h1>
          
            <p > Greg is a Full Stack Web Developer with a background in customer service and team management. They are considred to be a fast learner and resilient in the face of any challenge. Amongst their peers and team members they have been highly regarded as dependable and a positive influence on morale. </p>
            
            
            </Container>
            </div>


            </div>
        </Container>
        </motion.div>
    )
}