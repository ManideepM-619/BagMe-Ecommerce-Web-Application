import React, { createContext, useState } from "react";
import all_product from "../components/images/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add login state

  const addToCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };

  const gtca = () => {
    let totalAmount = 0;
    for (const i in cartItems) {
      if (cartItems[i] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(i));
        totalAmount += itemInfo.new_price * cartItems[i];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    setCartItems,
    getDefaultCart,
    gtca,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    isLoggedIn, 
    setIsLoggedIn, 
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
