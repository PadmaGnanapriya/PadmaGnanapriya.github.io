import React from 'react';
import {Col, Row} from "react-bootstrap";

const Footer: React.FC = () => {
  return (
      <div className='py-3 bg-dark footer'>
        <Row className="m-0">
          <Col className="social-media py-1 py-sm-3">
            <a href="https://www.linkedin.com/in/padma-gnanapriya-16b515180/" target="_blank" rel="noopener"
               aria-label="Follow me on linkedin" className="fa fa-linkedin"/>
            <a href="https://www.facebook.com/padma.gnanapriya/" target="_blank" rel="noopener"
               aria-label="Follow me on facebook" className="fa fa-facebook"/>
            <a href="https://padmaisuru.medium.com/" target="_blank" rel="noopener"
               aria-label="Follow me on medium" className="fa fa-medium"/>
            <a href="https://github.com/PadmaGnanapriya" target="_blank" rel="noopener"
               aria-label="Follow me on github" className="fa fa-github"/>
          </Col>

        </Row>
        <span className='text-light'>© Designed and Developed by Padma Gnanapriya</span>

      </div>
  );
}

export default Footer;
