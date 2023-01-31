import React from 'react'
import "./Landing.css"
import Carousel from '../Carousel/Carousel'
import poult from "./pie/poult.jpg"
import {useNavigate} from "react-router-dom"
import Landcont from './Landcont'
import katti from "./pie/katti.jpg"
import hen from "./pie/hen.jpeg"
import catti from "./pie/catti.jpg"
import t1 from "./pie/t1.png"


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
                  <img src={poult} alt="" className='peesu' />
                </div>
 </div>
     <Carousel /> 
     <div className="landing_body">
      <h2>We ALWAYS want you to order for QUALITY Products</h2>
      <Landcont 
      ftext="Shop Different Species of Catfish"
      text="You can view our list of catfish species and shop for the species that suits your meals..."
      img={katti}/>
      <Landcont 
      ftext="Chicken  based on their breeds"
      text="Your health is a priority to us and we  have a list of healthy food items that will help you manage certain health conditions"
      img={hen}/>
      
      <Landcont
      img={catti}
       />
     </div>
     <div className='land_delivery'>
      <div className='land_delivery_text'>
        <h2>We Deliver All Your livestock Products
        to your location in 24 Hours</h2>
      </div>
      <div  className='land_div_img'>
        <img src={t1} alt="" className='land_delivery_image'/>
      </div>

     </div>
    </div>
  )
}

export default Landing