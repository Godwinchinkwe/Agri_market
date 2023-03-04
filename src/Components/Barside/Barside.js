import React from 'react'
import './Barside.css'
import Time from '../Time/Time';
import { useNavigate } from "react-router-dom";
import {FaUpload} from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import { MdPassword } from "react-icons/md";

function Barside() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("response" );
       }


  return (
    <div className="dash_sidebar">
         <div className="dish_dish_name">  <h3 onClick={() => navigate('/Dashboard')}>Dashboard</h3> </div>
         <div className="dasth3" onClick={() => navigate('/Deleteproducts')}> <FaUpload font-size="25px"/> <h4 > Upload </h4> </div>
         <div className="dasth3" onClick={() => navigate('/Settings')}> <IoMdSettings font-size="25px"/> <h4 > Settings</h4> </div>
         <div className="dasth3" onClick={() => navigate('/Deleteproducts')}> <IoMdSettings font-size="25px"/> <h4 > Products</h4> </div>
         <div className="dasth3" onClick={() => navigate('/Resetpassword/1')}>  < MdPassword font-size="25px"/>  <h4 >Security</h4> </div> 
         <div  className="dasth3" onClick={() => {logout(); navigate('/')}} > <BiLogOutCircle font-size="25px"/> <h4>Logout</h4> </div>
          <div className="timeshow">
            <Time />
          </div>
        </div>
  )
}

export default Barside