import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"
import './Chicken.css'
import Loading from '../Loading/Loading';
import Footer from '../Landing/Footer/Footer';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { BsCart4 } from "react-icons/bs";
import Swal from 'sweetalert2'
import { addToCart, total } from "../../Redux/Features";
// import './Goods.css'
// import Footer from '../Landing/Footer/Footer';


const Chicken = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [catigory, setCategory] = useState()
  
const [load, setLoad] = useState(false)

  async function getCategories() {
    setLoad(true)
    const res = await axios.get(`https://agri-market.onrender.com/api/product/cat/`)
    
    setLoad(false)
    
    setCategory(res.data.data)
  }

  useEffect(() => {
    getCategories()
  },[] )
  

  return (
    <>
    <div className='chicken_cards'>
        {/* Elements */}
    <div className='card-wrap'>

      {
      load? <Loading /> :
      catigory?.map((i)=>(
    <div key={i._id} className='shadow'>
      <div className='image-card'>
          <img src={i.image} className='wed' alt="" /> 
      </div>
      <div className='card-text'>
        <h4>Product: {i.productName}</h4>
        {/* <h5> Qty: {i.quantity} </h5> */}
        {/* <h5> Description: {i.decs}</h5> */}
        {/* <h5> Categories: {i.categories}</h5>   */}
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
      }}> Add to <BsCart4/> </button>
    <button className='goods_details' onClick={()=> navigate(`/Detail/${i._id}`)} >Details</button>  
    </div>
    </div>
      ))}
     </div>
    </div>
 
    <Footer />
    </>
  )
}
export default Chicken




// {loading ? <p> loading </p> : (loading === false && isError)? <p>no item found </p> :<p> real thing </p>: null};