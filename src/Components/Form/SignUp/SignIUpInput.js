import React, {useState} from 'react'

function SignIUpInput(props) {
    const [focused, setFocused] = useState(false);
  const doFocused =()=>{
    setFocused(true)
  }

    
  return (
    <div>
        <label></label>
        <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        pattern={props.pattern}
        focus={focused.toString()}
        onBlur={doFocused}
        onFocus={()=> props.name === "confirmPassword" && setFocused(true)}
         className="input"
        onChange={(e)=> props.handleChange(e)} />
    </div>
  )
}

export default SignIUpInput