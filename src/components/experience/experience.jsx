"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import data from "@/data/education.json";
import "./experience.scss";

const Experience = () => {
  const [status, setStatus] = useState(null);

  const toggleCard = (id) => {
    setStatus(status === id ? null : id);
  };

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
      
      <h1 className='experience-title'>Experiences</h1>

      <Container className='experinece-con'>
        <Row className='experience-row d-flex g-5 justify-content-center align-items-center'>
          {data.map((item) => (
            <Col sm={6} md={4} lg={4} key={item.id} className='experince-col'>
              <Card className='experince-card' border="primary" style={{ width: '18rem' }} onClick={() => toggleCard(item.id)}>
                <Card.Header>{item.title}</Card.Header>
                <Image src={item.image} width={250} height={250} alt={item.title} className='experience-img' />
                {status === item.id ? (
                  <Card.Body className='experince-body'>
                    <div className='description'>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text className=''>
                      {item.description}
                    </Card.Text>
                    <Button variant="warning">
                      <a href={item.link} target='_blank' rel="noopener noreferrer">Visit Me</a>
                    </Button>
                    </div>
                  </Card.Body>
                ) : null}
              </Card>
            </Col>
          ))}

        </Row>
      </Container>
    </div>
  );
}

export default Experience;
