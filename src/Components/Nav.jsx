import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavList from "./NavList";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
function Nav() {
  let list = ["Home", "Electronics", "Women's Clothing", "Computers"];
  const [NavWidth, setNavWidth] = useState(0);
  return (
    <>
      <nav>
        <div className="hamburger" onClick={() => setNavWidth(220)}>
          <GiHamburgerMenu />
        </div>
        <div className="phone-nav" style={{ width: NavWidth }}>
          <button onClick={() => setNavWidth(0)}>close</button>
          <div className="listr">
            <NavList list={list} />
          </div>
        </div>
        <div className="logo">
          <Link to={"/"}>LOGO</Link>
        </div>
        <div className="nav-list">
          <Link to={"/allproduct"}>
            {" "}
            <NavList list={list} />
          </Link>
        </div>
        <div className="cart-icon">
          <Link to={"/cart"}>
            <AiOutlineShoppingCart />
          </Link>
        </div>
        <div className="account">
          <AiOutlineUser />
        </div>
      </nav>
    </>
  );
}

export default Nav;
