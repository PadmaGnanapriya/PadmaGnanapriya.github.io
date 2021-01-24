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
         style={{borderRadius: `${100-viewYPosition*20}% ${100-viewYPosition*20}% 0% 0%`}}
    >
      <h1 id='about' className='pt-5'>Let me tell<br/> who I am</h1>

      <p className='text-left'>Hello, I'm Padma Gnanapriya, Undergraduate at University of Kelaniya BSc(Hons)
        Software Engineering. I am good at being a team player as well as leading a team. By facing the dynamic
        changes in the rapidly growing IT industry, I am keen on Web development and Data Science, also looking
        forward to working as a Software Engineer in challenging assignments. I also have interest in Blogging,
        Astronomy, Mathematics, Electrics, and active lifestyle.</p>
    </div>
  );
}

export default About;
