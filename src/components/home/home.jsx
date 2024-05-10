import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./home.scss";
import { MdOutlineDownload } from "react-icons/md";


const Home = () => {
  return (
    <>
      <div className="home-page">
        <Container className="all-container">
          <Row className="d-flex flex-column ">
            <Col className="entries d-flex justify-content-center flex-column align-items-center">
              <h1>I'm <span>EDA SARIKAYA</span></h1>
              <h2> Full Stack Java Web Developer </h2>
            </Col>
            <Col className="information">
            <h4> <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV <span><MdOutlineDownload /></span> </a> </h4>
            <h4>Contact Me</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
