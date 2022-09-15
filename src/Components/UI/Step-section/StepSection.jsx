import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./step.css";
const STEP__DATA = [
  {
    id: 1,
    title: "Setup your wallet",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur aliquid modi quae unde cumque laboriosam quo, in
    reprehenderit quaerat iusto.`,
    icon: "ri-wallet-line",
  },
  {
    id: 2,
    title: "Create your collection",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur aliquid modi quae unde cumque laboriosam quo, in
    reprehenderit quaerat iusto.`,
    icon: "ri-layout-masonry-line",
  },
  {
    id: 3,
    title: "Add yout NFTs",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur aliquid modi quae unde cumque laboriosam quo, in
    reprehenderit quaerat iusto.`,
    icon: "ri-image-line",
  },
  {
    id: 4,
    title: "List them for sale",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur aliquid modi quae unde cumque laboriosam quo, in
    reprehenderit quaerat iusto.`,
    icon: "ri-list-check",
  },
];
const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i className={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to={`/wallet`}>{item.title}</Link>
                  </h5>
                  <p className="mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
