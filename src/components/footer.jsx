import { Col, Image, Row } from "react-bootstrap";
import logo from "/bite-lite-logo.png";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Row>
        <Col className="text-center p-3" style={{ backgroundColor: "#FFF3EA" }}>
          <a
            href=""
            className="text-dark fw-bolder"
            style={{ textDecoration: "none" }}
          >
            <Image
              src={logo}
              className="img-fluid"
              style={{ maxWidth: "100px", height: "auto" }}
              alt="BiteLite Logo"
              roundedCircle
            />
            BiteLite
          </a>
        </Col>
        <Col className="text-center p-3" style={{ backgroundColor: "#FFF3EA" }}>
          <a href="" className="text-dark" style={{ textDecoration: "none" }}>
            Terms of Service
          </a>
          <br />
          <a href="" className="text-dark" style={{ textDecoration: "none" }}>
            Privacy Policy
          </a>
        </Col>
        <Col className="text-center p-3" style={{ backgroundColor: "#FFF3EA" }}>
          <a href="" className="text-dark" style={{ textDecoration: "none" }}>
            Contact Us
          </a>
          <br />
          <a href="" className="text-dark" style={{ textDecoration: "none" }}>
            Support
          </a>
          <br />
          <a
            href=""
            className="text-dark mt-2"
            style={{ textDecoration: "none" }}
          >
            FAQ
          </a>
        </Col>
      </Row>
      <div className="text-center p-3" style={{ backgroundColor: "#FFF3EA" }}>
        © {new Date().getFullYear()} BiteLite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
