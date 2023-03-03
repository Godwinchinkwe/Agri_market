import React from 'react'
import "./MarketPlace.css"
import Landcont from '../Landing/Landcont'
import Carousel from '../Carousel/Carousel'
// import Addpage from "../DashBoard/Addpage"
import katti from "../Landing/pie/katti.jpg"
import hen from "../Landing/pie/hen.jpeg"
import Goods from './Goods'
import Footer from "../Landing/Footer/Footer"
import {useNavigate} from "react-router-dom"


function MarketPlace() {
  const navigate = useNavigate()
  return (  
                               
    <div className='Market_main'>
      <div className='Market_wrap'>
      <div className='Market_top'>
      <input type="text" placeholder='  search' className='marketsearch'/> <button className="marketbutt"onClick={() => navigate('/Checkout')}>Search</button>
      </div>
      <h2>Livestock at your finger tips</h2>
    <marquee direction="left" width="40%"
    >Forget the hustle, lets go to the market for you!!!</marquee>
      <div className='market_load'>
      <Landcont
      ftext="Chicken  based on their breeds"
      text="Your health is a priority to us and we  have a list of healthy food items that will help you manage certain health conditions"
      click="add to cart" navigate="/Cart"
      img={hen} />
      <Landcont
      ftext="Shop Different Species of Catfish"
      text="You can view our list of catfish species and shop for the species that suits your meals..."
      click="add to cart" navigate="/Cart"
      img={katti} />
      </div>

      </div>
      <Carousel />
      <Goods />
      <Footer />
      {/* <Addpage /> */}
      {/* <Dashboard /> */}
      
      

    </div>
  
  )
}

export default MarketPlace