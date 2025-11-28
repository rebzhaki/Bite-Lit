import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Cart from "../cart/cart";
import MenuItem from "./menuItem";
import { useContext, useEffect, useState } from "react";
import data from "../../data/db.json";
import { SearchContext } from "../../context/searchContext";
import { CircleAlert } from "lucide-react";

const MenuList = () => {
  const menuItems = data;

  const [cartItems, setCartItems] = useState([]);
  const [addedItemsID, setIsAddedItemsID] = useState([]);
  const [cartCount, setCartCount] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { searchQuery, category, updateCategory } = useContext(SearchContext);

  const filteredBySearch = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredByCategory = filteredBySearch.filter((item) => {
    return category === "All" ? true : item.category === category;
  });

  let newMenuData = filteredByCategory;
  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const addToCart = (item) => {
    console.log(`Added ${item.name} to cart.`);
    if (addedItemsID.includes(item.id)) {
      incrementItem(item.id);
      return;
    }

    setCartItems([...cartItems, item]);
    setIsAddedItemsID([...addedItemsID, item.id]);
    setCartCount({ ...cartCount, [item.id]: 1 });
  };
  const incrementItem = (itemId) => {
    const item = menuItems.find((item) => item.id === itemId);

    if (cartCount[itemId] >= item.quantity) return;
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
    const storedCart = sessionStorage.getItem("cartItems");
    const storedCounts = sessionStorage.getItem("cartCount");
    const storedAddedIDs = sessionStorage.getItem("addedItemsID");

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    if (storedCounts) {
      setCartCount(JSON.parse(storedCounts));
    }
    if (storedAddedIDs) {
      setIsAddedItemsID(JSON.parse(storedAddedIDs));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    sessionStorage.setItem("cartCount", JSON.stringify(cartCount));
    sessionStorage.setItem("addedItemsID", JSON.stringify(addedItemsID));
  }, [cartItems, cartCount, addedItemsID]);

  return (
    <Container fluid className="mt-5 py-4">
      <Row>
        <Col md={9} xs={12} className="menuItemCol">
          <Row className="mb-4 mt-2 align-items-center">
            <Col xs={6} md={9}>
              <h2 className="fw-bold">Menu</h2>
            </Col>
            <Col
              xs={6}
              md={3}
              className="filterCol"
            >
              <Form.Select
                aria-label="Filter by category"
                value={category}
                onChange={(e) => updateCategory(e.target.value)}
                className="w-100"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Row>
            {newMenuData.length === 0 && (
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: "60vh" }}
              >
                <CircleAlert size={100} className="mb-3" stroke="#F39850" />
                <p className="fw-bold fs-5">No items match your search.</p>
                <Button
                  style={{ backgroundColor: "#F39850", border: "none" }}
                  onClick={() => window.location.reload()}
                >
                  {" "}
                  All Products{" "}
                </Button>
              </div>
            )}
            {newMenuData.map((item) => (
              <Col
                key={item.id}
                xs={12}
                sm={6}
                md={6}
                lg={3}
                className="d-flex mb-4"
              >
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
          <div className="cartWrapper mt-3 px-3 mb-5">
            <Cart
              cartItems={cartItems}
              quantities={cartCount}
              onIncrement={incrementItem}
              onDecrement={decrementItem}
            />
          </div>
        </Col>
        <Col md={3} className="cartColMobile">
          <Cart
            cartItems={cartItems}
            quantities={cartCount}
            onIncrement={incrementItem}
            onDecrement={decrementItem}
            isMobile={true}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MenuList;
