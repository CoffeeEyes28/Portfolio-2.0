import React from 'react'

import Container  from 'react-bootstrap/Container';

import GitHub from '../Assets/Images/github.png';

import LinkedIn from '../Assets/Images/linkedin.png';



export default function Footer() {
  return (
        <footer className='fixed-bottom py-4' style={{height: '160px'}}>
        <div className='d-flex flex-column justify-content-center bg-dark'>
        <div className='d-flex flex-row justify-content-center text-light'>
          <p style={{fontSize: '18px'}}>Contact Me</p>
        </div>
        <div className='d-flex flex-row justify-content-center text-light'>
        <a href='mailto:gjohnton47@yahoo.com'><p>gjohnston47@yahoo.com</p></a> 
        </div>
       
        <div className='d-flex flex-row justify-content-center align-items-center text-light'>
        <a target="_blank" rel="noreferrer"href="https://github.com/CoffeeEyes28">
        <img alt="GitHub logo"style={{width: '50px', height: '50px'}} className="mx-2"src={GitHub} />
        </a>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gregory-johnston-dev/">
        <img alt="LinkedIn logo"style={{width: '40px', height: '40px '}} className="mx-2"src={LinkedIn} />
        </a>
        </div>
        <br></br>
        <br></br>
      
        </div>
       
        
                
         
        </footer>
    
  )
}

