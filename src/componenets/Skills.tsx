import React from 'react';
import {Col, Image, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import react from '../asserts/images/react.webp';
import android from '../asserts/images/android.webp';
import apollo from '../asserts/images/apollo.webp';
import bootstrap from '../asserts/images/bootstrap.webp';
import graphql from '../asserts/images/graphql.webp';
import gradle from '../asserts/images/gradle.webp';
import androidStudio from '../asserts/images/androidstudio.webp';
import amazon from '../asserts/images/aws.webp';
import colab from '../asserts/images/colab.webp';
import express from '../asserts/images/express.webp';
import firebase from '../asserts/images/firebase.webp';
import hibernate from '../asserts/images/hibernate.webp';
import intelijIDEA from '../asserts/images/intelij.webp';
import java from '../asserts/images/java.webp';
import jira from '../asserts/images/jira.webp';
import jQuery from '../asserts/images/jQuery.webp';
import jupiter from '../asserts/images/jupiter.webp';
import kotlin from '../asserts/images/kotlin.webp';
import maven from '../asserts/images/maven.webp';
import mysql from '../asserts/images/mysql.webp';
import nginx from '../asserts/images/nginx.webp';
import npm from '../asserts/images/npm.webp';
import php from '../asserts/images/php.webp';
import pycharm from '../asserts/images/pycharm.webp';
import scss from '../asserts/images/scss.webp';
import selenium from '../asserts/images/selenium.webp';
import slack from '../asserts/images/slack.webp';
import springBoot from '../asserts/images/springboot.webp';
import web from '../asserts/images/web.webp';
import webstorm from '../asserts/images/webstorm.webp';
import typescript from '../asserts/images/typescript.webp';
import python from '../asserts/images/python.webp';
import mongodb from '../asserts/images/mongo.webp';
import redux from '../asserts/images/redux.webp';
import node from '../asserts/images/node.webp';
import javafx from '../asserts/images/javafx.webp';
import git from '../asserts/images/git.webp';
import visualCode from '../asserts/images/visualcode.webp';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
// import flutter from './images/flutter.webp';

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
      <OverlayTrigger placement="bottom" delay={{show: 500, hide: 0}} overlay={<Tooltip id={index + "-skill"}>
        {skill.tooltip}</Tooltip>}><img src={skill.image} alt='Language' className='py-2 languageIcon' width={170}/>
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
      <Row className='m-0 d-none d-md-flex skills'>
        <Col data-aos="flip-up"><Image src={intelijIDEA} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col data-aos="flip-up"><Image src={webstorm} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col data-aos="flip-up"><Image src={pycharm} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col data-aos="flip-up"><Image src={androidStudio} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col data-aos="flip-up"><Image src={visualCode} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col data-aos="flip-up"><Image src={jira} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col data-aos="flip-up"><Image src={slack} alt='Language' className='py-2 languageIcon' width={85}/></Col>
      </Row>
    </div>
  );
}

export default Skills;
