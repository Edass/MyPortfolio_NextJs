import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./home.scss";
import DownloadCv from "./download-cv";

const Home = () => {
  return (
    <>
      <div className="home-page position-relative">
      <div className="square"></div>

        <video
          autoPlay
          muted
          loop
          className="bg-video"
          src="/images/ana-ekran.mp4"
          type="video/mp4"
        >
          {" "}
        </video>
        <Container className="all-container">
          <Row className="d-flex flex-column">
            
            <Col className="entries d-flex justify-content-center flex-column align-items-center">
              <h1>
                I'm <span>EDA SARIKAYA</span>
              </h1>
              <h2> Full Stack Java Web Developer </h2>
            </Col>
            <Col className="information">
              <DownloadCv>Download CV</DownloadCv>
              <h4>Contact Me</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
