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
import "./asserts/style-sheets/main.scss";
import {useSelector} from "react-redux";
import {RootState} from "./store/reducer/myReducer";

function App() {
  document.title = "Padma Gnanapriya";
  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  return (
    <div className="App">
      <Row className='m-0'>
        <Col lg={3} xl={2} className={`p-0 m-0 d-none slide-base d-lg-block left-side ${isDark?  'bg-dark': 'bg-light'}`}>
          <SlideNav/>
        </Col>
        <Col xs={12} sm={12} lg={9} xl={10} className='p-0 right-side'>
          <Headroom>
            <Header/>
          </Headroom>
            <Home/>
            <About/>
            <Education/>
            <Skills/>
            <Projects/>
            <Achievements/>
            <Articles/>
            <Contact/>
          <Footer/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
