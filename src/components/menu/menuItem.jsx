import { ShoppingCart } from 'lucide-react';
import { Card, Col, Row } from 'react-bootstrap';
import './menu.css';

const MenuItem = ({ item, onClick }) => {
  return (
    // <div className="menu-item" onClick={onClick}>
        <Card className='mb-4 h-100 menuItemCard' onClick={onClick} >
          <Card.Img variant="top" src={item.img} style={{height: '200px', objectFit: "cover"}} />
          <Card.Body className='d-flex flex-column'>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text className='flex-grow-1'>
              {item.description.length > 60 ? item.description.substring(0, 57) + '...' : item.description}
            </Card.Text>
            <Row className="align-items-center mt-auto">
              <Col>
              <Card.Text className="fw-bold mb-0">
              Ksh. {item.price.toFixed(2)}
            </Card.Text>
              </Col>
              <Col className="text-end">
            <ShoppingCart color='#F39850' size={22} className='shoppingCartIcon' />

              </Col>
            </Row>
            
          </Card.Body>
        </Card>
    // </div>
  );
}
export default MenuItem;