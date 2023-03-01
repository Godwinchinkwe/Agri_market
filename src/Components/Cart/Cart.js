import React, {useContext} from 'react'
import "./Cart.css";
import CartItems from './CartItems'
import { useSelector, useDispatch } from 'react-redux';
import {clearCart} from "../../Redux/Features";
import {ThemeContext} from "../API/Context"
import { BsCart4 } from "react-icons/bs";
import Emptycart from "./Emptycart"
import Swal from 'sweetalert2'
// import { useState } from 'react';


const Cart = () => {
  const {totalAmount}=useContext(ThemeContext)
  const cart = useSelector((state) => state.commerce.cart);
  const dispatch = useDispatch()
  // const [clear, setClear] = useState(false)

  

  return (
   
    <div className="Cart-Holder">
       
      {cart.length === 0 ? <Emptycart /> :<div className="Cart-Box">
      <h2>Shopping Cart</h2><br/>
      <div className="Cart-Title">
       
        <h3>Total= ₦{totalAmount}</h3>
        {/* <h4 onClick={()=> {dispatch(clearCart());Swal.fire({ */}
        <h4 onClick={()=> {;Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Clear All!'
}).then((result) => {
  if (result.isConfirmed) {dispatch(clearCart());
    Swal.fire(
      'Cleared!',
      'Your cart has been Cleared.',
      'success'
    )
  }
})}} >Clear<BsCart4/></h4>
      </div>
      <div className="Cart-Items">
      {
        cart?.map((props)=>(
          <CartItems key={props._id} image={props.image} title={props.title} price={props.price} item={props} QTY={props.QTY} />
        ))
      } 
      </div>
      <div className="Cart-Check">
      <button onClick={
            function payKorapay() {
              window.Korapay.initialize({
                  key: "pk_test_hvmxqvX6y7hefdRtdc6ncX316GUbD37FLfazLUvC",
                  reference: "your-unique",
                  amount: 22000, 
                  currency: "NGN",
                  customer: {
                    name: "John Doe",
                    email: "john@doe.com"
                  },
                  notification_url: "https://example.com/webhook"
              });
          }
      }> Check Out </button>
      </div>
      </div>}
    </div>
  )
}

export default Cart



// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer)
//     toast.addEventListener('mouseleave', Swal.resumeTimer)
//   }
// })

// Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully'
// })