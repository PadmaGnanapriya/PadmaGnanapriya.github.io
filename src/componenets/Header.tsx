import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-scroll";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import Switch from "react-bootstrap/Switch";
import {setDarkTheme} from "../store/action/storeAction";

const Header: React.FC = () => {

  const myList: string[] = ["about", "education", "skills", "projects", "achievements", "articles", "contact"]

  const renderList = () => myList.map((item) => <Nav.Link> <Link key={item} activeClass="active" className={item}
                                                                 to={item} spy={true} smooth={true}
                                                                 duration={500}>{item}</Link></Nav.Link>)

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
                            to="home" spy={true} smooth={true} duration={500}>Padma</Link></Navbar.Brand>


        <label className="pt-2 pr-2 pl-1 d-md-none" onClick={handleOnThemeChange}>
          <Switch className='isDarkModeToggle px-auto' onChange={handleOnThemeChange} checked={!isDark}/>
        </label>

        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>



        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          <Nav>
            {renderList()}

            {/*<Nav.Link href="#about">About</Nav.Link>*/}
            {/*<Nav.Link href="#education">Education</Nav.Link>*/}
            {/*<Nav.Link href="#skills">Skills</Nav.Link>*/}
            {/*<Nav.Link href="#projects">Projects</Nav.Link>*/}
            {/*<Nav.Link href="#achievements">Achievements</Nav.Link>*/}
            {/*<Nav.Link href="#articles">Articles</Nav.Link>*/}
            {/*<Nav.Link href="#contact">Contact</Nav.Link>*/}

          </Nav>
          <label className="pt-2 pr-2 pl-1 d-none d-md-block" onClick={handleOnThemeChange}>
            <Switch className='isDarkModeToggle px-auto' onChange={handleOnThemeChange} checked={!isDark}/>
          </label>
        </Navbar.Collapse>


      </Navbar>



    </React.Fragment>
  );
}

export default Header;
