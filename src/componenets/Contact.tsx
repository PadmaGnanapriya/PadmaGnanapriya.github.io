import React from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Contact: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  return (
    <div className={isDark ? 'contact-dark py-3 px-3 px-md-4 px-lg-5' : 'contact py-3 px-3 px-md-4 px-lg-5'}>
      <h1 className='pt-5 mt-2 pb-3'>Contact me</h1>
      <Row className='m-0 p-0'>
        <Col xs={12} lg={5} className='m-0 p-0'>
          <Card data-aos="zoom-in" body id='contact' className='m-0'>
            <Row className='mt-1'>
              <Col className='text-left pl-4' xs={12} sm={4}>Email</Col>
              <Col className='text-left pl-4' xs={12} sm={8}>
                <OverlayTrigger placement="bottom" delay={{show: 500, hide: 0}} overlay={<Tooltip id={"-skill"}>
                  Click me to mail</Tooltip>}>
                  <a href="mailto:padmaisuru@gmail.com">padmaisuru@gmail.com</a>
                </OverlayTrigger>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col className='text-left pl-4' xs={12} sm={4}>SMS</Col>
              <Col className='text-left pl-4' xs={12} sm={8}>
                <OverlayTrigger placement="bottom" delay={{show: 500, hide: 0}} overlay={<Tooltip id={"-skill"}>
                  Click me to sms</Tooltip>}>
                  <a href="sms:+94766328189">+94 766 328 189</a>
                </OverlayTrigger>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col className='text-left pl-4' xs={12} sm={4}>Call</Col>
              <Col className='text-left pl-4' xs={12} sm={8}>
                <OverlayTrigger placement="bottom" delay={{show: 500, hide: 0}} overlay={<Tooltip id={"-skill"}>
                  Click me to call</Tooltip>}>
                  <a href="tel:+94766328189">+94 766 328 189</a>
                </OverlayTrigger>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col className='text-left pl-4' xs={12} sm={4}>WhatsApp</Col>
              <Col className='text-left pl-4' xs={12} sm={8}>
                <OverlayTrigger placement="bottom" delay={{show: 500, hide: 0}} overlay={<Tooltip id={"-skill"}>
                  Click me to whatsApp</Tooltip>}>
                  <a href="https://api.whatsapp.com/send?phone=+94766328189">+94 766 328 189</a>
                </OverlayTrigger>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={12} lg={7} className='m-0 p-0'>
          <Card className='m-0 ml-lg-2 p-2'>

            <div className="styled-input">
              <input type="text" required/>
              <label>Name</label>
              <span/>
            </div>
            <div className="styled-input">
              <input type="email" required/>
              <label>Email</label>
              <span/>
            </div>
            <div className="styled-input">
              <input type="text" required/>
              <label>Contact Number</label>
              <span/>
            </div>
            <div className="styled-input wide">
              <textarea required/>
              <label>Message</label>
              <span/>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Contact;
