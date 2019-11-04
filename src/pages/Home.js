import React from 'react'
import {Container, Col, Row, Badge} from "react-bootstrap"
import Typical from 'react-typical'
 
export default function Home() {
    return (
<Container fluid className= "home">
        <Row id="home">
        <Col lg={6}>
            <div className= "content">
                  <h1>
                    HELLO, <br/>    
                    
                  <Typical
                    steps={['I\'m',1000, 
                    'I\'m Chloe', 400,
                    'I\'m a web developer.',400                    
                  ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                  </h1> 
            </div>
        </Col>

        
        <Col className= "home" lg={6}>
        </Col>

       

        </Row>
        </Container>
    )
}

// <img src="./img/bg4.jpg" className="hero"/>
