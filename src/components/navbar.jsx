import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import logo from "../assets/bite-lite-logo.png";
import { Search } from "lucide-react";

const NavbarSection = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Row className="w-100">
          <Col xs="2">
            <Navbar.Brand href="/">
              <Image
                src={logo}
                width="100"
                height="100"
                alt="BiteLite Logo"
                roundedCircle
              />
            </Navbar.Brand>
          </Col>
          <Col className="d-flex align-items-center justify-content-end" xs="10">
            <Form>
              <div style={{ position: "relative" }}>
                <Search
                  size={18}
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6c757d",
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="Search"
                  style={{ paddingLeft: "40px" }}
                />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default NavbarSection;
