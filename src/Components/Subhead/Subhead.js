import React from 'react'
import "./Subhead.css"
import { AiOutlineHome } from "react-icons/ai";
import {useNavigate} from "react-router-dom"

function Subhead() {

    const navigate = useNavigate()
    const getResponse = JSON.parse(localStorage.getItem("response"));

  return (
    <div className='Subheadmain'>
        <div className='subhead_wrap'>
        <p className='sunheader_test' onClick={() => navigate('/')}><AiOutlineHome fontSize={"30px"} color="#0C764C" /> Home</p>
{/* <AiOutlineHome fontSize={"30px"} color="#0C764C"  onClick={() => navigate('/')} /> */}

{ getResponse ? <div className='getlocalinfo'>
      <h4> Hello, {getResponse.data.data.firstName} </h4> 
        </div> : null}
        </div>

    </div>
  )
}

export default Subhead