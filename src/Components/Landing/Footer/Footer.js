import React from 'react'
import "./Footer.css"
import AG from '../pie/AG.png'
import { ImFacebook2 } from 'react-icons/im';
import {FaTwitterSquare } from 'react-icons/fa';
import {BsLinkedin } from 'react-icons/bs';
import { SiInstagram} from 'react-icons/si';
import {IoLogoYoutube } from 'react-icons/io';
import {SiWhatsapp } from 'react-icons/si';
import {MdAlternateEmail } from 'react-icons/md';
import {HiLocationMarker } from 'react-icons/hi';
import {MdContactPage } from 'react-icons/md';
import Koraa from "./koraa.png"
import Curve from "./curve.png"


function Footer() {
  return (
    <footer className='Footer_main'>
    <img src={AG} alt="" className='AG' />
    <div className='footer_wrap'>
      <div className='left_footer'>
<h4>follow us on:</h4> <br/>
<div className='left_footer_icon' >
<ImFacebook2 className='icons'/>
<br/>
<FaTwitterSquare className='icons'/>
<br/>
<BsLinkedin className='icons'/>
<br/>
<SiInstagram className='icons'/>
<br/>
<IoLogoYoutube className='icon'/>
</div><br/> <br/>

<SiWhatsapp className="icon"/>
        <p>whatsapp</p>
        <p>08064318819</p><br/> <br/>

      </div>

      <div className='center_footer' >
        <h4>Our Sponsors</h4><br/>
        <img src={Koraa} alt="" className='kora' /><br/>
        <img src={Curve} alt="" className='curve' /><br/><br/>
        <h4>About us page</h4>

      </div>
      <div className='right_footer'>
        <MdAlternateEmail className='icon'/>
        <p>Gmail</p>
        <p>info@agri_market.com</p> <br/><br/> 
{/* 
        <SiWhatsapp className="icon"/>
        <p>whatsapp</p>
        <p>08064318819</p><br/> <br/> */}
        
        
<HiLocationMarker className='icon'/>
<p>location address</p>
<p>33 Apena Stree street</p> <br/> <br/> 

<MdContactPage className='icon'/>
<p>contact</p>
 <p>08064318819</p>
      </div>

    </div>
    <div className='footer_bottom'>
      <h4>Privacy Policy</h4> |
      <h4>Terms of Service</h4> |
      <h4>2023 Agri_Market</h4>
    </div>

   </footer>
    
  )
}

export default Footer