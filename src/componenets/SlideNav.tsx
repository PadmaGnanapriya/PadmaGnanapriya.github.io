import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

const SlideNav: React.FC = () => {
  return (
      <div className='vh-100 slide-nav'
           style={{position: 'fixed', width: '100%'}}
      >
        <br/>
        <nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#achievements">Achievements</Nav.Link>
          <Nav.Link href="#articles">Articles</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </nav>
      </div>
  );
}

export default SlideNav;
