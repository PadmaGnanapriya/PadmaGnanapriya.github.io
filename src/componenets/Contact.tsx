import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Button, Card, Col, Form, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import AOS from "aos";
import "aos/dist/aos.css";
import publicIp from 'public-ip';

AOS.init();

const Contact: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);
  const[name, setName] = useState<string>('');
  const[email, setEmail] = useState<string>('');
  const[contact, setContact] = useState<string>('');
  const[message, setMessage] =useState<string>('');
  const[browser, setBrowser]=useState<string>("Undefined");
  const[address, setAddress]=useState<string>('');


  useEffect(() => {
    if(navigator.onLine){
      const getUA = () => {
        let device = "Unknown";
        const ua = {
          "Generic Linux": /Linux/i,
          "Android": /Android/i,
          "BlackBerry": /BlackBerry/i,
          "Bluebird": /EF500/i,
          "Chrome OS": /CrOS/i,
          "Datalogic": /DL-AXIS/i,
          "Honeywell": /CT50/i,
          "iPad": /iPad/i,
          "iPhone": /iPhone/i,
          "iPod": /iPod/i,
          "macOS": /Macintosh/i,
          "Windows": /IEMobile|Windows/i,
          "Zebra": /TC70|TC55/i,
        }
        // @ts-ignore
        Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
        return device;
      }

      const BrowserDetect = () => {
        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1) {
          setBrowser('Opera');
        } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
          setBrowser('Chrome');
        } else if (navigator.userAgent.indexOf("Safari") !== -1) {
          setBrowser('Safari');
        } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
          setBrowser('Firefox');
        } else if ((navigator.userAgent.indexOf("MSIE") !== -1)) {
          setBrowser('IE');
        }
      }
      BrowserDetect();
      (async () => {setAddress (await publicIp.v4());
        await (
          fetch(`https://docs.google.com/forms/d/e/1FAIpQLSeGernzdCiIhfkxreab4BFc15WG_9QLqnneBXc9d8RUfpFfyg/formResponse?entry.7345508=${address}&entry.98424334=country&entry.1201372642=city&entry.2060483585=${browser}&entry.900514976=PadmaReact&entry.1590939237=Location&entry.2078832264=${getUA()}&entry.2144518207=${navigator.platform}`, {
            method: 'POST',
            mode: 'no-cors',
            headers: new Headers(),
          }).then((res) => res.json())
            .then(() => console.log(''))
            .catch((err) => console.log(err))
        )
      })();
    }
    // console.clear();
  },[address] )


  const handleOnSubmit = async (event:FormEvent) => {
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
    await (
        fetch(`https://docs.google.com/forms/d/e/1FAIpQLSeGernzdCiIhfkxreab4BFc15WG_9QLqnneBXc9d8RUfpFfyg/formResponse?entry.7345508=${address}&entry.98424334=${name}&entry.1201372642=${name}&entry.2060483585=${email}&entry.900514976=PadmaReact&entry.1590939237=${contact}&entry.2078832264=ooo&entry.2144518207=${message}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: new Headers(),
      }).then((res) => res.json())
        .then(() => console.log(''))
        .catch((err) => console.log(err))
    )

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
        <Col xs={12} lg={5} className='mx-0 p-0 my-1'>
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

        <Col xs={12} lg={7} className='mx-0 p-0  my-1'>
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
                  <textarea onChange={(e:ChangeEvent<HTMLTextAreaElement>)=> setMessage(e.target.value)} required/>
                  <label>Message</label>
                  <span/>
                </Col>
                <Col xs={12} >
                  <Button type='submit' className='px-5 py-2 mb-3' variant={isDark? 'dark':'info'}>Post to Padma</Button>
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
