import React from 'react'
import "./Landing.css"
import Carousel from '../Carousel/Carousel'
import hen from "./pie/poult.jpg"
// import cat from "./pie/egg.jpeg"


function Landing() {
  return (
    <div className='Main-Body'>
      <div className='main_wrap'>
      <div className='Agri-Main'>
            <div className='Textxx'>
                <h1 className='big_text'>LIVESTOCK PRODUCT AT YOUR FINGERTIPS</h1>
            
                <p className='smalltip'>We make livestock products available for you at the comfort of your warehouse. Don't have to stress yourself, just order for the products you want and we'll get it delivered.</p>
                </div>
                <br/>
                <button className='butt2'>Shop Now</button>
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