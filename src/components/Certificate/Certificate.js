import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificateCards";
import Particle from "../Particle";
import oracle from "../../Assets/Certificate/oracle.jpg";
import dell from "../../Assets/Certificate/dell.jpg";
import aws from "../../Assets/Certificate/aws.png";
import micro from "../../Assets/Certificate/micro.png";


function Certificate() {
  return (
    <Container fluid className="Certificate-section">
      <Particle />
      <Container>
        <h1 className="Certificate-heading">
          My Recent <strong className="purple">Certificate </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few certificates I've completed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={micro}
              isBlog={false}
              title="Microsoft Certified Azure Fundamentals (AZ-900 )"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="AWS Certified Cloud Practitioner-
              Infosys Springboard"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={dell}
              isBlog={false}
              title="Dell Information Storage and Management Foundations 2023 (D-ISM-FN-23)"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={oracle}
              isBlog={false}
              title="Oracle Cloud Infrastructure 2024 Certified Foundations Associate"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
