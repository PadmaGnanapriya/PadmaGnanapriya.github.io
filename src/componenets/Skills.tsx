import React from 'react';
import {Col, Image, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import react from '../asserts/images/react.png';
import android from '../asserts/images/android.png';
import apollo from '../asserts/images/apollo.png';
import bootstrap from '../asserts/images/bootstrap.png';
import graphql from '../asserts/images/graphql.png';
import gradle from '../asserts/images/gradle.png';
import androidStudio from '../asserts/images/androidstudio.png';
import amazon from '../asserts/images/aws.png';
import colab from '../asserts/images/colab.png';
import express from '../asserts/images/express.png';
import firebase from '../asserts/images/firebase.png';
import hibernate from '../asserts/images/hibernate.png';
import intelijIDEA from '../asserts/images/intelij.png';
import java from '../asserts/images/java.png';
import jira from '../asserts/images/jira.png';
import jQuery from '../asserts/images/jQuery.png';
import jupiter from '../asserts/images/jupiter.png';
import kotlin from '../asserts/images/kotlin.png';
import maven from '../asserts/images/maven.png';
import mysql from '../asserts/images/mysql.png';
import nginx from '../asserts/images/nginx.png';
import npm from '../asserts/images/npm.png';
import php from '../asserts/images/php.png';
import pycharm from '../asserts/images/pycharm.png';
import scss from '../asserts/images/scss.png';
import selenium from '../asserts/images/selenium.png';
import slack from '../asserts/images/slack.png';
import springBoot from '../asserts/images/springboot.png';
import web from '../asserts/images/web.png';
import webstorm from '../asserts/images/webstorm.png';
import typescript from '../asserts/images/typescript.png';
import python from '../asserts/images/python.png';
import mongodb from '../asserts/images/mongo.png';
import redux from '../asserts/images/redux.png';
import node from '../asserts/images/node.png';
import javafx from '../asserts/images/javafx.png';
import git from '../asserts/images/git.png';
import github from '../asserts/images/github.png';
import visualCode from '../asserts/images/visualcode.png';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
// import flutter from './images/flutter.png';

const Skills: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);


  return (
    <div className={isDark ? 'skills-dark py-4' : 'skills py-4'}>
      <h1 id='skills' className='pt-5'>Skills</h1>
      <Row className='m-0'>
        <Col>
          <OverlayTrigger
            placement="bottom"
            delay={{show: 500, hide: 0}}
            overlay={<Tooltip id="java">Java</Tooltip>}>
            <Image src={java} alt='Language' className='py-2 languageIcon' width={170}/>
          </OverlayTrigger>

        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="web">Html 5, CSS 3, EcmaScript 6</Tooltip>}
        ><img src={web} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="ts">TypeScript</Tooltip>}
        ><img src={typescript} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="php">PHP</Tooltip>}
        ><img src={php} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="python">Python 3</Tooltip>}
        ><img src={python} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="kotlin">Kotlin</Tooltip>}
        ><img src={kotlin} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="mongodb">MongoDb</Tooltip>}
        ><img src={mongodb} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="mysql">MySQL</Tooltip>}
        ><img src={mysql} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="react">React JS</Tooltip>}
        ><img src={react} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="redux">Redux</Tooltip>}
        ><img src={redux} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="graphql">GraphQL</Tooltip>}
        ><img src={graphql} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="apollo">Apollo Server</Tooltip>}
        ><img src={apollo} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="bootstrap">Bootstrap 4</Tooltip>}
        ><img src={bootstrap} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="scss">SCSS</Tooltip>}
        ><img src={scss} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="jQuery">jQuery</Tooltip>}>
          <img src={jQuery} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="express">Express JS</Tooltip>}>
          <img src={express} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="node">Node Js</Tooltip>}>
          <img src={node} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="nginx">Nginx</Tooltip>}>
          <img src={nginx} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="amazon">Amazon web services</Tooltip>}>
          <img src={amazon} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="firebase">Firebase</Tooltip>}>
          <img src={firebase} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        {/*<Col><OverlayTrigger
            placement="bottom"
            delay={{ show: 500, hide: 0 }}
            overlay={<Tooltip id="java"></Tooltip>}
          ><img src={angular} alt='Language' className='py-2 languageIcon' width={170}/>
          </OverlayTrigger>
</Col>*/}
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="selenium">Selenium</Tooltip>}>
          <img src={selenium} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="javafx">JavaFX</Tooltip>}>
          <img src={javafx} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="hibernate">Hibernate</Tooltip>}>
          <img src={hibernate} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="springBoot">SpringBoot</Tooltip>}>
          <img src={springBoot} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="android">Android</Tooltip>}
        ><img src={android} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        {/*<Col><OverlayTrigger
            placement="bottom"
            delay={{ show: 500, hide: 0 }}
            overlay={<Tooltip id="java"></Tooltip>}
          ><img src={flutter} alt='Language' className='py-2 languageIcon' width={170}/>
          </OverlayTrigger>
</Col>*/}
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="colab">Google Colabs</Tooltip>}>
          <img src={colab} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="jupiter">Jupiter notebook, jupiter lab</Tooltip>}>
          <img src={jupiter} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="npm">Node Package Manager</Tooltip>}>
          <img src={npm} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="gradle">Gradle</Tooltip>}>
          <img src={gradle} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="maven">Maven</Tooltip>}>
          <img src={maven} alt='Language' className='py-2 languageIcon' width={170}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="git">Git version control system</Tooltip>}>
          <img src={git} alt='Language' className='py-2 languageIcon' width={85}/>
        </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger
          placement="bottom"
          delay={{show: 500, hide: 0}}
          overlay={<Tooltip id="github">GitHub(cloud-based hosting service)</Tooltip>}>
          <img src={github} alt='Language' className='py-2 languageIcon' width={85}/>
        </OverlayTrigger>
        </Col>

      </Row>
      <Row className='m-0 d-none d-md-flex skills'>
        <Col><Image src={intelijIDEA} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col><Image src={webstorm} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col><Image src={pycharm} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col><Image src={androidStudio} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col><Image src={visualCode} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col><Image src={jira} alt='Language' className='py-2 languageIcon' width={85}/></Col>
        <Col><Image src={slack} alt='Language' className='py-2 languageIcon' width={85}/></Col>


      </Row>
    </div>
  );
}

export default Skills;
