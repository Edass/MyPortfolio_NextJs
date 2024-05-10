import { Col, Container, Row } from "react-bootstrap";
import "./skillList.scss";
import { FaHtml5 } from "react-icons/fa";
const SkillsList = () => {
  return (
    <div className="skillsList">
   <Container className="skills-container">
    <Row className="d-flex g-5">
      <Col className="skill-col">
        <div>  <h3 className="skills-title">Front End</h3></div>
    <div className="langs">
      <div><div><FaHtml5 /></div> <div>Html</div></div>
      <div><div><FaHtml5 /></div> <div>JavaScript</div></div>
      <div><div><FaHtml5 /></div> <div>Css</div></div>
      <div><div><FaHtml5 /></div> <div>Sass</div></div>
      <div><div><FaHtml5 /></div> <div>NextJs</div></div>
      </div>
      </Col>
      <Col className="skill-col">
      <h3 className="skills-title">Back End</h3>

      <div className="langs">
      <div>a</div>
      <div>a</div>
      <div>a</div></div></Col>

      <Col sm={12} className="skill-col">
      <h3 className="skills-title">Others</h3>
      <div className="langs">
      <div>a</div>
      <div>a</div>
      <div>a</div>
      </div></Col>
    </Row>
   </Container>
   </div>
  );
};

export default SkillsList;
