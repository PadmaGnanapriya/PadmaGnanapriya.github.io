import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Button, Card, Col, Form, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  const[name, setName] = useState<string>('');
  const[email, setEmail] = useState<string>('');
  const[contact, setContact] = useState<string>('');
  const[message, setMessage] =useState<string>('');

  const handleOnSubmit = (event:FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if(email.slice(email.length-3)!=='com'){
      alert(email.slice(3));
      alert("Email is not correct");
      return;
    }
    const phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(!contact.match(phoneno)){
      alert("Contact number is not correct")
      return;
    }




    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );

    Array.from(document.querySelectorAll("textarea")).forEach(
      textarea => (textarea.value = "")
    );
  }


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
          <Card data-aos="zoom-in" className='m-0 ml-lg-2 p-2'>
            <Form onSubmit={handleOnSubmit}>
              <Row>
                <Col xs={12} className="styled-input">
                  <input type="text" onChange={(e:ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} required/>
                  <label>Name</label>
                  <span/>
                </Col>
                <Col  xs={12} className="styled-input">
                  <input type="email" onChange={(e:ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} required/>
                  <label>Email</label>
                  <span/>
                </Col>
                <Col  xs={12} className="styled-input">
                  <input type="text" onChange={(e:ChangeEvent<HTMLInputElement>)=> setContact(e.target.value)} required/>
                  <label>Contact Number</label>
                  <span/>
                </Col>
                <Col  xs={12} className="styled-input wide">
                  <textarea onChange={(e:ChangeEvent<HTMLTextAreaElement>)=> setName(e.target.value)} required/>
                  <label>Message</label>
                  <span/>
                </Col>
                <Col xs={12} >
                  <Button type='submit'>Post to Padma</Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Contact;
