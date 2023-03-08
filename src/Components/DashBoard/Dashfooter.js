import React from 'react'
import "./Dashfooter.css"
import { MdPassword } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import {FaUpload} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { RiProductHuntFill } from "react-icons/ri";



function Dashfooter() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("response" );
   }

  return (
    <div className='Dashfooter_main'>
        <div className='dashfooter_wrap'>

       <div className='dahsfutz' onClick={() => navigate('/Dashboard')}> <MdDashboard className='dashfootdown' /> <p className='pegege'> Dashboard</p> </div> |
         <div className='dahsfutz' onClick={() => navigate('/Uploadproduct')} > <FaUpload className='dashfootdown' /> <p className='pegege'> Upload</p> </div>|
          <div className='dahsfutz' onClick={() => navigate('/Settings')} > <IoMdSettings className='dashfootdown' /> <p className='pegege'>settings </p> </div> |
          <div className='dahsfutz'  onClick={() => navigate('/Deleteproduct')}> <RiProductHuntFill className='dashfootdown'/> <p className='pegege'> Products</p> </div>  |
          <div className='dahsfutz' onClick={() => navigate('/Password')} > <MdPassword className='dashfootdown' /> <p className='pegege'> password</p> </div>  |
         <div className='dahsfutz' onClick={() => {logout(); navigate('/')}} > <BiLogOutCircle  className='dashfootdown'/> <p className='pegege'>Logout</p> </div> 

        </div>
    </div>
  )
}

export default Dashfooter