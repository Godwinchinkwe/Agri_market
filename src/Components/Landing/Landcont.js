import React from 'react'
import "./Landcont.css"
import Pou from "./pie/poult.jpg"

function Landcont() {
  return (
    <div className='landcont_main'>
        <div className='landcont_img'>
            <img src={Pou} alt="" className='njio' />
        </div>
        <div className='landcont_text'>
            <p>Shop By Species of Catfish<br/><br/>You can view our list of catfish species and shop for the species that suits your meals...
</p> <br/>
<div><button className='vbnt'>Shop Now</button></div>

        </div>

    </div>
  )
}

export default Landcont