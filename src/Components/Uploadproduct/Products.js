import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import './Products.css'
import { bringProducts } from '../../Redux/Features'
import Loading from '../Loading/Loading'
// import Swal from 'sweetalert2'
import { removeItem } from '../../Redux/Features' 

function Products() {
    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    const [load, setLoad] =useState(false)
   const getUser=JSON.parse(localStorage.getItem("response")) 
  //  console.log("getUser", getUser.data.data._id)

  
    
  
    async function getProducts(){
      try{
        setLoad(true)
        const res = await axios.get (`https://agri-market.onrender.com/api/theadmin/${getUser.data.data._id}`)
      // console.log("res.data.data", res.data.data.products);
      setProducts(res.data.data.products)
      dispatch(bringProducts(res.data))
      
      setLoad(false)
      
    }catch(error){
      console.log(error)
   
    }
  }

  const deleteProduct = async (_id) => {
    console.log( _id)
    const res = await axios.delete(`https://agri-market.onrender.com/api/delProduct/${getUser.data.data._id}/${res.data.data.products_id}`)
    (res.status)
    // res.status === 200 ? dispatch(removeItem()) : null
    // getAllStudent()
    console.log(res)
  }
  
    useEffect(() => {
      getProducts()
    }, [])

  return (
    <div className='cards'>
    <div className='card-wrap'>
      {
load? <Loading /> :
      products?.map((i)=>(
        <div key={i._id}
         className='shad'  >
         {/* className='shad' to={`/Detail/${i._id}`} > */}
      <div className='image-card'>
          <img src={i.image} className='wed' alt="" /> 
      </div>
      <div className='card-text'>
        <p>{i.productName}</p>
        {/* <h4># {i.price}</h4> */}
    </div>
    <div className='prod_option'>
      <button className='prod_update'>Edit</button>
      <button className='prod_delete' onClick={()=> (deleteProduct(removeItem))}>Delete</button>
    </div> 
    </div>
      ))}
     </div>
    </div>
   
  )
}

export default Products