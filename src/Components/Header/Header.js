import React, {useState} from 'react'
import './Header.css'
import agi from './agi.png'
import Nav from './Nav'
import {useNavigate} from "react-router-dom"
import {ImMenu3  } from 'react-icons/im'
import {FaTimes} from 'react-icons/fa'


function Header() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => { setToggle(!toggle) }
  const ImMenu  = (<ImMenu3 fontSize={"30px"} color="#0C764C" onClick={handleToggle} />)
  const FaTime = (<FaTimes fontSize={"30px"} color="#0C764C" onClick={handleToggle} /> )



   
  return (
    <div className="Header_Container">
       <div className="Main">
          < div className="Head_Content">
             <div className="images" >
             
               <img src={agi} alt="" className='ape'
                onClick={() => navigate('/')} />

             </div> 
            <Nav />
            <div className='new'>
                <button className="butt" onClick={()=> navigate('/Choose')}>sign up</button>
                <button className='butt2'onClick={()=> navigate('/Login')}>Login</button>
            </div>
            <div className='Burger'>
              {toggle ? ImMenu : FaTime}

            </div>
          </div>
        </div>
    </div>
  )
}

export default Header