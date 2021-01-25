import React, {useState} from 'react';
import {Link} from 'react-scroll';
import Padma from '../asserts/image/padma/Padma.webp';
import Switch from "react-bootstrap/Switch";
import {setDarkTheme, setViewYPosition} from "../store/action/storeAction";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import {Col, Row} from "react-bootstrap";


const SlideNav: React.FC = () => {
  type myListElement = {
    view: string;
    value: string;
  }
  const myList: myListElement[] = [
    {view: "Home", value: "home"},
    {view: "About", value: "about"},
    {view: "Education", value: "education"},
    {view: "Skills", value: "skills"},
    {view: "Projects", value: "projects"},
    {view: "Achievements", value: "achievements"},
    {view: "Articles", value: "articles",},
    {view: "Contact", value: "contact"}
  ];

  const renderList = () => myList.map((item) => <li><Link key={item.view} activeClass={"active"}
                                                          className={`${item.value} myLink`} to={item.value} spy={true}
                                                          smooth={true} duration={500}>{item.view}</Link></li>)

  const [myBorderRadius, setMyBorderRadius] = useState(0);

  const isDark: boolean = useSelector((state: RootState) => state.isDark);
  const dispatch = useDispatch();
  const handleOnThemeChange = () => {
    if (isDark) {
      dispatch(setDarkTheme(false));
    } else {
      dispatch(setDarkTheme(true));
    }
  }

  window.onscroll = () => {
    setMyBorderRadius(window.pageYOffset / 50);
    dispatch(setViewYPosition(window.pageYOffset / 50));
  }


  return (
    <div className='vh-100 slide-nav mx-auto'>
      <br/>
      <img src={Padma} alt="Padma" width={180} className='ml-4' style={{borderRadius: `${myBorderRadius}%`}}/>
      <label className="pt-1 pr-2 pl-5 ml-5" onClick={handleOnThemeChange}>
        <Switch className='isDarkModeToggle px-auto' onChange={handleOnThemeChange} checked={!isDark}/>
      </label>
      <nav>
        <ul className={isDark ? 'list-dark' : 'list-light'}>
          {renderList()}
        </ul>
      </nav>
      <Row className="p-icon px-3" style={{position: 'fixed', bottom: '20px', margin: 'auto'}}>
        <Col className='p-1' sm={4} xs={4}>
          <div style={{width: "50px"}}>
            <a href="https://www.facebook.com/padma.gnanapriya/" target='_blank' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className="my-icon" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.4"
                      d="M19,4.00860595703125C19,4.1845703125,19,7,19,7C19,7,17,7,17,7C16.447715250169207,7,16,7.447715250169207,16,8C16,8,16,10,16,10C16,10,19,10,19,10C19,10,19,13,19,13C19,13,16,13,16,13C16,13,16,20,16,20C16,20,13,20,13,20C13,20,13,13,13,13C13,13,11,13,11,13C11,13,11,10,11,10C11,10,13,10,13,10C13,10,13,7.5,13,7.5C13,5.56,14.57,4,16.5,4C16.5,4,19,4,19,4M20,2C20,2,4,2,4,2C2.8954305003384135,2,1.9999999999999998,2.8954305003384135,2,4C2,4,2,20,2,20C2,21.104569499661586,2.8954305003384135,22,4,22C4,22,20,22,20,22C21.104569499661586,22,22,21.104569499661586,22,20C22,20,22,4,22,4C22,2.89,21.1,2,20,2C20,2,20,2,20,2"/>
              </svg>
            </a>
          </div>
        </Col>
        <Col className='p-1' sm={4} xs={4}>
          <div style={{width: "50px"}}>
            <a href="https://www.linkedin.com/in/padma-gnanapriya-16b515180" target='_blank' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className="my-icon" stroke="#22C3D4" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.4"
                      d="M18.99139404296875,19C18.8154296875,19,16,19,16,19C16,19,16,13.7,16,13.7C16,12.87157287525381,15.32842712474619,12.2,14.5,12.2C13.67157287525381,12.2,13,12.87157287525381,13,13.7C13,13.7,13,19,13,19C13,19,10,19,10,19C10,19,10,10,10,10C10,10,13,10,13,10C13,10,13,11.2,13,11.2C13.5,10.36,14.59,9.8,15.5,9.8C17.432996624407778,9.8,19,11.367003375592224,19,13.3C19,13.3,19,19,19,19M6.5,8.31C5.5,8.31,4.69,7.5,4.69,6.5C4.69,5.500364602806264,5.500364602806264,4.69,6.5,4.69C7.5,4.69,8.31,5.5,8.31,6.5C8.31,7.499635397193736,7.499635397193736,8.31,6.5,8.31M8,19C8,19,5,19,5,19C5,19,5,10,5,10C5,10,8,10,8,10C8,10,8,19,8,19M20,2C20,2,4,2,4,2C2.89,2,2,2.89,2,4C2,4,2,20,2,20C2,21.104569499661586,2.8954305003384135,22,4,22C4,22,20,22,20,22C21.104569499661586,22,22,21.104569499661586,22,20C22,20,22,4,22,4C22,2.89,21.1,2,20,2C20,2,20,2,20,2"/>
              </svg>
            </a>
          </div>
        </Col>
        <Col className='p-1' sm={4} xs={4}>
          <div style={{width: "50px"}}>
            <a href="https://github.com/PadmaGnanapriya" target='_blank' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 -2 28 28" stroke="currentColor">
                <path className="my-icon" stroke="purple" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.2"
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/>
              </svg>
            </a>
          </div>
        </Col>
      </Row>

    </div>
  );
}

export default SlideNav;
