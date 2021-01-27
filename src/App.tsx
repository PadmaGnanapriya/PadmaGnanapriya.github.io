import React, {Suspense} from 'react';
import './App.css';
import {Col, Row} from 'react-bootstrap';
import SlideNav from "./componenets/SlideNav";
import Header from "./componenets/Header";
import Headroom from "react-headroom";
import "./asserts/style-sheets/main.scss";
import {useSelector} from "react-redux";
import {RootState} from "./store/reducer/myReducer";


const Home = React.lazy(() => import("./componenets/Home"));
const About = React.lazy(() => import("./componenets/About"));
const Education = React.lazy(() => import("./componenets/Education"));
const Projects = React.lazy(() => import("./componenets/Projects"));
const Articles = React.lazy(() => import("./componenets/Articles"));
const Contact = React.lazy(() => import("./componenets/Contact"));
const Footer = React.lazy(() => import("./componenets/Footer"));
const Skills = React.lazy(() => import("./componenets/Skills"));
const Achievements = React.lazy(() => import("./componenets/Achievements"));

function App() {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  return (
    <div className="App">
      <Row className='m-0'>
        <Col lg={3} xl={2}
             className={`p-0 m-0 d-none slide-base d-lg-block left-side ${isDark ? 'bg-dark' : 'bg-light'}`}>
          <Suspense fallback={<div>Loading...</div>}>
            <SlideNav/>
          </Suspense>
        </Col>
        <Col xs={12} sm={12} lg={9} xl={10} className='p-0 right-side'>
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </Col>
      </Row>
    </div>
  );
}

export default App;
