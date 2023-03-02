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
        <Navbar.Brand href={`${process.env.PUBLIC_URL}//#/`}>Gregory Johnston</Navbar.Brand>
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
            <Nav.Link href={`${process.env.PUBLIC_URL}//#/`}>Home</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}//#/about`}>About</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}//#/projects`}>Projects</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}//#/resume`}>Resume</Nav.Link>
        </Nav>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
        </Navbar>
      
     </>   
    )
    
}