import React from "react";

import resume from "../Assets/GregoryJohnstonResume.docx";
import logo from "../Assets/Images/portfolio-logo.png";
import { motion } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Container } from "react-bootstrap";

const Resume = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
    >
      <div className="d-flex flex-column justify-cotent-center">
        <div className="d-flex flex-row justify-content-center">
          <h1 className="text-light">Resume</h1>
        </div>
       
      
        <div className="d-flex flex-row justify-content-center">
        <img alt="Techincal Skills: HTML, CSS, JavaScript, Node.js, MySql, React, MongoDB" src={logo}/>
        </div>

        <br></br>
      <div className="container-fluid  d-flex flex-column justify-content-center bg-dark">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className="text-light">Teaching Assistant</h3>
              <h4 className="text-light">Edx Bootcamps (Jan. 2023-Present)</h4>
              <p className="text-light ">
                Worked directly with the class instructor to create an engaging
                and efficient learning environment.
                <br></br>
                Provided technical and material support for over 20 students on
                various aspects of Full Stack Web Development.
                <br></br>
                Including: HTML, CSS, Javascript, Git, React.js, Node.js,
                Express.js, SQL, and NoSQL.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
             
            </TimelineSeparator>
            <TimelineContent>
              <h5 className="text-light">
                Certificate of Full Stack Web Development
              </h5>
              <h6 className="text-light">Rutgers University (Dec. 2022)</h6>
            </TimelineContent>
          </TimelineItem>
        
        <br></br>
        <div className="d-flex flex-row justify-content-center">
          <div className="d-flex flex-column">
            <p className="text-light">Download a copy of my resume below</p>

            <a className="btn btn-light" download href={resume}>
              Download
            </a>
          </div>
        </div>
        </Timeline>
        </div>
        <br></br>
      </div>
    </motion.div>
  );
};

export default Resume;
