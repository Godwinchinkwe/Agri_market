import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { removeItem, addToCart, minusItem, total } from "../../Redux/Features";
import { MdDelete } from "react-icons/md";

const CartItems =(props)=>{
  const [change, setChange] = useState(false)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(total())
}, [change, dispatch])

  
    return(
       
          <div className="Cart-Item">
            <img src={props.image} alt="cart-item"/>
            <h5>{props.title}</h5>
            <div className="Cart-Calc">
              <button  onClick={()=> {dispatch(addToCart(props.item)); setChange(!change)}}>+</button>
              <p>{props.QTY}</p>
              <button onClick={()=> {dispatch(minusItem(props.item)); setChange(!change)}}>-</button>
            </div>
            <h3>₦{props.price * props.QTY}</h3>
            <button className="delete" onClick={()=>{ dispatch(removeItem(props.item)); setChange(!change)}}>< MdDelete font-size="25px"/></button>
         
        </div>
    )
}

export default CartItems