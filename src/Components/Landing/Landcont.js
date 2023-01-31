import React from 'react'
import "./Landcont.css"
// import Pou from "./pie/poult.jpg"

function Landcont(props) {
  return (
    <div className='landcont_main'>
        <div className='landcont_img'>
            <img src={props.img} alt="" className='njio' />
        </div>
        <div className='landcont_text'>
            <h4>{props.ftext}</h4><br/>
            <p>{props.text}</p> <br/>
<div><button className='vbnt'>Shop Now</button></div>

        </div>

    </div>
  )
}

export default Landcont