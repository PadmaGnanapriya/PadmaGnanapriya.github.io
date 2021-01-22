import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-scroll";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";

const Header: React.FC = () => {

  const myList: string[] = ["about", "education", "skills", "projects", "achievements", "articles", "contact"]

  const renderList = () => myList.map((item) => <Nav.Link> <Link key={item} activeClass="active" className={item}
                                                                 to={item} spy={true} smooth={true}
                                                                 duration={500}>{item}</Link></Nav.Link>)

  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="md" bg={isDark ? "dark" : "light"} variant={isDark ? "dark" : "light"}
              className={isDark ? 'header-dev' : 'header-dev-dark'}>
        <Navbar.Brand><Link activeClass="active" className="home"
                            to="home" spy={true} smooth={true} duration={500}>Padma Gnanapriya</Link></Navbar.Brand>
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
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
