import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Navbar,
  Row,
} from "react-bootstrap";
import logo from "../assets/bite-lite-logo.png";
import { Search } from "lucide-react";

const NavbarSection = () => {
  return (
    <Navbar expand="lg">
      <Container fluid className="px-4 py-2 fixed-top navbarContainer shadow-sm bg-white">
        <Row className="w-100 align-items-center g-2">
        <Col xs={3} sm={2} md={2}>
            <Navbar.Brand href="/" className="fw-bold d-flex align-items-center gap-2">
              <Image
                src={logo}
                className="img-fluid"
                style={{ maxWidth: "60px", height: "auto" }}
                alt="BiteLite Logo"
                roundedCircle
              /> BiteLite
            </Navbar.Brand>
          </Col>
          <Col xs={9} sm={10} md={10}>
            <Form className="w-100">
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
