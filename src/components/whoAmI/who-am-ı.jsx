"use client";
import React from "react";
import "./whoAmI.scss";
import { Card } from "react-bootstrap";
import { FaGripLinesVertical } from "react-icons/fa";


const WhoAmI = () => {
  return (
    <div className="second-bg">
      <div className="title">FrontEnd Developer  <span className="cizik"> <FaGripLinesVertical /> </span> Back End Developer</div>

      <video
        autoPlay
        muted
        loop
        className="bg-video"
        src="/images/aaa.mp4"
        type="video/mp4"
      >
        {" "}
      </video>

      <div className="me">
        <h1 className="who-am">Who Am I</h1>
        Experienced Java Backend Developer. I have been involved in Java Backend
        Projects. The main ones are "TRVL Car | Premium Car Rental" and
        "MyCampusmates". And languages I used to create projects include Java,
        Spring Boot and GitHub. I have experience with include JDBC, Mongo DB,
        Hibernate, API and Spring Boot. I'm passionate about creating innovative
        solutions that make people's lives easier. As a fast learner and
        innovator, I thrive in a fast-paced, dynamic work environment. I am
        always inquiring learn and ready to take on new challenges to improve my
        skills and knowledge.
      </div>
    </div>
  );
};

export default WhoAmI;
