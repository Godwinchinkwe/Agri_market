import React from 'react'
import './Uploadproduct.css'
import Barside from '../Barside/Barside'
import {useEffect} from "react"
import Subhead from '../Subhead/Subhead'
import Addpage from '../DashBoard/Addpage'

function Uploadproduct({props}) {

    useEffect(() => {
        props()
      }, [props])

  return (
    <>
    <Subhead/>
    <div className='deleteproducts_main'>
        <div className='deleteproducts_wrap'>
            <Barside/>
            <div className='delete_cont'>
                <Addpage />

            </div>

        </div>

    </div>
    </>
  )
}

export default Uploadproduct