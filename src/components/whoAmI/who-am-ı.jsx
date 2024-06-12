"use client";
import React from "react";
import "./whoAmI.scss";
import { FaGripLinesVertical } from "react-icons/fa";

const WhoAmI = () => {
  return (
    <div className="second-bg">
      <div className="title">
        FrontEnd Developer{" "}
        <span className="cizik">
          {" "}
          <FaGripLinesVertical />{" "}
        </span>{" "}
        Back End Developer
      </div>

      <video
        autoPlay
        muted
        loop
        className="bg-video"
        src="/images/pp1.mp4"
        type="video/mp4"
      >
        {" "}
      </video>

      <div className="me">
        <h1 className="who-am">Who Am I</h1>
        <p>
        Junior Java Developer with one year of experience in designing,
        developing, and maintaining Java-based applications, particularly using
        Spring Boot. Proficient in Object-Oriented Programming, SQL databases,
        and collaborative software development methodologies. Additionally,
        experienced in frontend development with Next.js, having participated in
        related projects, and knowledgeable in React. Currently collaborating
        with a team on various frontend projects in a freelance capacity,
        showcasing strong teamwork and project management skills. Demonstrates a
        strong ability to rapidly acquire new technologies and adapt to evolving
        project requirements. Adept at problem-solving, critical thinking, and
        effective communication. Committed to delivering high-quality software
        solutions and contributing effectively to dynamic team environments.</p>
      
      
      </div>
    </div>
  );
};

export default WhoAmI;
