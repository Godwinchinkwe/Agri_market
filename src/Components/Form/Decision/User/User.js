import React, {useState, useEffect} from 'react'
import SignUpInput from '../../SignUp/SignIUpInput'
import "./User.css"
import Lg from '../../SignUp/Lg.png'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function SignUp() {
  const navigate = useNavigate()

  const [ value, setValues] = useState({
   firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location:"",
    password:"",
    admin: false,
  });

  
 

  const inputs = [{
    id:1,
    placeholder: " First Name",
    type: "text",
    name: "firstName",
    // value: value.name,
    errMsg: "it has to be at least 4 characters and not more than 20 characters",
    required: true,
    pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
  
  },
  {
    id:2,
    placeholder: " Last Name",
    type: "text",
    name: "lastName",
    // value: value.name,
    errMsg: "it has to be at least 4 characters and not more than 20 characters",
    required: true,
    pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
  
  },
{
  id:3,
  placeholder: "  E-mail",
  type: "text",
  name:"email",
  // value: value.email,
  errMsg: "must be a valid email",
  required: true,
},
{
  id:4,
  placeholder: "  Phone Number",
  type: "Number",
  name:"phoneNumber",
  // value: value.address,
  required: true,
  errMsg:"Must be a valid phone number",
  pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
},
{
  id: 5,
  placeholder: " Location",
  type: "text",
  name: "location",
  required: true,
},
{
  id:6,
  placeholder: "  Password",
  type: "password",
  name:"password",
  errMsg: "must all be numbers",
  // value: value.password,
  required: true,
  // pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$` 
},
]

const handleSubmit = async (event) => {
  try {
    event.preventDefault();
    // console.log("start")
    const {firstName, lastName, email, phoneNumber, location, password} = value
  // console.log({firstName: firstName, lastName: lastName,  email: email, phoneNumber: phoneNumber, location: location, password:  password})
    const response = await axios.post("https://agri-market.onrender.com/api/user", {firstName: firstName, lastName: lastName,  email: email, phoneNumber: phoneNumber, location: location, password:  password});
    console.log(response.data);
  } catch (error) {
      console.log(error.message)
  }
};

// useEffect(() => {   
// }, [value])
const handleChange=(i)=>{
  setValues({...value, [i.target.name]:i.target.value})
}

const receiveValues =(i)=>{
  i.preventDefault();
  console.log(value)
  // window.location.reload()
}




  return (
    <div className='sign_main'>
      <form  className='sign_form' onSubmit={handleSubmit}>
        <img src={Lg} alt="" className='signlogo' />
      <div className="sign_wrap_text">
        <h2>Sign up as a buyer</h2><br/>
        <p fontsize="12px">Please complete the registration form to purchase livestock product on Agri-Market platform</p><br/>
        </div>
         <div className=" mnbv">
         
         {inputs.map((i)=>
           <SignUpInput key={i.id} {...i} handleChange={handleChange}
           value={value[i.name]} />
          )}
         </div>
         <div className='check_cont'>
         <input type="checkbox" onChange={() => setValues({...value, admin:true})}/> <p className='check_text'>I agree to the Terms of service and privacy of policy of Agri market </p>
         </div>
        
        <button type='submit' className='zaw'>Submit</button>
        <p>Already have an account ? <span className="signlogin" onClick={()=> navigate('/Login')}>Login</span></p>
      </form>
      <button className='back' onClick={() => navigate('/Choose')}>Go Back</button>
    </div>
  )
}

export default SignUp