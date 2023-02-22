import React from 'react'

function Dropps({ isOpen }) {
    

  return (

    <div className={isOpen ? "dropdown open" : "dropdown"}>
        <div className='maindrip'>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </div>
    </div>
  )
}

export default Dropps