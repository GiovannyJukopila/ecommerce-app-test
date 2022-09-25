import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { getTotalItems } from '../../helpers/calculate';

type Props = {
  handleOpen: (state: boolean) => void;
}

const NavbarItem = ({ handleOpen } : Props) => {
  const { cartItems } = useContext(CartContext);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Products">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <FontAwesomeIcon 
        icon={faShoppingCart}
        color= 'white'
        size = '2x' 
        style= {{cursor: 'pointer'}}
        onClick= {() => handleOpen(true)}/>
        <Badge bg='secondary'>{ getTotalItems(cartItems)}</Badge>
      </Container>
    </Navbar>
  )
}

export default NavbarItem