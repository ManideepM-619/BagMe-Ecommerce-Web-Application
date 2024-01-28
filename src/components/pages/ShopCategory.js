import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../../context/ShopContext';
import dropdown_icon from '../images/dropdown_icon.png';
import Products from '../product/Products';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of n products
        </p>
        <div className='shopcategory-sort'>
          sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((product, p) => {
          if (props.category === product.category) {
            return (
              <div key={p} className='product-card'>
                <Products
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  new_price={product.new_price}
                  old_price={product.old_price}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>Explore More</div>
    </div>
  );
};

export default ShopCategory;
