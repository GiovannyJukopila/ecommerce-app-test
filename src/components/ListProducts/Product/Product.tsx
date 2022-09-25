import { ProductItem } from '../../../interfaces/interfaceApp';
import { Button, Card } from 'react-bootstrap';

import './styles.css'
import { useState } from 'react';

type Props = {
  product: ProductItem;
  handleAddToCart: (product: ProductItem) => void;
}

const Product = ({product, handleAddToCart}: Props) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
      <Button onClick={() => setShowDetails(!showDetails)}variant="light" style={{ width: '15rem', margin: '5px' }}>
          <Card.Img variant="top"  src={product.image} className='card-img'/>
          <Card.Body>
              <Card.Title className='card-title'>{product.title}</Card.Title>
              {showDetails && (<Card.Text className='card-description'>
                    {product.description}
                </Card.Text>)}
              Precio: ${product.price}
          </Card.Body>
          <Button variant="primary" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
      </Button>
  )
}

export default Product;