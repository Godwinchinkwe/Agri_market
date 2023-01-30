import React, {useState} from 'react'
import SignUpInput from "./SignIUpInput";
import "./SignUp.css"

function SignUp() {
  const [ value, setValues] = useState({
    name: "",
    email: "",
    address: "",
    password:"",
    confirmPassword: "",
  })

  const inputs = [{
    id:1,
    placeholder: "Name",
    type: "text",
    name: "Name",
    value: value.name,
    errMsg: "it has to be at least 4 characters and not more than 20 characters",
    required: true,
    pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
  
  },
{
  id:2,
  placeholder: "E-mail",
  type: "text",
  name:"E-mail",
  value: value.email,
  errMsg: "must be a valid email",
  required: true,
},
{
  id:3,
  placeholder: "Address",
  type: "Address",
  name:"Address",
  value: value.address,
  required: true,
},
{
  id:4,
  placeholder: "Password",
  type: "password",
  name:"Password",
  errMsg: "must all be numbers",
  value: value.password,
  required: true,
  pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$` 
},
{
  id:5,
  placeholder: "Confirm password",
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
      <div className="sign_wrap_text">
        <h2>Sign up</h2>
        </div>
         <div className=" mnbv">
         <p>Please complete the form to register to be an Agri Market Customer</p>
         {inputs.map((i)=>
           <SignUpInput key={i.id} {...i} handChange={handChange}
           value={value[i.name]} />
          )}
         </div>
        
        <button className='zaw'>Submit</button>
      </form>

    </div>
  )
}

export default SignUp