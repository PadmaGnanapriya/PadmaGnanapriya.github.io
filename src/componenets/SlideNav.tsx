import React, {useState} from 'react';
import {Link} from 'react-scroll';
import Padma from './../asserts/images/padma/Padma.webp';
import Switch from "react-bootstrap/Switch";
import {setDarkTheme} from "../store/action/storeAction";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";


const SlideNav: React.FC = () => {

  const myList: string[] = ["home", "about", "education", "skills", "projects", "achievements", "articles", "contact"]

  const renderList = () => myList.map((item) => <li><Link key={item} activeClass="active" className={`${item} myLink`}
                                                          to={item} spy={true} smooth={true}
                                                          duration={500}>{item}</Link></li>
  )

  const [myBorderRadius, setMyBorderRadius]= useState(0);

  window.onscroll= () => {
    setMyBorderRadius(window.pageYOffset/50);
  }
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

    <div className='vh-100 slide-nav'>
      <br/>
      <img src={Padma} alt="Padma" width={200} style={{ borderRadius: `${myBorderRadius}%`}}/>


      <label className="pt-2 pr-2 pl-1 " onClick={handleOnThemeChange}>
        <Switch className='isDarkModeToggle px-auto' onChange={handleOnThemeChange} checked={isDark}/>
      </label>
      <nav>
        <ul>
          {renderList()}
        </ul>
        {/*<Nav.Link href="#contact">Contact</Nav.Link>*/}
        {/*<Link activeClass="active" className="skills" to="skills" spy={true} smooth={true} duration={500} >skills</Link>*/}
      </nav>
    </div>
  );
}

export default SlideNav;
