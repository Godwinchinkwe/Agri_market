import React from "react";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

function Nav() {
  let activeStyle = {
    textDecoration: "underline",
    fontSize:"15px",
    color:"green",
    fontWeight:"400"
    
  };
  
  const amount = useSelector((state) => state.commerce.amount);

  return (
    <div className="NavTab">
      <NavLink
        to="/"
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p className="headercenter"> HOME</p>
      </NavLink>
      <NavLink
        to={"MarketPlace/"}
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p className="headercenter" >MARKET PLACE</p>
      </NavLink>
      <NavLink
        to={"Cart/"}
        className="linkz"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p className="headercenter">
          CART
          <BsCart4 />{amount}
        </p>
      </NavLink>
    </div>
  );
}

export default Nav;
