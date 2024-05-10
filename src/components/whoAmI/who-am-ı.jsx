"use client";
import React from "react";
import "./whoAmI.scss";
import { Card } from "react-bootstrap";

const WhoAmI = () => {
  return (
    <div className="second-bg">
      <video
        autoPlay
        muted
        loop
        className="bg-video"
        src="/images/meVideo.mp4"
        type="video/mp4"
      />

      <div className="me">
        Experienced Java Backend Developer. I have been involved in Java Backend
        Projects. The main ones are "TRVL Car | Premium Car Rental" and
        "MyCampusmates". And languages I used to create projects include Java,
        Spring Boot and GitHub. I have experience with include JDBC, Mongo DB,
        Hibernate, API and Spring Boot. I initially worked in manufacturing. I
        have 1,5 years of experience as a production/method engineer in
        automotive manufacturing field, so I have excellent lean production
        technics and team management skills. Also, team management has helped me
        to develop quick decision-making and problem-solving skills and has
        helped me to be responsive and calm in a fast-paced and ever changing
        environment. Moreover I always support that knowledge should be shared
        and I work by adopting this technique. This makes me a good team worker.
        Solving complex problems gives me pleasure. I'm passionate about
        creating innovative solutions that make people's lives easier. As a fast
        learner and innovator, I thrive in a fast-paced, dynamic work
        environment. I am always inquiring learn and ready to take on new
        challenges to improve my skills and knowledge.
      </div>
    </div>
  );
};

export default WhoAmI;
