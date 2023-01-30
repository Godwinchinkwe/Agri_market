import React from 'react'
import "./Landing.css"
import Carousel from '../Carousel/Carousel'
import hen from "./pie/poult.jpg"
import {useNavigate} from "react-router-dom"
// import cat from "./pie/egg.jpeg"


function Landing() {
  const navigate = useNavigate();
  return (
    <div className='Main-Body'>
      <div className='main_wrap'>
      <div className='Agri-Main'>
            <div className='Textxx'>
                <h1 className='big_text'>LIVESTOCK PRODUCT AT YOUR FINGERTIPS</h1>
            
                <p className='smalltip'>We make livestock products available for you at the comfort of your warehouse. Don't have to stress yourself, just order for the products you want and we'll get it delivered.</p>
                </div>
                <br/>
                <div className='rele'>
                <button className='butt2' onClick={()=> navigate('/MarketPlace')}>Shop Now</button>
                </div>
        </div>
        
        <div className='piccont'>
                  <img src={hen} alt="" className='peesu' />
                </div>
 </div>
     <Carousel /> 
    </div>
  )
}

export default Landing