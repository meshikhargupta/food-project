import React from "react";
import { Link } from "react-router-dom";
import Home from "../assets/home.svg";
import Cart from "../assets/cart.svg";
import Logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center py-5 w-full sticky top-0 bg-white z-10">
      <Link to="/" className="cursor-pointer">
        <img src={Logo} alt="logo" />
      </Link>

      <div>
        <ul className="flex gap-10 cursor-pointer">
          <li>
            <Link to={"/"} className="flex items-center gap-2">
              <img src={Home} alt="home" />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="flex items-center gap-2">
              <img src={Cart} alt="cart" />
              <p>
                Cart (<span className="text-red-500">{cartItems.length}</span>)
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
