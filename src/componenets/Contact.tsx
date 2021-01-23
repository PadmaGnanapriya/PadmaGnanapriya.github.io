import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  return (
    <div className={isDark?'contact-dark py-3 px-3 px-md-4 px-lg-5': 'contact py-3 px-3 px-md-4 px-lg-5'}>

    <h1 className='pt-5 mt-2'>Contact me</h1>
      <Card  data-aos="zoom-in" body id='contact' className='contact my-2 mx-auto' style={{maxWidth:'400px'}}>
        <Row className='mt-1'>
          <Col className='text-left pl-4' xs={12} sm={4}>Email</Col>
          <Col className='text-left pl-4' xs={12} sm={8}>
            <a href="mailto:padmaisuru@gmail.com">padmaisuru@gmail.com</a></Col>
        </Row>
        <Row className='mt-3'>
          <Col className='text-left pl-4' xs={12} sm={4}>SMS</Col>
          <Col className='text-left pl-4' xs={12} sm={8}><a href="sms:+94766328189">+94 766 328 189</a></Col>
      </Row>
        <Row className='mt-3'>
          <Col className='text-left pl-4' xs={12} sm={4}>Call</Col>
          <Col className='text-left pl-4' xs={12} sm={8}><a href="tel:+94766328189">+94 766 328 189</a></Col>
      </Row>
        <Row className='mt-3'>
          <Col className='text-left pl-4' xs={12} sm={4}>WhatsApp</Col>
          <Col className='text-left pl-4' xs={12} sm={8}>
            <a href="https://api.whatsapp.com/send?phone=+94766328189">+94 766 328 189</a></Col>
        </Row>
      </Card>



    </div>
  );
}
export default Contact;
