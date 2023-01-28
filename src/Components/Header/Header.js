import React from 'react'
import './Header.css'
import agi from './agi.png'
import Nav from './Nav'
// import { FaTimes, } from 'react-icons/fa'
// import { FiAlignJustify } from 'react-icons/fi'



function Header() {

   
  return (
    <div className="Header_Container">
       <div className="Main">
          < div className="Head_Content">
             <div className="image" >
             
               <img src={agi}  alt="" width="150px" height="40px"/> 
              
             </div> 
            <Nav />
            <div className='new'>
                <button className="butt">sign up</button>
                <button className='butt2'>Login</button>
            </div>
            
          </div>
          
        </div>
    </div>
  )
}

export default Header