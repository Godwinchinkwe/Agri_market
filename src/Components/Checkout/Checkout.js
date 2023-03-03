// import React from 'react'
import "./Checkout.css"
import {ThemeContext} from "../API/Context"
import React, {useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';

function Checkout() {
    const {totalAmount}=useContext(ThemeContext)
    const getResponse = JSON.parse(localStorage.getItem("response"));

    function payKorapay() {
        window.Korapay.initialize({
            key: "pk_test_Rt9cMuchWeNGeBw6Dbiawd2GBJJ4yFNZvznRx3NZ",
            reference: uuidv4(),
            amount: (totalAmount), 
            currency: "NGN",
            customer: {
              name: (getResponse.data.data.firstName).concat(getResponse.data.data.lastName),
              email: (getResponse.data.data.email)
            },
            notification_url: "https://example.com/webhook"
        });
      }

  return (
    <div className='checkout_main'>
        <div className='checkout_wrap'>
            <h3>Order Slip</h3>
            <div className='ordersub'>
                <div className="order_left">
                    <p>Name :</p><br/>
                    <p>lastName:</p><br/>
                    <p>Email:</p><br/>
                    <p>total = </p>

                </div>
                <div className="order-right">
                    <p> {getResponse.data.data.firstName} </p><br/>
                    <p> {getResponse.data.data.lastName} </p><br/>
                    <p className="pemail">{getResponse.data.data.email}</p><br/>
                    <p>₦{totalAmount}</p>
                </div>
            </div>
            <button className="ordercheck" onClick={()=>payKorapay()}>Pay ₦{totalAmount} </button>
          
        </div>

    </div>
  )
}

export default Checkout