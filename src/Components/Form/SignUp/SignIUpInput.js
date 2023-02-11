import React, {useState} from 'react'
import "./SignUp.css";

function SignIUpInput(props) {
    const [focused, setFocused] = useState(false);

  const doFocused =()=>{
    setFocused(true)
  }
  // const [ value, setValues] = useState({
  //   firstName: "",
  //    lastName: "",
  //    email: "",
  //    phoneNumber: "",
  //    location:"",
  //    password:"",
  //    admin: false,
  //  });
  // const [ firsName, setFirstName] = useState('')
  // const [ vlastNamealue, setlastName] = useState('')
  // const [ userEmail, setuserEmail] = useState('')
  // const [ userPhoneNumber, setuserPhoneNumber] = useState('')
 
  //  const {firstName, lastName, email, phoneNumber, location, password} = value
 
  //  const setDetail = (e) => {
  //   const fN = e.target.value
  //   setFirstName(fN)
  //   setlastName(fN)
  //   setuserEmail(fN)
  //   setuserPhoneNumber(fN)
  //  }
   
 
  //  console.log(props, "value")

    
  return (
    <div className='tryuu'>
        
        <input className="zxc"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        pattern={props.pattern}
        required={props.required}
        focus={focused.toString()}
        onBlur={doFocused}
         />
        <span className='err'>{props.errMsg}</span>
       
    </div>
    
  )
}

export default SignIUpInput 