import { Button, Card } from "react-bootstrap";
import CartItem from "./cartItem";
import { useEffect } from "react";

const Cart = ({ cartItems, quantities, onIncrement, onDecrement, isMobile }) => {
  const total = cartItems.reduce((sum, item) => {
    const count = quantities[item.id] || 0;
    return sum + item.price * count;
  }, 0);

  useEffect(() => {
    console.log("Cart items updated:");
  }, [cartItems, quantities]);
  return (
    <div className="position-sticky" style={{ top: "40px"}}>
      {!isMobile && (
        <Card className="p-1 pt-4 cartContainer shadow-sm">
        <h4 className="text-center fw-bold">Order Summary</h4>
        <Card.Body
          style={{
            overflowY: "auto",
            maxHeight: "calc(100vh - 200px)",
          }}
        >
          {cartItems.length === 0 ? (
            <p className="text-center">
              When you add items to the cart, they will appear here
            </p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                count={quantities[item.id] || 0}
                onDecrement={() => onDecrement(item.id)}
                onIncrement={() => onIncrement(item.id)}
              />
            ))
          )}
        </Card.Body>
        <Card.Footer className="d-flex text-muted align-items-center justify-content-center">
          <Button
            className="w-100 "
            style={{ backgroundColor: "#F39850", border: "none" }}
          >
            {cartItems.length > 0
              ? `Go To Checkout Ksh. ${total.toFixed(2)}`
              : "Place Order"}
          </Button>
        </Card.Footer>
      </Card>
      )}
      

      {isMobile && cartItems.length > 0 && (
        <div className="fixed-bottom p-3 bg-white border-top shadow-sm">
          <Button
            className="w-100"
            style={{ backgroundColor: "#F39850", border: "none" }}
          >
            {`Go To Checkout Ksh. ${total.toFixed(2)}`}
          </Button>
        </div>
      )}
    </div>
  );
};
export default Cart;
