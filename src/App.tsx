import React from 'react';
import './App.css';
import Home from "./asserts/Home";
import {Row, Col, Container} from 'react-bootstrap'
import About from "./asserts/About";
import Education from "./asserts/Education";
import Projects from "./asserts/Projects";
import Articles from "./asserts/Articles";
import Contact from "./asserts/Contact";
import Header from "./asserts/Header";
import SlideNav from "./asserts/SlideNav";

function App() {
  return (
    <div className="App">
      <Row className='m-0'>
        <Col lg={3} className='p-0 m-0 d-none d-lg-block'>
          <SlideNav/>
        </Col>
        <Col xs={12} sm={12} lg={9}>
          <Header/>
          <Home/>
          <About/>
          <Education/>
          <Projects/>
          <Articles/>
          <Contact/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
