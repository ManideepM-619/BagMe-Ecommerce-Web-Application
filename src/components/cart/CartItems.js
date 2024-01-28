// CartItems.js
import React, { useContext } from "react";
import "./Cartitems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../images/cart_cross_icon.png";

const CartItems = () => {
  const { gtca, all_product, cartItems, removeFromCart, isLoggedIn } =
    useContext(ShopContext);

  const handleProceedToCheckout = () => {
    // Check if the user is logged in
    if (isLoggedIn) {
      // Proceed to checkout logic
      alert("Proceeding to checkout...");
    } else {
      // Display a message to login
      alert("Please login to proceed to checkout.");
      // You can redirect the user to the login page or show a modal for login
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((p) => {
        if (cartItems[p.id] > 0) {
          return (
            <div>
              <div className="cartitems-format">
                <img src={p.image} alt="" className="cart-product-icon" />
                <p>{p.name}</p>
                <p className="cartitems-quantity">{cartItems[p.id]}</p>
                <p>${p.new_price * cartItems[p.id]}</p>
                <p>
                  {
                    <img
                      className="cartitems-remove-icon"
                      src={remove_icon}
                      onClick={() => {
                        removeFromCart(p.id);
                      }}
                      alt=""
                    />
                  }
                </p>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
        </div>
        <div className="cartitems-total-item">
          <p>Subtotal</p>
          <p>${gtca()}</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
          <h3>Total</h3>
          <h3>${gtca()}</h3>
        </div>
        <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cartitems-promocode">
        <p>Apply promo</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder="code..." />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
