import React from "react";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Nav() {
  let activeStyle = {
    // color: "white",
    textDecoration: "underline",
    // backgroundColor:"#0C764C",
    // borderRadius:"8px",
  };

  return (
    <div className="NavTab">
      <NavLink
        to="/"
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p> HOME</p>
      </NavLink>
      <NavLink
        to={"MarketPlace/"}
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>MARKET PLACE</p>
      </NavLink>
      <NavLink
        to={"Cart/"}
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>
          CART
          <BsCart4 />
        </p>
      </NavLink>
    </div>
  );
}

export default Nav;
