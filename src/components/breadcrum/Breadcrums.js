import React from 'react'
import './Breadcrums.css'
import arrowIcon from '../images/breadcrum_arrow.png';


const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
      HOME <img className='imgse' src={arrowIcon} alt=''/>
      {product.category} 
      <img src={arrowIcon} alt=''/>
      {product.name}
    </div>
  )
}

export default Breadcrums