import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import HomeFooter from '../../components/HomeContent/Footer/HomeFooter';
import ListProducts from '../../components/ListProducts/ListProducts'
import Sidebar from '../../components/SideBar/Sidebar';
import './styles.css';

const Products = () => {
  return (
    <div>
    <Container className= 'mt-3 home'>
      <ListProducts />
    </Container>
    <HomeFooter />
    </div>
  )
}

export default Products;