import React, {useState} from 'react'
import SignUpInput from "./SignIUpInput";
import "./SignUp.css"
import Lg from "../SignUp/Lg.png"
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
  const [ value, setValues] = useState({
    name: "",
    email: "",
    address: "",
    password:"",
    confirmPassword: "",
  })

  const inputs = [{
    id:1,
    placeholder: "  Name",
    type: "text",
    name: "Name",
    value: value.name,
    errMsg: "it has to be at least 4 characters and not more than 20 characters",
    required: true,
    pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
  
  },
{
  id:2,
  placeholder: "  E-mail",
  type: "text",
  name:"E-mail",
  value: value.email,
  errMsg: "must be a valid email",
  required: true,
},
{
  id:3,
  placeholder: "  Address",
  type: "Address",
  name:"Address",
  value: value.address,
  required: true,
},
{
  id:4,
  placeholder: "  Password",
  type: "password",
  name:"Password",
  errMsg: "must all be numbers",
  value: value.password,
  required: true,
  pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$` 
},
{
  id:5,
  placeholder: "  Confirm password",
  type: "password",
  name:"Confirm password",
  value: value.confirmPassword,
  errMsg: "it has to match password",
  required: true,
  pattern: value.password,
}]

const handChange=(i)=>{
  setValues({...value, [i.target.name]:i.target.value})
}

const receiveValues =(i)=>{
  i.preventDefault()
}


  return (
    <div className='sign_main'>
      <form onSubmit={receiveValues} className='sign_form'>
        <img src={Lg} alt="" className='signlogo' />
      <div className="sign_wrap_text">
        <h2>Sign up</h2><br/>
        <p fontsize="12px">Please complete the registration form to be an Agri Market Customer</p><br/>
        </div>
         <div className=" mnbv">
         
         {inputs.map((i)=>
           <SignUpInput key={i.id} {...i} handChange={handChange}
           value={value[i.name]} />
          )}
         </div>
         <div className='check_cont'>
         <input type="checkbox"/> <p className='check_text'>I agree to the Terms of and service and privacy of policy of Agri market </p>
         </div>
        
        <button className='zaw'>Submit</button>
        <p>Already have an account ? <span onClick={()=> navigate('/Login')}>Login</span></p>
      </form>

    </div>
  )
}

export default SignUp