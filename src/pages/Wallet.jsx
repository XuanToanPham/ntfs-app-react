import React from "react";
import CommonSection from "../Components/UI/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../style/wallet.css";
const Wallet = () => {
  const wallet__data = [
    {
      id: 1,
      title: "Bitcoin",
      desc: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sapiente maiores fugiat molestias quae harum expedita?`,
      icon: "ri-bit-coin-line",
    },
    {
      id: 2,
      title: "Coinbase",
      desc: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sapiente maiores fugiat molestias quae harum expedita?`,
      icon: "ri-money-cny-circle-line",
    },
    {
      id: 3,
      title: "Metamask",
      desc: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sapiente maiores fugiat molestias quae harum expedita?`,
      icon: "ri-money-dollar-circle-line",
    },
    {
      id: 4,
      title: "Authereum",
      desc: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sapiente maiores fugiat molestias quae harum expedita?`,
      icon: "ri-money-dollar-circle-line",
    },
  ];
  return (
    <>
      <CommonSection title={`Connect Wallet`} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, illum! Eligendi tenetur numquam facere, debitis nulla
                  sed veritatis autem. Molestiae!
                </p>
              </div>
            </Col>
            {wallet__data.map((item) => (
              <Col lg="3" key={item.id} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>
                    {item.desc}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
