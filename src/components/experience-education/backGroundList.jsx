import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Experiences from './experiences'
import Education from './education'
import "./backGroundList.scss";
import Timeline from '../time-line/timeline';

const BackGroundList = () => {
  return (
    <div  className='backGroundList'>
{/* 
<video
        autoPlay
        muted
        loop
        className="bg-video"
        src="/images/education1.mp4"
        type="video/mp4"
      >
      </video> */}
    <Container>
        <Row className="d-flex gap-5 justi">
       
            <Col> <Experiences/></Col>
            <Col><Education/></Col>
        </Row>
      
    </Container>
    </div>
  )
}

export default BackGroundList
