import { Trash2, Minus, Plus, Star } from "lucide-react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Cart from "./cart";
import CartButtons from "./cartButtons";

const CartItem = ({ item, count, onDecrement, onIncrement }) => {
  return (
    <div className="menu-item">
      <Card className="mb-3 menuItemCard border-0 shadow-sm">
        <Card.Body className="p-2">
          <Row className="align-items-center g-2">
            <Col xs={4}>
              <Card.Img
                src={item.img}
                className="rounded"
                style={{
                  width: "100%",
                  height: "70px",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col xs={8}>
              <div>
                <div className="d-flex justify-content-between align-items-start mb-1">
                  <Card.Title
                    className="fw-bold mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.2" }}
                  >
                    {item.name}
                  </Card.Title>
                  <div className="d-flex align-items-center gap-1">
                    <Star fill="#F39850" stroke="#F39850" size={14} />
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      {item.rating}
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <Card.Text
                    className="mb-0 fw-bold"
                    style={{ fontSize: "12px" }}
                  >
                    Ksh. {item.price.toFixed(2)}
                  </Card.Text>

                  <div
                    className="d-flex align-items-center"
                    style={{
                      backgroundColor: "#f1f1f1",
                      borderRadius: "8px",
                      padding: "2px 6px",
                      gap: "4px",
                    }}
                  >
                    <CartButtons
                      quantity={count}
                      maxValue={item.quantity}
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CartItem;
