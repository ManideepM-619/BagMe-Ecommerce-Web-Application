// NewCollections.js

import React, { useState } from 'react';
import './NewCollections.css';
import new_collections from '../images/new_collections';
import Products from './Products';
import '../pages/CSS/ShopCategory.css';
import './Products.css'
const NewCollections = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? new_collections : new_collections.slice(0, 3);

  return (
    <div className='shop-category'>
      <h1>NEW COLLECTIONS</h1>
      <div className='shopcategory-products'>
        {displayedProducts.map((product, P) => (
          <Products
            key={P}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
      {new_collections.length > 3 && (
        <button className='expand-button' onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default NewCollections;
