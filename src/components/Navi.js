import React, {Component} from 'react'
import {Nav, Navbar} from "react-bootstrap"
import {Link} from 'react-scroll'


class Navi extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg= "transparent" variant="light" fixed="top">
        <Link className = "navbar-brand" to = "/"><img
        src="/img/group1.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
      /> 
       </Link>        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
             <Link className= "nav-link px-3" 
             activeClass="active" 
             to = "home"
             spy= {true} 
             smooth={true} 
             offset={-125}
             duration= {500}>
             Home
             </Link>
             <Link className= "nav-link px-3" 
             activeClass="active" 
             to = "about"
             spy= {true} 
             smooth={true} 
  
             duration= {500}>
             About
             </Link>
             <Link className= "nav-link px-3" 
             activeClass="active" 
             to = "portfolio"
             spy= {true} 
             smooth={true} 
             duration= {500}>
             Portfolio
             </Link>
             
             <Link className= "nav-link px-3" 
             activeClass="active" 
             to = "contact"
             spy= {true} 
             smooth={true} 
             duration= {500}>
             Contact
             </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
            )
    }
  }
    
export default Navi;
