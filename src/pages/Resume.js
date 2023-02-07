import React from 'react'

import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



const Resume = () => {
  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}>

            <diiv className="d-flex justify-content-center">
            <h1 className='text-light'>Resume</h1>
            </diiv>
            <br></br>
           <Timeline position='alternate'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector/>
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
           </Timeline>

    </motion.div>

  )
}

export default Resume