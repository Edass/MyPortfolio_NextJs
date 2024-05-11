import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Experiences from './experiences'
import Education from './education'
import "./backGroundList.scss";

const BackGroundList = () => {
  return (
    <div  className='backGroundList'>
    <Container>
        <Row>
            <Col> <Experiences/></Col>
            <Col><Education/></Col>
        </Row>
      
    </Container>
    </div>
  )
}

export default BackGroundList
