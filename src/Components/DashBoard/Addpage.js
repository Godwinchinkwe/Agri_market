import React, { useState, useEffect, } from 'react'
import './Addpage.css'
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios'
import { Dispatch,useDispatch, useSelector } from 'react-redux'


export default function Addpage({props}) {
  const [image, setImage] = useState(null)
  const [mageDB, setImageDB] = useState({ image: "" })
  const user = useSelector((state) => state.Commerce.user)
  // console.log(user)
  const [product, setProduct] = useState(
    {
      productName: "",
      Desc: "",
      image: "",
      price: "",
      productQuantity: "",
      categories: "",
    }
  )
  const handleChange = (event) => {
    const file = event.target.files[0];
    const save = URL.createObjectURL(file);
    setImageDB({ image: save });
      setProduct({ ...product, image:  file });
    
  };

  useEffect(() => {
    console.log(product)
  }, [product])

  useEffect(() => {
    props(true)
  }, [props ])

  return (
    <div className='Addproduct'>
      <form className='Addproduct_left'
      onSubmit={(e)=>{
        e.preventDefault()
        console.log('cliked')
        const formData = new FormData();
        formData.append('title', product.title);
        formData.append('description', product.description);
        formData.append('image', product.image);
        formData.append('price', product.price);
        formData.append('stockQuantity', product.stockQuantity);
        formData.append('categories', product.categories);
        console.log(localStorage.getItem(''))
        // axios.post(`https://agri-market.onrender.com/api/product/:userId`, formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   }
        // })
        //   .then(response => {
        //     console.log(response);
           
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      }}
      >

        <div className='Addproduct_left_top'>
          <div className='Addproduct_left_top_input'>
            <p>Title</p>
            <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="productName" type="text" placeholder='Title' />
          </div>


          <p className='textarea'>description</p>
          <textarea onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} type="text" id="w3review" name="Desc" maxLength="40%" rows="10" cols="50">
          </textarea>

        </div>

        <label className='Addproduct_left_middle'>
          <h3 className='mage'>Image</h3>
          <input style={{ display: 'none' }} onChange={handleChange} type='file' />
        </label>

        <div className='Addproduct_left_bottom'>
          <div className='Addproduct_left_bottom_input'>
            <p>Price</p>
            <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="price" />
          </div>
          <div className='Addproduct_left_bottom_input'>
            <p>Stock Quantity</p>
            <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="productQuantity" />
          </div>
          <div className='Addproduct_left_bottom_input'>
            <p>Categories</p>
            <input onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} name="categories" />
          </div>
        </div>
        <button onClick={() =>{console.log(product)}} className='Addproduct_right_buttom_button'>Upload</button>
      </form>

      <div className='Addproduct_right'>
        <div className='Addproduct_right_top'>
          <div className='Addproduct_right_top_image1'>
            {product.image ? <img className='products_image' src={mageDB.image}  alt=""/> : < FaUserCircle fontSize={200} color="#0C764C"
            />}
          </div>
        </div>
        <div className='Addproduct_right_buttom'>
          <div className='Addproduct_right_buttom_text'>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
