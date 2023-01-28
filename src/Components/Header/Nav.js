import React from 'react'
import {BsCart4} from "react-icons/bs"
// import {Link} from "react-router-dom"

function Nav() {
  return (
    <div className="NavTab">
       <p> HOME</p>
       <p>MARKET PLACE</p>
       <p>CART<BsCart4/></p>
    </div>
    
  )
}

export default Nav