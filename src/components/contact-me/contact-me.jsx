import { Col, Container, Row } from "react-bootstrap";
import "./contact-me.scss";
import SocialMedia from "../common/header/social-media";

const ContactMe = () => {
  return (
    <div className="contact-div">
   <video
        autoPlay
        muted
        loop
        className="bg-video"
        src="/images/contactt.mp4"
        type="video/mp4"
      >
      </video>

      <Container className="contact-container">
        <Row className="contact-row">
          
        </Row>
      </Container>
    </div>
  );
};

export default ContactMe;
