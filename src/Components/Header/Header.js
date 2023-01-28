import React from 'react'
import './Header.css'
import agi from './agi.png'
import Nav from './Nav'
import {useNavigate} from "react-router-dom"
// import { AiOutlineShopping } from 'react-icons/ai'
import {ImMenu3  } from 'react-icons/im'


// import { FaTimes, } from 'react-icons/fa'
// import { FiAlignJustify } from 'react-icons/fi'



function Header() {
  const navigate = useNavigate();

 


   
  return (
    <div className="Header_Container">
       <div className="Main">
          < div className="Head_Content">
             <div className="image" >
             
               <img src={agi} alt="" onClick={() => navigate('/')} width="150px" height="40px"/> 
              
             </div> 
            <Nav />
            <div className='new'>
                <button className="butt">sign up</button>
                <button className='butt2'>Login</button>
            </div>
            <div className='Burger'>
              {/* <AiOutlineShopping/> */}
              <ImMenu3 fontSize={"30px"} color="#0C764C"/>

            </div>
            
          </div>
          
        </div>
    </div>
  )
}

export default Header