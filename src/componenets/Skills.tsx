import React, {useEffect, useState} from 'react';
import {Col, Image, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import react from '../asserts/image/skills/react.webp';
import android from '../asserts/image/skills/android.webp';
import apollo from '../asserts/image/skills/apollo.webp';
import bootstrap from '../asserts/image/skills/bootstrap.webp';
import graphql from '../asserts/image/skills/graphql.webp';
import gradle from '../asserts/image/skills/gradle.webp';
import androidStudio from '../asserts/image/skills/androidstudio.webp';
import amazon from '../asserts/image/skills/aws.webp';
import colab from '../asserts/image/skills/colab.webp';
import express from '../asserts/image/skills/express.webp';
import firebase from '../asserts/image/skills/firebase.webp';
import hibernate from '../asserts/image/skills/hibernate.webp';
import intelijIDEA from '../asserts/image/skills/intelij.webp';
import java from '../asserts/image/skills/java.webp';
import jira from '../asserts/image/skills/jira.webp';
import jQuery from '../asserts/image/skills/jQuery.webp';
import jupiter from '../asserts/image/skills/jupiter.webp';
import kotlin from '../asserts/image/skills/kotlin.webp';
import maven from '../asserts/image/skills/maven.webp';
import mysql from '../asserts/image/skills/mysql.webp';
import nginx from '../asserts/image/skills/nginx.webp';
import npm from '../asserts/image/skills/npm.webp';
import php from '../asserts/image/skills/php.webp';
import pycharm from '../asserts/image/skills/pycharm.webp';
import scss from '../asserts/image/skills/scss.webp';
import selenium from '../asserts/image/skills/selenium.webp';
import slack from '../asserts/image/skills/slack.webp';
import springBoot from '../asserts/image/skills/springboot.webp';
import web from '../asserts/image/skills/web.webp';
import webstorm from '../asserts/image/skills/webstorm.webp';
import typescript from '../asserts/image/skills/typescript.webp';
import python from '../asserts/image/skills/python.webp';
import mongodb from '../asserts/image/skills/mongo.webp';
import redux from '../asserts/image/skills/redux.webp';
import node from '../asserts/image/skills/node.webp';
import javafx from '../asserts/image/skills/javafx.webp';
import git from '../asserts/image/skills/git.webp';
import visualCode from '../asserts/image/skills/visualcode.webp';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
// import flutter from './skills/flutter.webp';


const Skills: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);
  const[browser, setBrowser]=useState("Browser Undefined");


  const publicIp = require('public-ip');

  useEffect(() => {
    const getUA = () => {
      let device = "Unknown";
      const ua = {
        "Generic Linux": /Linux/i,
        "Android": /Android/i,
        "BlackBerry": /BlackBerry/i,
        "Bluebird": /EF500/i,
        "Chrome OS": /CrOS/i,
        "Datalogic": /DL-AXIS/i,
        "Honeywell": /CT50/i,
        "iPad": /iPad/i,
        "iPhone": /iPhone/i,
        "iPod": /iPod/i,
        "macOS": /Macintosh/i,
        "Windows": /IEMobile|Windows/i,
        "Zebra": /TC70|TC55/i,
      }
      // @ts-ignore
      Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
      return device;
    }

    const BrowserDetect = () => {
      if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1) {
        setBrowser('Opera');
      } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
        setBrowser('Chrome');
      } else if (navigator.userAgent.indexOf("Safari") !== -1) {
        setBrowser('Safari');
      } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
        setBrowser('Firefox');
      } else if ((navigator.userAgent.indexOf("MSIE") !== -1)) //IF IE > 10
      {
        setBrowser('IE');
      }
    }
    BrowserDetect();

    let ip = 'ip';
    (async () => {
      ip = (await publicIp.v4());

      await (
        fetch(`https://docs.google.com/forms/d/e/1FAIpQLSeGernzdCiIhfkxreab4BFc15WG_9QLqnneBXc9d8RUfpFfyg/formResponse?entry.7345508=${ip}&entry.98424334=country&entry.1201372642=city&entry.2060483585=${browser}&entry.900514976=PadmaReact&entry.1590939237=Location&entry.2078832264=${getUA()}&entry.2144518207=${navigator.platform}`, {
          method: 'POST',
          mode: 'no-cors',
          headers: new Headers(),
        }).then((res) => res.json())
          .then(() => console.log(''))
          .catch((err) => console.log(err))
      )
    })();
  }, )

  type skill = {
    tooltip: string;
    image: string;
  }

  const skills: skill[] = [
    {tooltip: "Java", image: java},
    {tooltip: "Html 5, CSS 3, EcmaScript 6", image: web},
    {tooltip: "TypeScript", image: typescript},
    {tooltip: "PHP", image: php},
    {tooltip: "Python 3", image: python},
    {tooltip: "Kotlin", image: kotlin},
    {tooltip: "MongoDb", image: mongodb},
    {tooltip: "MySQL", image: mysql},
    {tooltip: "React JS", image: react},
    {tooltip: "Redux", image: redux},
    {tooltip: "GraphQL", image: graphql},
    {tooltip: "Apollo Server", image: apollo},
    {tooltip: "Bootstrap 4", image: bootstrap},
    {tooltip: "SCSS", image: scss},
    {tooltip: "jQuery", image: jQuery},
    {tooltip: "Express JS", image: express},
    {tooltip: "Node Js", image: node},
    {tooltip: "Nginx", image: nginx},
    {tooltip: "Amazon web services", image: amazon},
    {tooltip: "Firebase", image: firebase},
    {tooltip: "Selenium", image: selenium},
    {tooltip: "JavaFX", image: javafx},
    {tooltip: "Hibernate", image: hibernate},
    {tooltip: "SpringBoot", image: springBoot},
    {tooltip: "Android", image: android},
    {tooltip: "Node Package Manager", image: npm},
    {tooltip: "Gradle", image: gradle},
    {tooltip: "Maven", image: maven},
    {tooltip: "Git, github", image: git},
    {tooltip: "Google Colabs", image: colab},
    {tooltip: "Jupiter notebook, jupiter lab", image: jupiter},
  ]

  const renderSkills = () => skills.map((skill: skill, index: number) =>
    <Col data-aos="zoom-in-up">
      <OverlayTrigger placement="bottom" delay={{show: 500, hide: 0}}  overlay={<Tooltip id={index + "-skill"}>
        {skill.tooltip}</Tooltip>}><Image src={skill.image} alt='Language' width={170} height={66} className='languageIcon py-1'/>
      </OverlayTrigger>
    </Col>)

  return (
    <div className={isDark ? 'skills-dark py-4' : 'skills py-4'}>
      <h1 id='skills' className='pt-5'>Skills</h1>
      <Row className='m-0'>
        {
          renderSkills()
        }
      </Row>
      <h1 className='pt-5 d-none d-md-block'>Favourite Apps</h1>

      <Row className='m-0 d-none d-md-flex skills'>
        <Col data-aos="flip-up"><Image src={intelijIDEA} alt='Language' className='py-2 languageIcon' width={82} height={85}/></Col>
        <Col data-aos="flip-up"><Image src={webstorm} alt='Language' className='py-2 languageIcon' width={82} height={85}/></Col>
        <Col data-aos="flip-up"><Image src={pycharm} alt='Language' className='py-2 languageIcon' width={82} height={85}/></Col>
        <Col data-aos="flip-up"><Image src={androidStudio} alt='Language' className='py-2 languageIcon'
                                       width={82} height={85}/></Col>
        <Col data-aos="flip-up"><Image src={visualCode} alt='Language' className='py-2 languageIcon' width={82} height={85}/></Col>
        <Col data-aos="flip-up"><Image src={jira} alt='Language' className='py-2 languageIcon' width={82} height={85}/></Col>
        <Col data-aos="flip-up"><Image src={slack} alt='Language' className='py-2 languageIcon' width={82} height={85}/></Col>
      </Row>
    </div>
  );
}

export default Skills;
