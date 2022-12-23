import React from "react";
import profile from '../Assets/Images/profile.jpg'

import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";

export default function Home(){






    return (
        <div>
        
            <Container className="  d-flex flex-column justify-content-center align-items-center">
            <Image className="w-50 h-50 shadow" roundedCircle='true' src={profile}/>
            <br></br>
            <h1 className="text-light">Hello, I'm Greg</h1>
            </Container>
        </div>
    )
}