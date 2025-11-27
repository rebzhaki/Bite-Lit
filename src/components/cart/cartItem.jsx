import {Trash2 } from 'lucide-react';
import { Button, Card } from 'react-bootstrap';

const CartItem = ({ item, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.img} height={300} width={300} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.quantity}
            </Card.Text>
            <Card.Text>
              ${item.price.toFixed(2)}
            </Card.Text>
            <Button variant="primary"><Trash2 /></Button>
          </Card.Body>
        </Card>
    </div>
  );
}
export default CartItem;