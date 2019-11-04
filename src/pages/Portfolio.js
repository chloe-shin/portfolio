import React from 'react'
import {Container, Col, Row, Card, CardGroup, Badge } from "react-bootstrap"

export default function Portfolio() {
    return (

<Container fluid>

    <Row id="portfolio">
    <Col lg={12} className="port">
    
    <div className="cardgrp">
    IMDB: Chloe's movie world
    <div className="skill">
    <Badge >HTML</Badge>
    <Badge >CSS</Badge>
    <Badge>JavaScript</Badge>
    <Badge>ReactJS</Badge>
    </div> 
    <Card className="bg-white text-white portfolioimg">
     
     <Card.Img src="./img/portfolio.png" alt="Card image" />
     <Card.ImgOverlay>
       <Card.Text>
        <a href="https://chloe-imdb.netlify.com"> <button className="netlify"> Check Website </button></a>
       </Card.Text>
     </Card.ImgOverlay>
   </Card>
   </div>
   <div className="cardgrp2">
   Chuon Chuon Game
   <div className="skill">
   <Badge >HTML</Badge>
   <Badge>CSS</Badge>
   <Badge>JavaScript</Badge>
    </div> 
 <Card className="bg-white text-white portfolioimg2">
   <Card.Img src="./img/portfolio2.png" alt="Card image" />
   <Card.ImgOverlay>
     <Card.Text>
     <a href="https://chloe-game-chuonchuon.netlify.com"> <button className="netlify"> Check Website </button></a>
     </Card.Text>
   </Card.ImgOverlay>
 </Card>
 </div>
 
    </Col>
</Row>
</Container>
    )
}
