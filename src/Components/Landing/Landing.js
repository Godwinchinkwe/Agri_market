import React from 'react'
import "./Landing.css"
import Carousel from '../Carousel/Carousel'
import hen from "./pie/poult.jpg"
import {useNavigate} from "react-router-dom"
import Landcont from './Landcont'
// import cat from "./pie/egg.jpeg"


function Landing() {
  const navigate = useNavigate();
  return (
    <div className='Main-Body'>
      <div className='main_wrap'>
      <div className='Agri-Main'>
            <div className='Textxx'>
                <h1 className='big_text'>LIVESTOCK PRODUCT AT YOUR FINGERTIPS</h1>
            
                <p className='smalltip'>We make livestock products available for you at the comfort of your warehouse. Don't have to stress yourself, just order for the products you want and we'll get it delivered. <br/><br/>
                We make livestock products available for you at the comfort of your warehouse. Don't have to stress yourself, just order for the products you want and we'll get it delivered.</p>
                </div>
                <br/>
                <div className='rele'>
                <button className='vbnt' onClick={()=> navigate('/MarketPlace')}>Shop Now</button>
                </div>
        </div>
        
        <div className='piccont'>
                  <img src={hen} alt="" className='peesu' />
                </div>
 </div>
     <Carousel /> 
     <div className="landing_body">
      <h2>We ALWAYS want you to order for QUALITY Products</h2>
      <Landcont />
      <Landcont />
      <Landcont />
     </div>
     <div className='land_delivery'>

     </div>
    </div>
  )
}

export default Landing