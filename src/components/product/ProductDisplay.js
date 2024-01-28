import React from 'react';
import './ProductDisplay.css';
import star_icon from '../images/star_icon.png';
import star_dull_icon from '../images/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='producdisplay-img-list'></div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className='productdisplay-rigt'>
        <h1 className='delhp'>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p className='delhs'>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='prductdisplay-right-price-old'>₹{product.old_price}</div>
          <div className='prductdisplay-right-price-new'>₹{product.new_price}</div>
        </div>
        <div className=''>
          <h1 className='delh'>Select Size</h1>
          <div className='productdisplay-right-size'>
            <div>10L</div>
            <div>15L</div>
            <div>20L</div>
            <div>25L</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
