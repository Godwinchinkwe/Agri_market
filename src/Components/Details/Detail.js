import React, {useEffect, useState} from 'react'
import "./Detail.css";
import axios from "axios";
import {useParams} from "react-router-dom"
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'


 
const Detail = () => {
    const dispatch = useDispatch()
    const {_id} = useParams()
    const [item, setItem] = useState([]);

    const getItem= async()=>{
        try{
            const res = await axios.get(`https://agri-market.onrender.com/api/product/${_id}`); 
            console.log(res.data.data)
            setItem(res.data.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getItem()
        console.log(item)
    }, )

  return (
    <div className="detail-holder" > 
        <div className="detail-card"  >
            <div className="detail-image">
                <div  className="image-div">
                    <img className="detail-img" src={item.image} alt=""/>
                </div>
                <div  className="image-title">
                    <h4>{item.title}</h4>
                </div>
            </div>
            <div className="detail-details">
                <p className="detail-desc"><span>Description:</span> {item.description}</p>
                <p className="detail-cat">Category: {item.category}</p>
              
                <div className="detail-button" onClick={()=>{dispatch((item));
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'item has been added',
                    showConfirmButton: false,
                    timer: 1500,
                  })
                }}>
                    Add to Cart</div>
            </div>
        </div>
    </div>
  )
}

export default Detail