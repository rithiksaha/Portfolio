import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCards";
import flipkart from "../../Assets/Experience/Flipkart.jpeg";
import cloud from "../../Assets/Experience/Cloud.png";
import rad from "../../Assets/Experience/RadicalX.jpg";

function Experience() {
  const responsibilitiesStyle = {
    color: "#32CD32", // Lime green color for responsibilities
  };

  const experiences = [
    {
      title: "Associate",
      company: "Flipkart",
      period: "Sep 2021 - Nov 2021",
      location: "On-site",
      responsibilities: [
        "Streamlined inventory processes, reducing discrepancies by 10%.",
        "Coordinated logistics operations, improving processing time by 15%.",
        "Trained 5 new associates, increasing team efficiency by 20%."
      ],
      imgPath: flipkart,
      link: "https://www.flipkart.com/"
    },
    {
      title: "Anyalyst III",
      company: "DXC Technology",
      period: "Aug 2022 - Present",
      location: "Remote",
      responsibilities: [
        "ITO CLOUD",
        "SAN AND NAS Management",
        "Assisted in analyzing client requirements and  IT solutions.",
        "Participated in virtual meetings, contributing to problem-solving discussions.",
        "Developed and documented workflows and procedures, enhancing team efficiency by 15%."
      ],
      imgPath: cloud,
      link: "https://dxc.com/"
    },
    
  ];

  const responsibilitiesWithStyle = (responsibilities) =>
    responsibilities.map((responsibility, index) => (
      <li key={index} style={responsibilitiesStyle}>
        {responsibility}
      </li>
    ));

  return (
    <Container fluid className="Certificate-section">
      <Particle />
      <Container>
        <h1 className="Certificate-heading">
          My Recent <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few INTERNSHIPS and JOBS I've completed recently.
        </p>
        <Row>
          {experiences.map((exp, index) => (
            <Col md={4} key={index}>
              <ExperienceCard
                title={exp.title}
                company={exp.company}
                period={exp.period}
                location={exp.location}
                responsibilities={responsibilitiesWithStyle(exp.responsibilities)}
                imgPath={exp.imgPath}
                link={exp.link}
                linkText="Learn More"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
