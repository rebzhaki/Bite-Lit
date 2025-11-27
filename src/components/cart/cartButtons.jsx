import { Minus, Plus } from "lucide-react";

const CartButtons = ({ 
  quantity = 0, 
  onIncrement, 
  onDecrement,
  size = 18,
  minValue = 0,
  maxValue,
  iconColor = "#F39850",
  showZero = false
}) => {
  
  const handleIncrement = (e) => {
    e.stopPropagation();
    if (quantity >= maxValue ) return;
      onIncrement();
    
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    if (quantity > minValue && onDecrement) {
      onDecrement();
    }
  };

  // Don't render if quantity is 0 and showZero is false
  if (quantity === 0 && !showZero) {
    return null;
  }

  return (
    <div className="d-flex align-items-center gap-2 justify-content-center" >
      <div 
        style={{ 
          backgroundColor: "white", 
          borderRadius: "50%", 
          padding: "4px",
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: quantity > minValue ? "pointer" : "not-allowed",
          opacity: quantity > minValue ? 1 : 0.5
        }}
        onClick={handleDecrement}
      >
        <Minus
          size={size}
          className="shoppingCartIcon"
          color={quantity > minValue ? "#333" : "#999"}
        />
      </div>

      <span 
        style={{
          fontSize: "14px",
          fontWeight: "600",
          minWidth: "25px",
          textAlign: "center"
        }}
      >
        {quantity}
      </span>

      <div 
        style={{ 
          backgroundColor: quantity < maxValue ? iconColor : "#ccc", 
          borderRadius: "50%", 
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: quantity < maxValue ? "pointer" : "not-allowed",
          opacity: quantity < maxValue ? 1 : 0.5
        }}
        onClick={handleIncrement}
      >
        <Plus
          color="white"
          size={size}
          className="shoppingCartIcon"
        />
      </div>
    </div>
  );
};

export default CartButtons;