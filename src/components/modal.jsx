import { Col, Image, Modal, Row } from "react-bootstrap";
import CartButtons from "./cart/cartButtons";
import { Plus } from "lucide-react";

const ProductModal = ({ show, handleClose, product, isAddedToCart,
    stock,
    onAddToCart,
    quantity,
    onDecrement,
    onIncrement, }) => {
  if (!product) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Image src={product.img} alt={product.name} className="img-fluid mb-3" />
        <h4 className="fw-bold">{product.name}</h4>
        <p>{product.description}</p>
        <Row className="mb-3">
            <Col>
                <p className="fw-bold fs-6">${product.price.toFixed(2)}</p>

            </Col>
            <Col className="text-end">  
            {product && isAddedToCart ? (
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
                size={28}
                className="shoppingCart fw-bold"
                onClick={onAddToCart}
                style={{ backgroundColor: "#FFF3EA", borderRadius: "50%" }}
              />
            )}
            </Col>
        </Row>

       
      </Modal.Body>
    </Modal>
  );
}
export default ProductModal;