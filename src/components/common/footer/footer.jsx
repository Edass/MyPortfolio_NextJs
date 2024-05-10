import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SocialMedia from "../header/social-media";
import "./footer.scss";

const Footer = () => {
  return (
    
    <div className="footer">
    <Container >
      <Row className="p-2 d-flex justify-content-center align-items-center">
        <Col className="d-flex justify-content-center align-items-center">
          <h4>Eda Sarikaya</h4>{" "}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <SocialMedia gap="4" />{" "}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          &copy; by edasarikaya
        </Col>
      </Row>
    </Container>
    </div>
 
  );
};

export default Footer;
