import React from 'react'
// import { useState } from 'react'
import "./Password.css"

function Password() {
    

  return (
    <div className='password_main'>
        <div className='password-wrap'>
          <h3>Forgot Password</h3><br/>
          <p className='password_text'>Please Enter your email so we can send you reset instructions</p><br/>
            <input 
            placeholder='  Enter your Email' 
            type="text"
            className="password_input"/>

            <button className='password_button'>submit</button>
        </div>

    </div>
  )
}

export default Password