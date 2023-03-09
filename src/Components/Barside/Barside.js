import React from 'react'
import './Barside.css'
import Time from '../Time/Time';
import { useNavigate } from "react-router-dom";
import {FaUpload} from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { RiProductHuntFill } from "react-icons/ri";
import Swal from 'sweetalert2'



function Barside() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("response" );
       }


  return (
    <div className="dash_sidebar">
         <div className="dasth3" onClick={() => navigate('/Dashboard')}> <MdDashboard font-size="25px"/> <h4 > Dashboard </h4> </div>
         <div className="dasth3" onClick={() => navigate('/Uploadproduct')}> <FaUpload font-size="25px"/> <h4 > Upload </h4> </div>
         <div className="dasth3" onClick={() => navigate('/Settings')}> <IoMdSettings font-size="25px"/> <h4 > Settings</h4> </div>
         <div className="dasth3" onClick={() => navigate('/Deleteproduct')}> <RiProductHuntFill font-size="25px"/> <h4 > Products</h4> </div>
         <div className="dasth3" onClick={() => navigate('/Password')}>  < MdPassword font-size="25px"/>  <h4 >Security</h4> </div> 
         {/* <div  className="dasth3" onClick={() => {logout(); navigate('/')}} > <BiLogOutCircle font-size="25px"/> <h4>Logout</h4> </div> */}
         <div  className="dasth3" onClick={() => {Swal.fire({
  title: 'You are Login Out?',
  text: "Pls. confirm your Action",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Log Out'
}).then((result) => {
  if (result.isConfirmed)  {logout(); navigate('/');}
})}} > <BiLogOutCircle font-size="25px"/> <h4>Logout</h4> </div>
          <div className="timeshow">
            <Time />
          </div>
        </div>
  )
}

export default Barside