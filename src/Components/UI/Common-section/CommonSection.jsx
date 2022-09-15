import React from "react";

import "./comment-section.css";
import { Container, Row, Col } from "reactstrap";
const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h2>{title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
