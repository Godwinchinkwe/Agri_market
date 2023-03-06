import React from 'react'
import "./Success.css"
import check from "../Checkout/check.png"

const Success = () => {
  return (
    <div className='Success-page-main1'>
        <div className='Success-page-main2'>
            <div className='Success-design-page1'>
                <img className='checkmark' src={check} alt = " " />
            </div>
            <div className='Success-design-page2'>
               <p className='yea'>Yeah!</p>
               <h1 className='pay'>Payment Successful</h1>
            </div>
            <button className='done'>Done</button>
        </div>
    </div>
  )
}

export default Success