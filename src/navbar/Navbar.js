import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import blackoption from "../components/images/main_logo.png";
import cart_icon from "../components/images/cart_icon.png";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const { getTotalCartItems, isLoggedIn, setIsLoggedIn, setCartItems } =
    useContext(ShopContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCartItems(getTotalCartItems());
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
      <div className="nav-logo">
        <img
          src={blackoption}
          alt=""
          style={{ width: "15%", height: "auto" }}
        />
      </div>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/men" style={{ textDecoration: "none" }}>
            Men
          </Link>
        </li>
        <li>
          <Link to="/women" style={{ textDecoration: "none" }}>
            Women
          </Link>
        </li>
        <li>
          <Link to="/kid" style={{ textDecoration: "none" }}>
            Kids
          </Link>
        </li>
        <li>
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
            ABout-us
          </Link>
        </li>
        <li>
          <Link to="/askUs" style={{ textDecoration: "none" }}>
            Ask-Us
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart ml-5">
        {console.log(isLoggedIn)}
        {isLoggedIn ? (
          <Link to="/" style={{ textDecoration: "none" }}>
            <button onClick={handleLogout}>Logout</button>
          </Link>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
