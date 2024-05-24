import { Col, Container, Row } from "react-bootstrap";
import "./skillList.scss";
import { FaHtml5,FaCss3Alt,FaSass,FaJava,FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
const SkillsList = () => {
  return (
    <div className="skillsList">
       <video
        autoPlay
        muted
        loop
        className="bg-video"
        src="/images/education2.mp4"
        type="video/mp4"
      ></video> 
   <Container className="skills-container">
    <Row className="skills-row">
      <Col className="skill-col">
        <h3 className="skills-title">Front End</h3>
    <div className="langs">
      <div><div className="skill-img"><FaHtml5 /></div> <div className="skills-tit">Html</div></div>
      <div><div className="skill-img"><FaCss3Alt /></div> <div className="skills-tit">CSS</div></div>
      <div><div className="skill-img"><FaSass /></div> <div className="skills-tit">Sass</div></div>
      <div><div className="skill-img"><IoLogoJavascript /></div> <div className="skills-tit">JavaScript</div></div>
      <div><div className="skill-img" ><TbBrandNextjs /></div><div className="skills-tit">NextJs</div></div>

      </div>
      </Col>
      
      <Col className="skill-col">
      <h3 className="skills-title">Back End</h3>

      <div className="langs">
      <div><div className="skill-img"><FaJava /></div> <div className="skills-tit">Java</div></div>
      <div><div className="skill-img"><SiPostgresql /></div> <div  className="skills-tit">PostgreSQL</div></div>
      <div><div className="skill-img"><SiHibernate /></div> <div className="skills-tit">Hibernate</div></div>
      <div><div className="skill-img"><FaGithub /></div> <div className="skills-tit">GitHub</div></div>
      </div></Col>

      <Col sm={12} className="skill-col">
      <h3 className="skills-title">Others</h3>
      <div className="langs">
      <div><div className="skill-img"><SiPostman /></div> <div className="skills-tit">Postman</div></div>
      <div><div className="skill-img"><SiMongodb /></div> <div className="skills-tit">MongoDb</div></div>
      <div><div className="skill-img"><SiVisualstudio /></div><div className="skills-tit">Visual Studio </div></div>
      <div><div className="skill-img"><SiIntellijidea /></div> <div  className="skills-tit">IntelliJ</div></div>
      </div></Col>
    </Row>
   </Container>
   </div>
  );
};

export default SkillsList;
