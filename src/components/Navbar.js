import React from "react";

import Container  from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Offcanvas  from "react-bootstrap/Offcanvas";




export default function NavBar(){





    return(
        <>
       
            <Navbar bg='dark' variant="dark" expand='md' className='mb-3'>
        <Container fluid>
        <Navbar.Brand href='https://coffeeeyes28.github.io/Portfolio-2.0/#/'>Gregory Johnston</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}/>
        <Navbar.Offcanvas
        className="bg-dark text-light"
        id={`offcanvasNavarbar-expand-md`}
        aria-labelledby={`offcanvasNavbar-expand-md`}
        placement="end"
        >
        <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbar-expand-md'>
                Gregory Johnston
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="justify-content-start flex-grow-1 pe-3">
            <Nav.Link href='https://coffeeeyes28.github.io/Portfolio-2.0/#/'>Home</Nav.Link>
            <Nav.Link href='https://coffeeeyes28.github.io/Portfolio-2.0/#/about'>About</Nav.Link>
            <Nav.Link href='https://coffeeeyes28.github.io/Portfolio-2.0/#/projects'>Projects</Nav.Link>
            <Nav.Link href='https://coffeeeyes28.github.io/Portfolio-2.0/#/resume'>Resume</Nav.Link>
        </Nav>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
        </Navbar>
      
     </>   
    )
    
}