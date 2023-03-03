import React, {useState} from 'react'
import './Header.css'
import agi from './agi.png'
import Nav from './Nav'
import {useNavigate} from "react-router-dom"
import {ImMenu3  } from 'react-icons/im'
import {FaTimes} from 'react-icons/fa'
import Dropdown from './Dropdown'
import {CgProfile} from 'react-icons/cg'
// import Dropps from "./Dropps"


function Header() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
 


  const handlechange = () => { 
    setToggle(!toggle) 
  }

 



  // const handlechange = () => { setToggle(!toggle) }
  // const ImMenu  = (<ImMenu3 fontSize={"30px"} color="#0C764C" onClick={handlechange} />)
  // const FaTime = (<FaTimes fontSize={"30px"} color="#0C764C" onClick={handlechange} /> )


  const getResponse = JSON.parse(localStorage.getItem("response"));

   
  return (
    <div className="Header_Container">
       <div className="Main">
          < div className="Head_Content">
             <div className="images" >         
               <img src={agi} alt="" className='ape'
                onClick={() => navigate('/')} />
             </div>

              <Nav />
              {
                getResponse ?  <h4 className='login_response' onClick={() => navigate('/Dashboard')}>Welcome,<br/> {getResponse.data.data.firstName} <CgProfile fontSize={"28px"}/>  </h4>
                 : 
                (<div className='new'>
                <button className="butt" onClick={()=> navigate('/Choose')}>sign up</button>
                <button className='butt2'onClick={()=> navigate('/Login')}>Login</button>
            </div>)
              }
           

            <div className='Burger'>
               
              {toggle ? <FaTimes fontSize={"30px"} color="#0C764C" onClick={handlechange}/>: <ImMenu3 fontSize={"30px"} color="#0C764C" onClick={handlechange}/>}
              {toggle ? <Dropdown props={handlechange}/>: null}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header