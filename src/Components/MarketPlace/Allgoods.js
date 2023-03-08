// import React from 'react'
import React, {useState, useEffect} from 'react'
import "./Goods.css";
import './Allgoods.css'
import axios from 'axios'
import Loading from "../Loading/Loading"
import Swal from 'sweetalert2'
import { addToCart, total } from "../../Redux/Features";
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
// import { BsCart4 } from "react-icons/bs";

function Allgoods() {
    const [products, setProducts] = useState([])
    const [load, setLoad] =useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  

    async function getProducts(){
        try{
          setLoad(true)

          const res = await axios.get (`https://agri-market.onrender.com/api/product/`);
        console.log(res.data.data);
        setProducts(res.data.data)

        setLoad(false)

      }catch(error){
         if (error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
         } else if (error.request){
          console.log(error.request);
         } else{
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    }
    useEffect(() => {
        getProducts()
      }, [])

   
  return (
    <div className='cards'>
    <div className='card-wrap'>

      {
      load? <Loading /> :
      products.map((i)=>(
    <div key={i._id} className='shadow'>
      <div className='image-card'>
          <img src={i.image} className='wed' alt="" /> 
      </div>
      <div className='card-text'>
        <h4>Product: {i.productName}</h4>
        <h5> Categories: {i.categories}</h5>  
        <h4>Price :₦ {i.price}</h4>
    </div>
    <div className='Goods_decision'>
    <button className='goods_cart' 
     onClick={()=>{dispatch(addToCart(i)); dispatch(total());
      const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
Toast.fire({
  icon: 'success',
  title: 'Item added successfully'
})
      }}> Update </button>
    <button className='goods_details123' onClick={()=> navigate(`/Detail/${i._id}`)} >Delete</button>  
    </div>
    </div>
      ))}
     </div>
    </div> 
  )
}

export default Allgoods