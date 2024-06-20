import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productcontext } from '../contexts/ProductContext'
import axiosInstance from '../utils/axios'

const Product = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [prod, setProd] = useState()

  const getProd = async ()=>{
    const {data} = await axiosInstance.get(`/products/${id}`)
    setProd(data)
  }

  useEffect(() => {
    getProd()

  }, [])
  

  return ( prod ?
    <>
    
    <div className="back px-40 py-4 bg-gray-100 ">
      <Link to='/'>
      <h1 className="px-2 w-max cursor-pointer py-2 text-xl flex items-center gap-4">&#60; <span className='font-normal'>back</span></h1>
      </Link>
      </div>
    
    <div className='flex px-40 py-24 gap-20'>
      <div className="img w-[30vw] aspect-square p-6 bg-white border">
        <img className='w-full h-full object-contain' src={prod.image} alt="" />
      </div>
      <div className="dets flex flex-col pt-20 w-[30%] gap-1">
        <h1>brand</h1>
        <h1 className='font-medium text-3xl mb-2'>{prod.title}</h1>
        <h1 className='opacity-45'>{prod.category}</h1>
        <h1 className='text-2xl font-medium'>₹{prod.price}</h1>
        <h1>{prod.description}</h1>
        <div className="btns flex gap-4 mt-4">
          <button className='px-10 py-2.5 border-blue-400 border-2 uppercase font-medium bg-blue-400'>Update</button>
          <button className='px-10 py-2.5 border-rose-400 border-2 uppercase font-medium bg-rose-400'>Delete</button>
        </div>
      </div>
    </div>
    </>:"loading"
  )
}

export default Product