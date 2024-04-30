import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./home.scss";
import Header from "../common/header/header";

const Home = () => {
  return (
    <div className="home-page">
          <Container>
            <Row>
              <Col className="d-flex justify-content-center flex-column align-items-center">
                <h1>EDA SARIKAYA</h1>
                <h3>Full Stack Java Web Developer</h3>
              </Col>
            </Row>
          </Container>
       
    </div>
  );
};

export default Home;
