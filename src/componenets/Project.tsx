import React from 'react';
import {Button, Card, Col, OverlayTrigger} from "react-bootstrap";
import {IProject} from "../types/project";

type ProjectProps = {
  project: IProject;
}

const Project: React.FC<ProjectProps> = (props) => {
  const {project} = props;

  return (
    <Col xs={12} sm={6} xl={4}>
      <Card data-aos="flip-left" className='proj mx-auto my-2' style={{maxWidth: '327px', minHeight: '430px'}}>
        <Card.Img variant="top" style={{maxWidth: '325px'}} src={project.image} className='p-1 project-img'
                  alt='project'/>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text><small>{project.description}</small>
          </Card.Text>
          <a href={project.viewLink} target='_blank' rel="noreferrer">
            <Button variant="warning" className='mr-2 yellow-btn'>Visit</Button></a>
          {
            project.overlay &&
            <OverlayTrigger trigger="click" placement="right" overlay={project.overlay}>
                <Button className='green-btn' variant="success">Source</Button>
            </OverlayTrigger>
          }
          {
            !project.overlay &&
            <a href={project.sourceCodeLink || ''} target='_blank' rel="noreferrer">
                <Button variant="success" className='mr-2 green-btn'>Source</Button></a>
          }
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Project;
