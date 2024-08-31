import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Education: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  return (
    <div className={isDark ? 'education-dark py-3 px-3 px-md-4 px-lg-5' : 'education-light py-3 px-3 px-md-4 px-lg-5'}>
      <h1 id='education' className='pt-5 mt-2 pb-3'>Education</h1>

      <div data-aos="fade-up">
        <a href='https://www.kln.ac.lk/' target='_blank' rel="noreferrer"><h2 className='text-left'>
          <strong>Bachelor of Science Honours in Software Engineering</strong><br/>
          <i>University of Kelaniya, Sri Lanka</i><br/>
          <small>Second Class Upper Division Honours (GPA: 3.54/4)</small></h2></a>
        <p className='text-left'>I graduated with a degree in Software Engineering from the University of Kelaniya,
          earning a Second Class Upper Division Honours. During my studies, I specialized in web development,
          data science, and mobile development in my third and fourth years. I also conducted academic research
          on creating 3D websites from scratch. I learned many important theories and gained hands-on experience
          with different technologies through various projects, which helped me develop strong skills in
          programming and problem-solving.
        </p>
        <br/>
      </div>

      <div data-aos="fade-up">
        <a href='https://www.ijse.lk/' target='_blank' rel="noreferrer"><h2 className='text-left'>IJSE</h2></a>
        <p className='text-left'>I followed the CMJD(Comprehensive Master Java Developer) Professional diploma.
          I learnt modern software design and developing methodologies (architectural designs and using depth of
          object orientation) in java, JavaFX, hibernate, Angular, NodeJs, etc.</p>
        <br/>
      </div>

      <div data-aos="fade-up">
        <a href='https://www.mahindacollege.lk/' target='_blank' rel="noreferrer"><h2 className='text-left'>
          Mahinda College Galle</h2>
        </a>
        <p className='text-left'> I did my O/Ls and A/Ls at Mahinda College, Galle. I got 7A s and 2B s for my OLs.
          In 2017 I faced for A/L
          examination in Physical Stream and obtained the following results;
          <br/><span style={{color: "red"}}>&#9734;</span> Combined Maths - A
          <br/><span style={{color: "red"}}>&#9734;</span> Physics - A
          <br/><span style={{color: "red"}}>&#9734;</span> Chemistry - C
          <br/><br/><b>Activities and Societies:</b>
          <br/> I was an active member of the school's astronomy club, Buddhist association, Environmental
          club and world organisation of scout moment, and I was an outstanding player in the school's chess team.</p>
        <br/>
      </div>

      <div data-aos="fade-up">
        <a href='https://www.facebook.com/polpagodadharmapalacollege'><h2 className='text-left'>Polpagoda Darmapala MV.
        </h2></a>
        <p className='text-left'>I passed the grade 5 scholarship exam at Polpogoda Dharmapala MV and I entered to
          Mahinda College Galle.</p>
      </div>
      <br/>
      <br/>

    </div>
  );
}

export default Education;
