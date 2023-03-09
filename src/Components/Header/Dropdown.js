import React from 'react'
import "./Header.css"
import {useNavigate} from "react-router-dom"
import { BsCart4 } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import "./Dropps.css"
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'


function Dropdown(prop) {

  const {props} = prop  
    const navigate = useNavigate();
    const getResponse = JSON.parse(localStorage.getItem("response"));

     const logout = () => {
      localStorage.removeItem("response" );
     }

     const cart = useSelector((state) => state.Commerce.cart);
     
  return (
    <div className='drop_main'>
     <div className='drop_wrap'>
<p className='dipdrop' onClick={() => {props(); navigate('/')}}>Home</p><br/>
<p className='dipdrop' onClick={() => {props(); navigate('/MarketPlace')}}>Market Place</p><br/>
<p className='dipdrop' onClick={() => {props(); navigate('/Cart')}}>Cart <BsCart4 /> {cart.length} </p><br/>


 
{ getResponse ? <> <p className='dipdrop' onClick={() => {props(); navigate('/Dashboard')}}>Dashboard</p> <br/>
<p className='dipdrop' onClick={() => {Swal.fire({
  title: 'You are Login Out?',
  text: "Pls. confirm your Action",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Log Out'
}).then((result) => {
  if (result.isConfirmed)  {logout(); navigate('/');}
})}} > Logout < BiLogOutCircle/>
</p> </>
 :

 <> <p className='dipdrop' onClick={() => {props(); navigate('/Choose')}}>Sign up</p><br/>
  <p className='dipdrop' onClick={() => {props(); navigate('/login')}}>Log in</p><br/></>}

    </div>
    </div>
  )
}

export default Dropdown