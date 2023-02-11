import React from 'react'
import "./Cart.css"
import fish from "../Landing/pie/main-catfish.jpg"
import hen from "../Landing/pie/hen.jpeg"

// import { useNavigate } from 'react-router-dom'

const Cart = () => {

  return (
    <div className="Cart-Holder">
    <div className="Cart-Box">
    <div className="Cart-Title">
      {/* <h4>Shopping Cart</h4> */}
      <h3>Total:  ₦</h3>
      <p>Remove all</p>
    </div>
    <div className="Cart-Items">
      <div className='img-Holder'>
        <div className="channel">
           <img className='channel1' src={fish} alt="" />
        </div>
       
       
        <div className='pay'>
           <h3>Channel Catfish</h3>
            {/* <p>NGN 6,000</p> */}
        </div>
      <div className='addUp'>
        <button className='plus'>+</button>
          <p>0</p>
        <button className='minus'>-</button>
        <button className='del'>Del</button>
      </div>
      </div>
    </div>
    
    <div className="Cart-Check">
    <button className='checkOut'>Check Out</button>
    </div>
    </div>
    <div className="Cart-Box">
    <div className="Cart-Title">
      {/* <h4>Shopping Cart</h4> */}
      <h3>Total:  ₦</h3>
      <p>Remove all</p>
    </div>
    <div className="Cart-Items">
      <div className='img-Holder'>
        <div className="channel">
           <img className='channel1' src={hen} alt="" />
        </div>
       
       
        <div className='pay'>
           <h3>Chicken</h3>
            {/* <p>NGN 6,000</p> */}
        </div>
      <div className='addUp'>
        <button className='plus'>+</button>
          <p>0</p>
        <button className='minus'>-</button>
        <button className='del'>Del</button>
      </div>
      </div>
    </div>
    
    <div className="Cart-Check">
    <button className='checkOut'>Check Out</button>
    </div>
    </div>

   
  </div>
  )
}
export default Cart