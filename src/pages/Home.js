import React from "react";
import profile from '../Assets/Images/profile.jpg'

import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";

import Typewriter from 'typewriter-effect'

import { motion } from 'framer-motion';

export default function Home(){






    return (
        <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        
        
        >
           
            <Container className=" m-2 p-4 d-flex flex-wrap">
            <div className="d-flex flex-row align-items-center">


            <div className="d-flex flex-col align-items-center">
            <Container>
            <Image className="w-100 h-100 shadow" roundedCircle='true' src={profile} alt="Gregory Johnston"/>
            </Container>
            </div>

            <div className="d-flex col-6 text-center">
            <Container>
            <h1 className="text-light" style={{fontSize: '60px'}}>Hello, I'm Greg</h1>
            <div className=" text-light" style={{fontSize: '30px'}}>
            <Typewriter 
            
            options={{
                strings: ['Developer', 'Problem Solver', 'Creative', 'Motivator'],
                autoStart: true,
                loop: true
            }}

            onInit={(typewriter) => {
                typewriter.typeString()
                .callFunction(() => {
                    
                })
                .pauseFor(1000)
                .deleteAll()
                .start()
            }} 
            />
            </div>
            </Container>
            </div>


            </div>
            </Container>

        </motion.div>
    )
}