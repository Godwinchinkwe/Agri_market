import React from 'react'
import "./Marketplace.css"
import Landcont from '../Landing/Landcont'
import Carousel from '../Carousel/Carousel'

function MarketPlace() {
  return (
    <div className='Market_main'>
    
      <div className='Market_wrap'>
      <div className='Market_top'>
      <input type="text" placeholder='search' className='marketsearch'/> <button>Search</button>
      </div>
      <h2>Livestock at your finger tips</h2>
    <p>Forget the hustle, lets go to the market for you!!!</p>
      <div className='markt_cont'>
      <Landcont />
      <Landcont />
      </div>

      </div>
      <Carousel />
      <div className="markt_cont">
        <Landcont />
        <Landcont />
      
      </div>
      

    </div>
  )
}

export default MarketPlace