import React from 'react'
import './Popular.css'
import data_product from '../images/data.js'
import Products from '../product/Products'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN STORE</h1>
        <hr/>
        <div className='popular-product'>
            {data_product.map((product,P)=>{
              return (
              <Products key={P} id={product.id} 
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

export default Popular