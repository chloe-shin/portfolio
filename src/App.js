import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import  Navi from './components/Navi'
import logo from './logo.svg';
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

import './App.css';


function App() {
  
  return (
    <>
    <Navi/>
     <Home/>
     <About/>
     <Portfolio/>
     <Contact/>
     </>
  );  
}

export default App;
