import React, { useState } from "react";
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
        <div className="logo">LOGO</div>
        <div className="nav-list">
          <NavList list={list} />
        </div>
        <div className="cart">
          <AiOutlineShoppingCart />
        </div>
        <div className="account">
          <AiOutlineUser />
        </div>
      </nav>
    </>
  );
}

export default Nav;
