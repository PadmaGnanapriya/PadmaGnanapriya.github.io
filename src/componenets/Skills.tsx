import React from 'react';
import {Col, Image, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import react from '../asserts/image/skills/react.webp';
import android from '../asserts/image/skills/android.webp';
import apollo from '../asserts/image/skills/apollo.webp';
import bootstrap from '../asserts/image/skills/bootstrap.webp';
import graphql from '../asserts/image/skills/graphql.webp';
import gradle from '../asserts/image/skills/gradle.webp';
import androidStudio from '../asserts/image/skills/androidstudio.webp';
import amazon from '../asserts/image/skills/amazon.webp';
import colab from '../asserts/image/skills/colab.webp';
import express from '../asserts/image/skills/express.webp';
import hibernate from '../asserts/image/skills/hibernate2.webp';
import intelijIDEA from '../asserts/image/skills/intelij.webp';
import java from '../asserts/image/skills/java.webp';
import jira from '../asserts/image/skills/jira.webp';
import jQuery from '../asserts/image/skills/jQuery.webp';
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
import mongodb from '../asserts/image/skills/mongodb2.webp';
import redux from '../asserts/image/skills/redux2.webp';
import node from '../asserts/image/skills/node.webp';
import javafx from '../asserts/image/skills/javafx.webp';
import git from '../asserts/image/skills/git.webp';
import visualCode from '../asserts/image/skills/visualcode.webp';
import netbean from '../asserts/image/skills/netbean.webp';
import seenBuilder from '../asserts/image/skills/seenbuilder.webp';
import postman from '../asserts/image/skills/postman.webp';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import LazyLoad from "react-lazyload";
// import flutter from './skills/flutter.webp';
// import firebase from '../asserts/image/skills/firebase.webp';
// import jupiter from '../asserts/image/skills/jupiter.webp';



const Skills: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);

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
  ]


  const renderSkills = () => skills.map((skill: skill, index: number) =>
    <Col data-aos="zoom-in-up" key={"skill"+ index}>
      <LazyLoad height={171}>
      <OverlayTrigger placement="bottom" delay={{show: 500, hide: 0}}  overlay={<Tooltip id={index + "-skill"}>
        {skill.tooltip}</Tooltip>}><Image src={skill.image} alt='Language' width={170} height={66} className='languageIcon py-1'/>
      </OverlayTrigger>
      </LazyLoad>
    </Col>)

  const tools=[intelijIDEA, webstorm,pycharm, androidStudio,visualCode, netbean, postman, seenBuilder, jira, slack];

  const renderTools = () => tools.map((item: string,index:number)=>
    <Col key={"tool"+index} data-aos="flip-up"><LazyLoad height={85}><Image src={item} alt='Language' className='py-2 languageIcon' width={80} height={85}/></LazyLoad></Col>
  )
  return (
    <div className={isDark ? 'skills-dark py-4' : 'skills py-4'}>
      <h1 id='skills' className='pt-5 pb-3'>Skills</h1>
      <Row className='m-0'>
        {
          renderSkills()
        }
      </Row>
      <h1 className='pt-5 d-none d-md-block pb-3'>Favourite Apps</h1>

      <Row className='m-0 d-none d-md-flex'>
        {
          renderTools()
        }
      </Row>
    </div>
  );
}

export default Skills;
