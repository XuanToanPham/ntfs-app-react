import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./HeroSection.css";
import heroImg from "../../asset/images/hero.jpg";
import Typewriter from "typewriter-effect";
import GIF from "../../asset/video/Home Video.mp4";
const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="6" xs="12">
            <div className="hero__content">
              <h2>
                Discover a new era of cool
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("NFTs.")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Collectible Item.")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("APE Killers!.")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sunt quidem, explicabo optio culpa vitae quo natus minima
                voluptatibus commodi.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>
                  <Link to={`/market`}>Explore</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line"></i>
                  <Link to={`/create`}>Create</Link>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12">
            <div className="hero__video">
              <video src={GIF} type="video/mp4" autoPlay muted loop></video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
