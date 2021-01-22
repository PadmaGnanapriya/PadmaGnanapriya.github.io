import React from 'react';
import {Card} from "react-bootstrap";

const Articles: React.FC = () => {

  type Article = {
    title: string;
    link: string;
  }

  const myArticles: Article[] = [
    {
      title: "How Mozilla Firefox and Google Chrome Use Process & Threads",
      link: "https://medium.com/swlh/how-mozilla-firefox-and-google-chrome-use-process-threads-7f17a9c79ba0"
    },
    {
      title: "Emulator vs Simulator",
      link: "https://medium.com/swlh/emulator-vs-simulator-1f7cff9571"
    },
    {
      title: "What is a “Variable” in computer programming?",
      link: "https://padmaisuru.medium.com/what-is-a-variable-in-computer-programming-5506164d9482"
    },
    {
      title: "SDLC Methods and Their Advantages and Disadvantages",
      link: "https://medium.com/swlh/sdlc-methods-and-their-advantages-and-disadvantages-62eb27674497"
    },
    {
      title: "What is “dp” in android studio?",
      link: "https://padmaisuru.medium.com/what-is-dp-in-android-studio-10db3825ba83"
    },
    {
      title: "Camel, Pascal, Snake, and Kebab Case",
      link: "https://padmaisuru.medium.com/camel-pascal-snake-and-kebab-case-ba258bae0881"
    },
    {
      title: "A Simple own OS Design & Implementation",
      link: "https://padmaisuru.medium.com/a-simple-own-os-design-implementation-for-reading-hardware-details-e502c49e3d2f"
    },
    {
      title: "Evolution of Windows OS",
      link: "https://padmaisuru.medium.com/evolution-of-windows-os-7b4fad8bdebc"
    },
    {
      title: "Evolution of mac OS",
      link: "https://padmaisuru.medium.com/evolution-of-mac-os-166cff8e6df4"
    },
    {
      title: "Universal Design for Interactive Systems",
      link: "https://padmaisuru.medium.com/universal-design-for-interactive-systems-3c8ae48512e"
    },
    {
      title: "Evaluation techniques for interactive systems",
      link: "https://padmaisuru.medium.com/evaluation-techniques-for-interactive-systems-164ec2f0e4dd"
    },
    {
      title: "Design rules for interactive systems",
      link: "https://padmaisuru.medium.com/design-rules-for-interactive-systems-3244a389fe2e"
    },
    {
      title: "Software Licensing",
      link: "https://padmaisuru.medium.com/software-licensing-29028ee03e33"
    },
    {
      title: "Ethical Whistleblowing",
      link: "https://padmaisuru.medium.com/ethical-whistle-blowing-cf5f8794fc35"
    }
  ];

  const renderArticleList = () => myArticles.map((item: Article, index: number) =>
    <a key={index} href={item.link} target='_blank'>
      <Card body className='m-1 article text-left' style={{width: '47%', float: 'left'}}><span>{item.title}</span>
      </Card></a>);

  return (
    <div className='articles'>
      <h1 id='articles' className='pt-5 mt-2'>My medium articles</h1>
      {renderArticleList()}

    </div>
  );
}

export default Articles;
