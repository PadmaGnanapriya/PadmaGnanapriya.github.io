import React from 'react';
import {Card} from "react-bootstrap";

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

  const renderAchievements = () => myAchievements.map((item: Achievement, index: number) =>
    <a key={index} href={item.link} target='_blank'><Card body className='m-1 text-left achievement'
        style={{width: '47%', float: 'left'}}><span>{item.title}</span></Card></a>);

  return (
    <div className='achievements'>
      <h1 id='achievements' className='pt-5 mt-2'>Achievements</h1>
      {
        renderAchievements()
      }
    </div>
  );
}

export default Achievements;
