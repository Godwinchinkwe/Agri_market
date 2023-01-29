import React from 'react'

function LoginInputs(props) {
  return (
    <div>
        <label>{props.name}</label>
        <input
         type={props.type}
         name={props.name}
         placeholder={props.placeholder}
         required={props.required}
         pattern={props.pattern}
        />
    </div>
  )
}

export default LoginInputs