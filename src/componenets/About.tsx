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

      <p className='text-left'>I'm Padma, a senior software engineer with a passion for technology and continuous
        learning. I love solving problems, creating innovative solutions, and collaborating with teams.
        I have a strong interest in cloud computing, application performance improvement, and AI and its future impact.
        I believe in personal and professional growth, enjoy taking on challenges, meeting deadlines, and sharing
        my knowledge through tech blogging in my free time. I also love traveling, helping others, and experimenting
        with new ideas.</p>
    </div>
  );
}

export default About;
