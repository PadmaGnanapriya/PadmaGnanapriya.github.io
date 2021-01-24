import React from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Achievements: React.FC = () => {

  type Achievement = {
    title: string;
    link: string;
  }

  const myAchievements: Achievement[] = [
    {
      title: "Agile with Atlassian Jira",
      link: "https://coursera.org/share/bf8bcd873cad0b0ab33c17dfb6cac840"
    },
    {
      title: "Software Processes and Agile Practices",
      link: "https://coursera.org/share/4a60f5e6beddb67b084eeb1ce130f653"
    },
    {
      title: "AWS Fundamentals: Going Cloud-Native",
      link: "https://coursera.org/share/bf279bc283d7c3d4e844da6d07e42654"
    },
    {
      title: "AWS Fundamentals: Building Serverless Applications",
      link: "https://coursera.org/share/23fcf715043113d7d1b58fea1c3a5edd"
    },
    {
      title: "Essential Google Cloud Infrastructure: Core Services",
      link: "https://coursera.org/share/5254303444718da7f0a4582cb4ed2a06"
    },
    {
      title: "Introduction to Augmented Reality and ARCore",
      link: "https://coursera.org/share/dd553a3b8bd01c9b5f3c743a298f4505"
    },
  ];
  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  const renderAchievements = () => myAchievements.map((item: Achievement, index: number) =>
    <Col data-aos={index%2===1? "fade-up-left": "fade-up-right"} xs={12} sm={12} lg={6} className='p-0'>
      <OverlayTrigger placement="bottom" delay={{show: 500, hide: 0}} overlay={<Tooltip id={index + "-skill"}>
        Click me to show the certificate</Tooltip>}>
        <a key={index} href={item.link} target='_blank'>
          <Card body className='m-1 text-left achievement'><span>{item.title}</span></Card></a>
      </OverlayTrigger>

    </Col>);

  return (
    <div className={isDark?'achievements-dark py-3 px-3 px-md-4 px-lg-5': 'achievements py-3 px-3 px-md-4 px-lg-5'}>
      <h1 id='achievements' className='pt-5'>Achievements</h1>
      <Row>
        {
          renderAchievements()
        }
      </Row>
    </div>
  );
}

export default Achievements;
