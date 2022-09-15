import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";
const MY__ACCOUNT = [
  {
    id: 1,
    display: "Author Profile",
    url: "/seller-profile",
  },
  {
    id: 2,
    display: "Create Item",
    url: "/create",
  },
  {
    id: 3,
    display: "Collection",
    url: "/market",
  },
  {
    id: 4,
    display: "Edit Profile",
    url: "/edit-profile",
  },
];

const RESOURCES = [
  {
    id: 1,
    display: "Help Center",
    url: "#",
  },
  {
    id: 2,
    display: "Partner",
    url: "#",
  },
  {
    id: 3,
    display: "Community",
    url: "#",
  },
  {
    id: 4,
    display: "Activity",
    url: "#",
  },
];

const COMPANY = [
  {
    id: 1,
    display: "About",
    url: "#",
  },
  {
    id: 2,
    display: "Career",
    url: "#",
  },
  {
    id: 3,
    display: "Ranking",
    url: "#",
  },
  {
    id: 4,
    display: "Contact Us",
    url: "/contact",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center">
                <span>
                  <i className="ri-fire-fill"></i>
                </span>
                NFTs
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                odit porro adipisci voluptatum corrupti quaerat minima accusamus
                in soluta placeat.
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>My Account</h5>
            <ListGroup className="list__group">
              {MY__ACCOUNT.map((item) => (
                <ListGroupItem key={item.id} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Resources</h5>
            <ListGroup className="list__group">
              {RESOURCES.map((item) => (
                <ListGroupItem key={item.id} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Company</h5>
            <ListGroup className="list__group">
              {COMPANY.map((item) => (
                <ListGroupItem key={item.id} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social__links d-flex gap-3 align-items-center">
              <span>
                <Link to={"#"}>
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to={"#"}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to={"#"}>
                  <i className="ri-telegram-line"></i>
                </Link>
              </span>
              <span>
                <Link to={"#"}>
                  <i className="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to={"#"}>
                  <i className="ri-discord-line"></i>
                </Link>
              </span>
            </div>
          </Col>


          <Col lg="12" className="mt-4 text-center">
            <p className="copyright">
              Copyrights 2022, Developed by Muhibur Rahman. @Muhib's Tech Diary
              All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
