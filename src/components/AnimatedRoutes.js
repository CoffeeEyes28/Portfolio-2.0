import React from 'react'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import {AnimatePresence} from 'framer-motion';

 export default function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        
    <Routes location={location} key={location.pathname}>
    <Route 
    path='/Portfolio-2.0/'
    element={<Home/>}
    />
    <Route 
    path='/Portfolio-2.0/about' 
    element={<About/>}
    />

    <Route 
    path='/Portfolio-2.0/projects' 
    element={<Projects/>}
    />

    <Route path='/Portfolio-2.0/resume'
    element={<Resume/>}
    />
    </Routes>
    </AnimatePresence>
  )
}
