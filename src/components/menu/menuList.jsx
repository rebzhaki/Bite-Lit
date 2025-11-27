import { Col, Container, Row } from "react-bootstrap";
import Cart from "../cart/cart";
import MenuItem from "./menuItem";
import { use, useEffect, useState } from "react";
import data from "../../data/db.json"

const MenuList = () => {
  const menuItems = data

  const [cartItems, setCartItems] = useState([]);
  const [addedItemsID, setIsAddedItemsID] = useState([]);
  const [cartCount, setCartCount] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const addToCart = (item) => {
    console.log(`Added ${item.name} to cart.`);
    if (addedItemsID.includes(item.id)) {
      incrementItem(item.id);
      return; 
    }

    setCartItems([...cartItems, item]);
    setIsAddedItemsID([...addedItemsID, item.id]);
    setCartCount({ ...cartCount, [item.id]: 1 });
  }
  const incrementItem = (itemId) => {
    const item = menuItems.find((item) => item.id === itemId);

    if(cartCount[itemId] >= item.quantity) return;
    setCartCount({
      ...cartCount,
      [itemId]: (cartCount[itemId] || 0) + 1,
    });
  };

  const decrementItem = (itemId) => {
    if (!cartCount[itemId]) return;

    const newCount = cartCount[itemId] - 1;
    if (newCount === 0) {
      setCartItems(cartItems.filter((item) => item.id !== itemId));
      setIsAddedItemsID(addedItemsID.filter((id) => id !== itemId));
      const { [itemId]: _, ...rest } = cartCount;
      setCartCount(rest);
    } else {
      setCartCount({
        ...cartCount,
        [itemId]: newCount,
      });
    }
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    const storedCounts = localStorage.getItem("cartCount");
    const storedAddedIDs = localStorage.getItem("addedItemsID");

    if(storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    if(storedCounts) {
      setCartCount(JSON.parse(storedCounts));
    }
    if(storedAddedIDs) {
      setIsAddedItemsID(JSON.parse(storedAddedIDs));
    }
    setIsLoaded(true)
  }, []);

  useEffect(() => {   
    if(!isLoaded) return;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
    localStorage.setItem("addedItemsID", JSON.stringify(addedItemsID));
  }, [cartItems, cartCount, addedItemsID]);

  return (
    <Container fluid className="mt-5 menuListContainer py-4">
      <Row>
        <Col md={9} xs={12} className="menuItemCol">
          <Row>
            {menuItems.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={6} lg={3} className="d-flex mb-4">
                <MenuItem
                  key={item.id}
                  item={item}
                  stock={item.quantity}
                  isAddedToCart={addedItemsID.includes(item.id)}
                  quantity={cartCount[item.id] || 0}
                  onAddToCart={() => addToCart(item)}
                  onIncrement={() => incrementItem(item.id)}
                  onDecrement={() => decrementItem(item.id)}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={3} className="cartCol">
          <Cart cartItems={cartItems}  quantities={cartCount} onIncrement={incrementItem} onDecrement={decrementItem} />
        </Col>
      </Row>
    </Container>
  );
};

export default MenuList;
