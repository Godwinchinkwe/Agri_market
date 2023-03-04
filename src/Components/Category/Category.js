import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import './Category.css'
import Loading from '../Loading/Loading';


const Category = () => {
  const { _id } = useParams()
  const [catigory, setCategory] = useState()
  
const [load, setLoad] = useState(false)

  async function getCategories() {
    setLoad(true)
    const res = await axios.get(`https://agri-market.onrender.com/api/product/cat/${_id}`)
    
    setLoad(false)
    
    setCategory(res.data.data)
  }

  useEffect(() => {
    getCategories()
  },[_id] )
  

  return (
    <div className='Category-Holder'>
      <div className='Category-Item-Holder'>
        {load? <Loading /> :catigory?.map((item) => (
          <Link key={item.id} className='Category-Place-holder' to={`/detail/${item.id}`} >
            <div className='Category-Image-holder'>
              <img src={item.image} alt="" className='Category-Image' />
            </div>
            <div className='Category-Details'>
              <p>{item.productName}</p>
              <h4> Price: ₦ {item.price}</h4>
              <h4>Quantity: {item.qty}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Category