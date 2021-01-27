import React from 'react';
import {Button, Card, Col, OverlayTrigger, Popover, Row} from 'react-bootstrap';
import project1 from "../asserts/image/projects/project1.webp";
import pureHtml from "../asserts/image/projects/purehtml.webp";
import pureHtml2 from "../asserts/image/projects/purehtml2.webp";
import simpleOs from "../asserts/image/projects/os.webp";
import retrofit from "../asserts/image/projects/retrofit.webp";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";

const Projects: React.FC = () => {
  const isDark: boolean = useSelector((state: RootState) => state.isDark);

  type myProject = {
    image: string;
    title: string;
    description: string;
    viewLink: string;
    overlay: any;
    sourceCodeLink: string | null;
  }


  const popoverProject1 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">E-commerce site</Popover.Title>
      <Popover.Content>
        <a href='https://github.com/PadmaGnanapriya/p-redux-store' target='_blank' rel="noreferrer">
          React frontend</a><br/>
        <a href='https://github.com/PadmaGnanapriya/type-graph-express-api' target='_blank' rel="noreferrer">
          GraphQL backend</a>
      </Popover.Content>
    </Popover>
  );

  const myProjectList: myProject[] = [
    {
      image: project1,
      title: "Completed E-Commerce Site with backend & admin panel",
      description: "React | Redux | GraphQL | Boostrap | SCSS | MongoDb | Apollo | AWS S3 buckets, EC2 instance, Route 53 | Express | Git | JIRA",
      viewLink: 'https://www.cominglevel.com/',
      overlay: popoverProject1,
      sourceCodeLink: null
    },
    {
      image: pureHtml,
      title: "Pure HTML CSS JS site with responsive",
      description: "HTML 5 | CSS 3 | JavaScript",
      viewLink: "https://nnybsswi6mfwyhnhh4nh8a-on.drv.tw/Websites/www.ayubowanlanka.com/",
      overlay: null,
      sourceCodeLink: "https://github.com/PadmaGnanapriya/Tourism-site-pure"
    },
    {
      image: pureHtml2,
      title: "Pure HTML CSS JS site with responsive",
      description: "HTML 5 | CSS 3 | JavaScript",
      viewLink: "https://nnybsswi6mfwyhnhh4nh8a-on.drv.tw/Websites/www.Sri_Lankan_Tourism02.com/pevents.html",
      overlay: null,
      sourceCodeLink: "https://github.com/PadmaGnanapriya/susaa-site-02"
    },

    {
      image: simpleOs,
      title: "A Simple own OS Design & Implementation for Reading Hardware details",
      description: "Assembly language",
      viewLink: "https://padmaisuru.medium.com/a-simple-own-os-design-implementation-for-reading-hardware-details-e502c49e3d2f",
      overlay: null,
      sourceCodeLink: "https://github.com/PadmaGnanapriya/P-OS"
    },
    {
      image: retrofit,
      title: "Android rest API demo",
      description: "REST API (Retrofit) | Android Java | Kotlin",
      viewLink: "https://github.com/PadmaGnanapriya/SENG-22243-REST-API/blob/main/preview.gif",
      overlay: null,
      sourceCodeLink: "https://github.com/PadmaGnanapriya/SENG-22243-REST-API"
    },
  ]


  const renderProjects = () => myProjectList.map((project: myProject) =>
    <Col xs={12} sm={6} xl={4}>
      <Card data-aos="flip-left" className='proj mx-auto my-2' style={{maxWidth: '327px', minHeight: '430px'}}>
        <Card.Img variant="top" style={{maxWidth: '325px'}} src={project.image} className='p-1 project-img' alt='project'/>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text><small>{project.description}</small>
          </Card.Text>
          <a href={project.viewLink} target='_blank' rel="noreferrer">
            <Button variant="warning" className='mr-2'>Visit</Button></a>
          {
            project.overlay &&
            <OverlayTrigger trigger="click" placement="right" overlay={popoverProject1}>
                <Button variant="success">Source</Button>
            </OverlayTrigger>
          }
          {
            !project.overlay &&
            <a href={project.sourceCodeLink || ''} target='_blank' rel="noreferrer">
                <Button variant="success" className='mr-2'>Source</Button></a>
          }
        </Card.Body>
      </Card>
    </Col>
  )
  return (
    <div className={isDark ? 'projects-dark py-3 px-3 px-md-4 px-lg-5' : 'projects py-3 px-3 px-md-4 px-lg-5'}>
      <h1 id='projects' className='pt-5 mt-2'>Projects</h1>
      <Row className='m-0'>
        {
          renderProjects()
        }
      </Row>
    </div>
  );
}

export default Projects;
