import { Plus } from "lucide-react";
import { Card, Col, Row } from "react-bootstrap";
import "./menu.css";
import CartButtons from "../cart/cartButtons";
import ProductModal from "../modal";
import { useState } from "react";

const MenuItem = ({
  item,
  stock,
  onAddToCart,
  isAddedToCart,
  quantity,
  onDecrement,
  onIncrement,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = (item) => {
    setShowModal(true);
  }
  return (
    <>
    <Card className="mb-4 h-100 menuItemCard" onClick={() => handleClick(item)}>
      <Card.Img
        variant="top"
        src={item.img}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{item.name}</Card.Title>
        <Card.Text className="flex-grow-1 text-justify">
          {item.description.length > 60
            ? item.description.substring(0, 57) + "..."
            : item.description}
        </Card.Text>
        <Row className="align-items-center mt-auto">
          <Col>
            <Card.Text className="fw-bold mb-0" style={{ fontSize: "14px" }}>
              Ksh. {item.price.toFixed(2)}
            </Card.Text>
          </Col>
          <Col className="text-end">
            {item && isAddedToCart ? (
              <div>
                <CartButtons className=""
                  quantity={quantity}
                  maxValue={stock}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              </div>
            ) : (
              <Plus
                color="#F39850"
                size={22}
                className="shoppingCartIcon fw-bold"
                onClick={onAddToCart}
              />
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
    <ProductModal
    show={showModal}
    product={item}
    handleClose={() => setShowModal(false)}
    stock={stock}
    isAddedToCart={isAddedToCart}
    onAddToCart={onAddToCart}
    quantity={quantity}
    onDecrement={onDecrement}
    onIncrement={onIncrement}
  />
  </>
  );
};
export default MenuItem;
