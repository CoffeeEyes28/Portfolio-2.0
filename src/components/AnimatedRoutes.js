import React from 'react'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';

import {AnimatePresence} from 'framer-motion';

 export default function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        
    <Routes location={location} key={location.pathname}>
    <Route 
    path='/'
    element={<Home/>}
    />
    <Route 
    path='/about' 
    element={<About/>}
    />

    <Route 
    path='/projects' 
    element={<Projects/>}
    />

    </Routes>
    </AnimatePresence>
  )
}
