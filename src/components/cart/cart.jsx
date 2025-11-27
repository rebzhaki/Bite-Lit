import { Card } from "react-bootstrap";
import CartItem from "./cartItem";

const Cart = () => {
  const cartItems = []; 
  return (
    <div>
      <Card style={{ width: "18rem" }} className="p-1 pt-4">
        <h4 className="text-center fw-bold">Order Summary</h4>
        {/* <Card.Img variant="top" src={item.img} height={300} width={300} /> */}
        <Card.Body>
          {cartItems.length === 0 ? (
            <p className="text-center">When you add items to the cart, they will appear here</p>
          ) : (
            <CartItem />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
export default Cart;
