import React from 'react';
import {Card, Button, OverlayTrigger, Popover} from 'react-bootstrap';
import project1 from "../asserts/images/projects/project1.webp";

const Projects: React.FC = () => {

  const popoverProject1 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">E-commerce site</Popover.Title>
      <Popover.Content>
        <a href='https://github.com/PadmaGnanapriya/p-redux-store' target='_blank'>React frontend</a><br/>
        <a href='https://github.com/PadmaGnanapriya/type-graph-express-api' target='_blank'>GraphQL backend</a>
      </Popover.Content>
    </Popover>
  );
  return (
    <div className='projects'>
      <h1 id='projects' className='pt-5 mt-2'>Projects</h1>
      <Card className='proj' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={project1} className='p-1'/>
        <Card.Body>
          <Card.Title>Completed E-Commerce Site with backend & admin panel</Card.Title>
          <Card.Text><small>
            React | Redux | GraphQL | Boostrap | SCSS | MongoDb | Apollo | AWS S3 buckets, EC2 instance, Route 53 |
            Express | Git | JIRA</small>
          </Card.Text>
          <a href='https://www.cominglevel.com/' target='_blank'><Button variant="warning" className='mr-2'>Visit</Button></a>
          <OverlayTrigger trigger="click" placement="right" overlay={popoverProject1}>
          <Button variant="success">Source</Button>
          </OverlayTrigger>
        </Card.Body>
      </Card>



    </div>
  );
}

export default Projects;
