
import spaghetti from "../../assets/spaghetti-bolognese.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../cart/cart";
import MenuItem from "./menuItem";

const MenuList = () => {
  const menuItems = [
    { id: 1, name: "Spaghetti Bolognese", price: 12.99, img: spaghetti, description: "Classic Italian pasta with rich meat sauce." },
    { id: 2, name: "Chicken Caesar Salad", price: 10.99, img: spaghetti, description: "Crisp romaine lettuce with grilled chicken, croutons, and Caesar dressing." },
    { id: 3, name: "Margherita Pizza", price: 11.99, img: spaghetti, description: "Traditional pizza topped with fresh tomatoes, mozzarella, and basil." },
    { id: 4, name: "Spaghetti Bolognese", price: 12.99, img: spaghetti, description: "Classic Italian pasta with rich meat sauce." },
    { id: 5, name: "Chicken Caesar Salad", price: 10.99, img: spaghetti, description: "Crisp romaine lettuce with grilled chicken, croutons, and Caesar dressing." },
    { id: 6, name: "Margherita Pizza", price: 11.99, img: spaghetti, description: "Traditional pizza topped with fresh tomatoes, mozzarella, and basil." },
  ];

  return (
    <Container fluid className="my-4 mt-5">
      <Row>
        <Col md={10} xs={12}>
          <Row>
            {menuItems.map((item) => (
              <Col key={item.id} xs={12} sm={6} lg={2} className="d-flex">
                <MenuItem
                  key={item.id}
                  item={item}
                  onClick={() => console.log(`Clicked on ${item.name}`)}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={2}>
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

export default MenuList;
