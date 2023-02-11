import React, {useState, useEffect} from 'react'
import "./Goods.css"
import axios from 'axios'
import Loading from "../Loading/Loading"
import { Link } from 'react-router-dom'



function Goods() {

    const [products, setProducts] = useState([])
    const [load, setLoad] =useState(false)
  

   

    async function getProducts(){
        try{
          setLoad(true)

          const res = await axios.get (`https://agri-market.onrender.com/api/product/`);
        console.log(res.data.data);
        setProducts(res.data.data)
        // dispatch(bringProducts(res.data))

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
        {/* Elements */}
    <div className='card-wrap'>

      {
      load? <Loading /> :
      products.map((i)=>(
    <Link key={i._id} className='shadow'to={`/Detail/${i._id}`}>
      <div className='image-card'>
          <img src={i.image} className='wed' alt="" /> 
      </div>
      <div className='card-text'>
        <p>Product Name: {i.productName}</p>
        <h4> Qty {i.quantity} </h4>
        <p> Desc {i.desc}</p>
        <p> Categories: {i.categories}</p>  
        <h4>price : {i.price}</h4>
    </div>
    </Link>
      ))}
     </div>
    </div>    

    
  )
}

export default Goods