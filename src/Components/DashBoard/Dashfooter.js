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
       <div className='dahsfutz'><MdDashboard className='dashfootdown' onClick={() => navigate('/Dashboard')}/> <p> Dashboard</p> </div> |
         <div className='dahsfutz'> <FaUpload className='dashfootdown' onClick={() => navigate('/Uploadproduct')}/> <p> Upload</p> </div>|
          <div className='dahsfutz'> <IoMdSettings className='dashfootdown' onClick={() => navigate('/Settings')}/> <p>settings </p> </div> |
          <div className='dahsfutz'> <RiProductHuntFill className='dashfootdown' onClick={() => navigate('/Deleteproduct')}/> <p> Products</p> </div>  |
          <div className='dahsfutz' > <MdPassword className='dashfootdown' onClick={() => navigate('/Resetpassword')}/> <p> password</p> </div>  |
         <div > <BiLogOutCircle onClick={() => {logout(); navigate('/')}} className='dashfootdown'/> <br/> <p className='lgout'>Logout</p> </div> 

        </div>
    </div>
  )
}

export default Dashfooter