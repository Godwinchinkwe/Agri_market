import React from 'react'
import './Deleteproduct.css'
import Subhead from '../Subhead/Subhead'
import Barside from '../Barside/Barside'
import {useEffect} from "react"
import Dashfooter from '../DashBoard/Dashfooter'
import Products from '../Uploadproduct/Products'
// import Goods from '../MarketPlace/Goods'
// import Allgoods from '../MarketPlace/Allgoods'

function Deleteproduct({props}) {

    useEffect(() => {
        props()
      }, [props])

  return (
    <>
    <Subhead/>
    <div className='deleteMain'>
        <div className='deleteWrap'>
            <Barside />
            <div className='delete_cont'>
              {/* <Products /> */}
              <div className='all_products'>
                <h2> Your uploaded Products </h2>
              </div>
              <Products />

            </div>

        </div>

    </div>
    <Dashfooter />
    </>
  )
}

export default Deleteproduct