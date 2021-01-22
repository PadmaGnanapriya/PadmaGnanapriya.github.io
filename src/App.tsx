import React from 'react';
import './App.css';
import Home from "./componenets/Home";
import {Col, Container, Row} from 'react-bootstrap'
import About from "./componenets/About";
import Education from "./componenets/Education";
import Projects from "./componenets/Projects";
import Articles from "./componenets/Articles";
import Contact from "./componenets/Contact";
import Header from "./componenets/Header";
import SlideNav from "./componenets/SlideNav";
import Footer from "./componenets/Footer";
import Skills from "./componenets/Skills";
import Achievements from "./componenets/Achievements";
import Headroom from "react-headroom";
import "./../src/asserts/main.scss";

function App() {
  document.title = "Padma Gnanapriya"
  return (
    <div className="App">
      <Row className='m-0'>
        <Col lg={3} className='p-0 m-0 d-none d-lg-block'>
          <SlideNav/>
        </Col>
        <Col xs={12} sm={12} lg={9} className='p-0 bg-info'>
          <Headroom>
            <Header/>
          </Headroom>
          <Container>
            <Home/>
            <About/>
            <Education/>
            <Skills/>
            <Projects/>
            <Achievements/>
            <Articles/>
            <Contact/>
          </Container>

        </Col>
      </Row>
      <Row>
        <Col sm={12} xs={12}>
          <Footer/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
