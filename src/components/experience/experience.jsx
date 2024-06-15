"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import data from "@/data/education.json";
import "./experience.scss";

const Experience = () => {
  const [status, setStatus] = useState(null);

  const toggleCard = (id) => {
    setStatus(status === id ? null : id);
  };

  return (
    <Row
      className="experience-row d-flex justify-content-center align-content-center"
      style={{ display: "flex", height: "100%" }}
    >
      <Col
        md={6}
        className="d-flex justify-content-center align-content-center align-items-center flex-wrap"
        style={{ display: "flex", height: "100%", gap: "50px" }}
      >
        {data.map((item) => (
          <Col
            sm={4}
            md={4}
            key={item.id}
            className="experince-col d-flex justify-content-center align-content-center align-items-center"
          >
            <Card
              className="experince-card overflow-hidden"
              border="primary"
              onClick={() => toggleCard(item.id)}
            >
              <Card.Header className="overflow-hidden">
                {item.title}
              </Card.Header>

              {status === item.id ? (
                <Card.Body className="experince-body">
                  <div className="description">
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text className="">{item.description}</Card.Text>
                    <Button variant="warning">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Me
                      </a>
                    </Button>
                  </div>
                </Card.Body>
              ) : null}
            </Card>
          </Col>
        ))}
      </Col>
    </Row>
  );
};

export default Experience;
