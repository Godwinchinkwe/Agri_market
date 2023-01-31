import React from 'react'
import "./Footer.css"
import AG from '../pie/AG.png'
import { ImFacebook2 } from 'react-icons/im';
import {FaTwitterSquare } from 'react-icons/fa';
import {BsLinkedin } from 'react-icons/bs';
import { SiInstagram} from 'react-icons/si';
import {IoLogoYoutube } from 'react-icons/io';
// import {SiWhatsapp } from 'react-icons/si';
import {MdAlternateEmail } from 'react-icons/md';
import {HiLocationMarker } from 'react-icons/hi';
import {MdContactPage } from 'react-icons/md';
import kora from "./kora.png"


function Footer() {
  return (
    <footer className='Footer_main'>
    <img src={AG} alt="" className='AG' />
    <div className='footer_wrap'>
      <div className='left_footer'>
<h4>follow us on:</h4> <br/>
<div className='left_footer_icon' >
<ImFacebook2 className='icon'/>
<br/>
<FaTwitterSquare className='icon'/>
<br/>
<BsLinkedin className='icon'/>
<br/>
<SiInstagram className='icon'/>
<br/>
<IoLogoYoutube className='icon'/>
</div>

      </div>

      <div className='center_footer' >
        <h4>Our partners</h4>
        <img src={kora} alt="" className='kora' />

      </div>
      <div className='right_footer'>
        <MdAlternateEmail className='icon'/>
        <p>Gmail</p>
        <p>info@agri_market.com</p> <br/><br/> 
        
        
<HiLocationMarker className='icon'/>
<p>location logo</p>
<p>location address</p> <br/> <br/> 

<MdContactPage className='icon'/>
<p>contact</p>
 <p>08064318819</p>
      </div>

    </div>

   </footer>
    
  )
}

export default Footer