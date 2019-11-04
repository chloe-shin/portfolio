import React from 'react'
import { Element } from 'react-scroll'
import {Container, Col, Row} from "react-bootstrap"
import {Link} from 'react-scroll'



export default function About() {
    return (
   <Container fluid>
        <Row className="about" id="about">   

        <Col lg={5}> 
        <img src="./img/chloe.jpg" className="chloe"/>
        </Col>

        <Col lg={7} className="about-content">
        <h3>
        About me
        </h3>
        <br/>
        My name is Chloe. <br/>
        I'm from Korea, currently based in Ho Chi Minh city in Vietnam. <br/>
        I design and build website. <br/>
        I'm enthusiastic person and have big passion in learning new things. <br/>
        I'm looking forward oppurtunities and fully ready for challenges. <br/>
        Please check my project below. <br/>
        <br/>
        
        <Link className= "" 
        activeClass="" 
        to = "portfolio"
        spy= {true} 
        smooth={true} 
        duration= {500}>
        <img
        src="./img/arrow.svg"
        width="30"
        height="30"
        className= "arrow"/> </Link>   
      
    

        </Col>

        </Row>
        </Container>
    )
}
