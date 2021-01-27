import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const About: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);
  const viewYPosition: number = useSelector((state: RootState) => state.viewYPosition);


  return (
    <div className={isDark ? 'about-dark py-3 px-3 px-md-4 px-lg-5' : 'about-light about py-3 px-3 px-md-4 px-lg-5'}
         data-aos="zoom-in-up"
         style={{borderRadius: `${100 - viewYPosition * 20}% ${100 - viewYPosition * 20}% 0% 0%`}}>
      <h1 id='about' className='pt-5 pb-3'>Let me tell<br/> who I am</h1>

      <p className='text-left'>I am reading a degree in software engineering at University of Kelaniya Sri Lanka.
        I am good at being a team player as well as leading a team. By facing the dynamic changes in the rapidly
        growing IT industry, I am keen on Web development and I always trying to build a more attractive thing.
        I also have an interest in blogging, astronomy, mathematics and active lifestyle..</p>
    </div>
  );
}

export default About;
