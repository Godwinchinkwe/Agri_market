import React, {useState} from 'react'
import LoginInputs from "./LoginInputs"
import "./Login.css"

function Login() {

  const [ value, setValue] = useState({
    email:"",
    password:"",
  })

  const inputs = [{
    id:1,
    placeholder: "E-mail",
        type: "text",
        name:"E-mail",
        value: value.email,
        errMsg: "must be a valid email",
        required: true,
  },
{
  id:2,
  placeholder: "Password",
  type: "password",
  name:"Password",
  errMsg: "must all be numbers",
  value: value.password,
  required: true,
  pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
}]

const handChange=(e)=>{
  setValue({...value, [e.target.name]:e.target.value})
}

  
  return (
    <div>
      <form>
        <h3>Login</h3>
        {inputs.map((e)=>
        <LoginInputs key={e.id} {...e}  handChange={handChange}/>
        )}

           <button>Submit</button>
      </form>
    </div>
  )
}

export default Login