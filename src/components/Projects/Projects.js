import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import docus from "../../Assets/Projects/real/docus.jpg";
import docbot from "../../Assets/Projects/real/docbot.jpg";
import dante from "../../Assets/Projects/real/dante-ai.jpg";
import ninjachat from "../../Assets/Projects/real/ninjachat.jpg";
import vechle from "../../Assets/Projects/real/vehcle.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dante}
              isBlog={false}
              link = "http://dante-ai.com/"
              title="Dante AI"
              description="Customized AI SaaS platform designed to deliver personalized chatbot services, built with advanced model training and a user-friendly interface. Features include seamless Stripe payment integration, scalable architecture for high performance, and an Agile development approach to meet client expectations and drive significant revenue growth."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vechle}
              isBlog={false}
              link = "https://www.v-app.io/vehicle-detection/"
              title="V-App"
              description="A real-time traffic analysis platform built with a YOLO model for object detection, utilizing annotated datasets for accuracy. Supports deployment and hosting for scalability, enabling efficient accident analysis and statistics in real-time."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docus}
              isBlog={false}
              link = "https://docus.ai/ai-doctor"
              title="Docus"
              description="Healthcare AI assistant built with a large language model, designed to provide patients with greater convenience. Features include seamless backend integration for efficient interactions, advanced web scraping for accurate healthcare data, and a streamlined pipeline from data collection to deployment, ensuring optimized functionality."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ninjachat}
              isBlog={false}
              link = "https://www.ninjachat.ai/"
              title="NinjaChat"
              description="Developed a web application powered by generative AI using Stable Diffusion and FLUX models for image generation. The application was optimized for seamless performance and deployed to online services, ensuring reliability and accessibility. Successfully collaborated in an Agile environment to deliver high-quality solutions within reduced timelines."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docbot}
              isBlog={false}
              link = "https://chatdoc.com/"
              title="chat DOC"
              description="Developed a web application for document-based chat, featuring a responsive design created from scratch. Utilized AngularJS and TypeScript for front-end development and ensured code reliability by implementing unit tests, enhancing user experience across web and mobile platforms."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
