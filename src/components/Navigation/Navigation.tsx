import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../Navbar/NavbarItem'
import Home from '../../pages/Home/Home'
import Products from '../../pages/Products/Products'
import Checkout from '../../pages/Checkout/Checkout'

type Props = {
  handleOpen: (state: boolean) => void;
}
const Navigation = ({handleOpen}: Props) => {
  return (
    <>
       <Navbar handleOpen={handleOpen} />
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/checkout' element={<Checkout/>} />
        </Routes>
    </>
  )
}

export default Navigation;