import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./wantToKnowMore.scss";
import DownloadCv from '../home/download-cv';
import Image from 'next/image';

const WantToKnowMore = () => {
  return (
    <div className='wantToKnowMore-div'>
    
        <Container>
            <Row className='wantToKnow-row'>
                <Col className='wantToKnow-col'>
                <h2>WANT TO KNOW MORE?</h2>
                This is the complete me, download my resume and  find all about me.
                </Col>
               <Col className='download-col' sm={6} md={4}>
    
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default WantToKnowMore
