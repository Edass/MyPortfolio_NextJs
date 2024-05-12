import { Col, Container, Row } from "react-bootstrap";
import "./contact-me.scss";
import SocialMedia from "../common/header/social-media";

const ContactMe = () => {
  return (
    <div className="contact-div">
      <Container className="contact-container">
        <Row className="contact-row">
          <Col className="contact-col" md={6}>
            <h2>CONTACT with ME</h2>
            <h4>
              Are you looking for a <span>web developer</span>?
            </h4>
            <p>
              Then you're the right place. Get the festest solutions you're
              looking for.
            </p>
            <p>
              Just <span>reach out</span> and let me know!{" "}
            </p>
          </Col>

            <Col md={6}>
              <h2>
                <a
                  href="mailto: edassarkaya@otlook.com"
                  type="email"
                  target="_target"
                >
                  edassarkaya@outlook.com{" "}
                </a>
              </h2>
              <h2>
                <a href="tel:+353833058015">+353 (83) 305-8015</a>
              </h2>
            </Col>
            <SocialMedia />
        </Row>
      </Container>
    </div>
  );
};

export default ContactMe;
