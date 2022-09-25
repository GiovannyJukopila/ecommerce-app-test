import React from 'react'
import useFetch from '../../../../hooks/useFetch';
import { ProductItem } from '../../../../interfaces/interfaceApp';
import Product from '../../../ListProducts/Product/Product';
import '../styles.css';


const HomeProducts = () => {
  const{ products, isLoading } = useFetch();
  const someProducts = products.slice(products.length - 4)
  const handleAddToCart = (product: ProductItem) => {
    console.log('Agregando ...')
  }
  return (
    
    <>
    <div className='center-class'>
    <h2 className='center-title'> Productos recomendados</h2>
    {
      
      someProducts.map(product => (
        
        <Product 
          key = {product.id}
          product={product}
          handleAddToCart={handleAddToCart}/>
      ))
    }
    </div>
    </>
  )
}

export default HomeProducts