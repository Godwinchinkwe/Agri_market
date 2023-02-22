import React, {useState} from 'react'
import "./Login.css"
import { MdRemoveRedEye } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function LoginInputs(props) {
  const [focused, setFocused] = useState(false);

  const doFocused =()=>{
    setFocused(true)
  }
  console.log(props.handleChange)
  return (
  <>
    <div style={{ marginTop: props.name === "password" ? 30 : null }} className="loginkkk">
        <label></label>
        <input
         type={props.type}
         name={props.name}
         onChange={props.handleChange}
         placeholder={props.placeholder}
         required={props.required}
         pattern={props.pattern}
         focus={focused.toString()}
         onBlur={doFocused}
         className="loginInput"
         
        />
         </div>
        <span className="errr">{props.errMsg}</span>
        {props.name === "password" ? props.view ? <AiOutlineEyeInvisible fontSize={20} className='login_eye pointer' onClick={() => { props.setView(!props.view) }} /> : <MdRemoveRedEye fontSize={20} className='login_eye pointer' onClick={() => { props.setView(!props.view) }} /> : null}
        
   
    </>
  
  )
}

export default LoginInputs