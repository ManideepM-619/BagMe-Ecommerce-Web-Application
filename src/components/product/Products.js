//import React, { useContext } from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
//import all_product from '../images/all_product'

const Products = (props) => {
  
  return (
    <div className=''>
        <Link to={`/productdetails/${props.id}`}><img className='imgs' onClick={window.scrollTo(0,0)}src={props.image} alt=''/></Link>
        <p>{props.name}</p>
        <div className='product-prices'>
            <div className='product-price-new'>
                ${props.new_price}
            </div>
            <div className='product-old-price'>
                ${props.old_price}
            </div>
        </div>

    </div>
  )
}

export default Products