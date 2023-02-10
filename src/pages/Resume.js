import React from 'react'

import resume from '../Assets/GregoryJohnstonResume.docx';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const Resume = () => {
  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}>

            <div className="d-flex flex-row justify-content-center">
            <h1 className='text-light'>Resume</h1>
            </div>
            <br></br>
            <div className='d-flex flex-row justify-content-center'>
              <div className='d-flex flex-column'>
              <p className='text-light'>Download a copy of my resume below</p>
              <br></br>
            
              <a className='btn btn-light' download href={resume}>Download</a>
              
              
              </div>
            
            </div>
            <br></br>
           <Timeline position='alternate'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector/>
              </TimelineSeparator>
              <TimelineContent>
                <h2 className='text-light'>Edx Bootcamps (Jan. 2023-Present)</h2>
                <p className='text-light '>Worked directly with the class instructor to create an engaging and efficient learning environment. 
                <br></br>
                Provided technical and material support for over 20 students on various aspects of Full Stack Web Development. 
                <br></br>
                Including: HTML, CSS, Javascript, Git, React.js, Node.js, Express.js, SQL, and NoSQL. </p>

              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector/>
              </TimelineSeparator>
              <TimelineContent>
                <h3 className='text-light'>Rutgers University  (Dec. 2022)</h3>

              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector/>
              </TimelineSeparator>
              <TimelineContent>
                <h4 className='text-light'>Rite Aid (2018)</h4>

              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />

              </TimelineSeparator>
              <TimelineContent>
                <h5 className='text-light'>Belk Department Store (2016- 2018)</h5>

              </TimelineContent>
            </TimelineItem>

            
           </Timeline>

    </motion.div>

  )
}

export default Resume