import React, { useContext } from 'react'
//import all_product from '../images/all_product'
import { ShopContext } from '../../context/ShopContext'
import { useParams } from 'react-router-dom'; 
import Breadcrums from '../breadcrum/Breadcrums';
import './ProductDetails.css'
import ProductDisplay from './ProductDisplay';
import RelatedProducts from './relatedProducts/RelatedProducts';

const ProductDetails = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} =useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default ProductDetails