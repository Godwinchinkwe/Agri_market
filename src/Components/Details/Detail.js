import React, {useEffect, useState} from 'react'
import "./Detail.css";
import axios from "axios";
import {useParams} from "react-router-dom"
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { addToCart, total } from "../../Redux/Features";

 
const Detail = () => {
    const dispatch = useDispatch()
    const {_id} = useParams()
    const [item, setItem] = useState([]);
    console.log(typeof(+_id))

    const getItem = async()=>{
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
    <h2>Detailed Page</h2><br/>
        <div className="detail-card"  >
            <div className="detail-image">
                <div  className="image-div">
                    <img className="detail-img" src={item.image} alt="iges"/>
                </div>
                <div  className="image-title">
                    <h3>Name:{item.productName}</h3>
                </div>
            </div>
            <div className="detail-details">
                <p className="detail-desc">Description: <span>{item.decs}</span> </p><br/>
                <p className="detail-cat" > Category: <span> {item.categories} </span> </p><br/>
                <p className="detail-rat"> Price:₦{item.price}</p>
              
                <div className="detail-button" onClick={()=>{dispatch(addToCart(item)); dispatch(total());
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