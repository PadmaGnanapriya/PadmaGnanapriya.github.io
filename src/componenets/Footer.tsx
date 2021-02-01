import React from 'react';
import {Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";

const Footer: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  return (
    <div className={`'py-4' ${isDark ? 'footer-dark' : 'footer-light'}`}>
      <Row className="m-0 pt-2">
        <Col className="social-media py-1 py-sm-3">
          <a href="https://www.linkedin.com/in/padma-gnanapriya-16b515180/" target="_blank" rel="noreferrer"
             aria-label="Follow me on linkedin" className="fa fa-linkedin"/>
          <a href="https://www.facebook.com/padma.gnanapriya/" target="_blank" rel="noreferrer"
             aria-label="Follow me on facebook" className="fa fa-facebook"/>
          <a href="https://padmaisuru.medium.com/" target="_blank" rel="noreferrer"
             aria-label="Follow me on medium" className="fa fa-medium"/>
          <a href="https://github.com/PadmaGnanapriya" target="_blank" rel="noreferrer"
             aria-label="Follow me on github" className="fa fa-github"/>
        </Col>
      </Row>
      <div className='text-light pb-3'>© Designed and Developed by Padma Gnanapriya</div>
    </div>
  );
}

export default Footer;
