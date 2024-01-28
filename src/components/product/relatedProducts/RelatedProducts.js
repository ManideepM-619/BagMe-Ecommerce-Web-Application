import React from 'react'
import './RelatedProducts.css'
import data_product from '../../images/data'
import Product from '../Products'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className='relatedproducts-item'>
        {data_product.map((product,p)=>{
          return(
            <Product key={p} id={product.id} 
            name={product.name} 
            image={product.image} 
            new_price={product.new_price} 
            old_price={product.old_price}/>
          )
        })}
      </div>
    </div>
  )
}

export default RelatedProducts