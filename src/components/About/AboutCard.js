import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Luca Consalvi </span>
            from <span className="purple"> Washington, USA.</span>
            <br />
            I am currently working as a freelancer.
            <br />
            I earned a Bachelor's degree in Computer Science from American University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  enjoy bakeries and good coffee shops.
            </li>
            <li className="about-activity">
              <ImPointRight />  playing table tennis.
            </li>
            <li className="about-activity">
              <ImPointRight />  Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Luca</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
