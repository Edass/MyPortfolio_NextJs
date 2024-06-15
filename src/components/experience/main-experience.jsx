import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Experience from './experience'

const MainExperience = () => {
  return (

    <div className='experience-div'>
    <video
   autoPlay
   muted
   loop
   className="bg-video"
   src="/images/video4.mp4"
   type="video/mp4"
 >
   {" "}
 </video>
 
 <h1 className='experience-title d-flex justify-content-center align-content-center'>Experiences</h1>
    <Container style={{height:"100%"}}>
      <Row  style={{height:"100%"}} className='d-flex justify-content-center align-content-center' >

        <Col md={8} className='d-flex justify-content-center align-content-center' >
        <Experience/>
        </Col>

        <Col md={4}>
        <div></div>
        </Col>
        
      </Row>
    </Container>
    </div>

  )
}

export default MainExperience