import React from 'react'
import"./Loading.css"
import giffy from "./giffy.gif"

function Loading() {
  return (
    <div className="loading_page">
       
    <img src ={giffy} alt=""/>
    
    <h1>Loading . . . </h1>
    <p>Please wait . . .</p>
</div>  
  )
}

export default Loading


// {loading ? <p> loading </p> : (loading === false && isError)? <p>no item found </p> :<p> real thing </p>: null};