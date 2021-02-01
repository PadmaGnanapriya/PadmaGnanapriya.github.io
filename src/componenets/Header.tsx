import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-scroll";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import Switch from "react-bootstrap/Switch";
import {setDarkTheme} from "../store/action/storeAction";

const Header: React.FC = () => {

  type myListElement = {
    view: string;
    value: string;
  }
  const myList: myListElement[] = [
    {view: "About", value: "about"},
    {view: "Education", value: "education"},
    {view: "Skills", value: "skills"},
    {view: "Projects", value: "projects"},
    {view: "Achievements", value: "achievements"},
    {view: "Articles", value: "articles",},
    {view: "Contact", value: "contact"}
  ];


  const renderList = () => myList.map((item) => <Nav.Link key={item.view}><Link activeClass="active"
                                                                                className={`${item.value} myLink`}
                                                                                to={item.value}
                                                                                spy={true} smooth={true}
                                                                                duration={500}>{item.view}</Link></Nav.Link>)

  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  const dispatch = useDispatch();
  const handleOnThemeChange = () => {
    if (isDark) {
      dispatch(setDarkTheme(false));
    } else {
      dispatch(setDarkTheme(true));
    }
  }

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="md" bg={isDark ? "dark" : "light"} variant={isDark ? "dark" : "light"}
              className={isDark ? 'header-dev d-lg-none' : 'header-dev-dark d-lg-none'}>
        <Navbar.Brand><Link activeClass="active" className="home"
                            to="home" spy={true} smooth={true} duration={500}>Padma
          <span className='d-none d-sm-inline d-md-none'> Gnananpriya</span>
        </Link></Navbar.Brand>


        <Navbar.Brand className='float-right d-md-none' style={{position: 'fixed', right: '40px', top: '-4px'}}>
          <label className="pt-3 px-1" onClick={handleOnThemeChange}>
            <Switch className='isDarkModeToggle px-auto' onChange={handleOnThemeChange} checked={!isDark}/>
          </label>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{fontSize: '12px', padding: '1px 5px'}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav className='my-nav-list'>
            {renderList()}
          </Nav>
          <label className="pt-3 px-1" onClick={handleOnThemeChange}>
            <Switch className='isDarkModeToggle px-auto d-none d-md-block' onChange={handleOnThemeChange}
                    checked={!isDark}/>
          </label>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
