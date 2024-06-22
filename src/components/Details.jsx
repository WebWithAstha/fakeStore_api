import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productcontext } from '../contexts/ProductContext'
import axiosInstance from '../utils/axios'
import LoadingDetails from './LoadingDetails'

const Product = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [prod, setProd] = useState()
  const [prods,setprods] = useContext(productcontext)
  const [localProds, setlocalProds] = useState(JSON.parse(localStorage.getItem("products"))|| [])


  const getProd = async ()=>{
    let {data} = await axiosInstance.get(`/products/${id}`)
    if(data.length == 0){
      data = prods.find(prod => prod.id === id)
    }
    setProd(data)
  }
  
  const deleteHandler = ()=>{
    const updatedProds = prods.filter(prod => prod.id!== id)
    setprods(updatedProds)
    const updatedLocalProds = localProds.filter(prod => prod.id!== id)
    localStorage.setItem("products",JSON.stringify(updatedLocalProds))
    navigate('/')
  }

  useEffect(() => {
    getProd()
  }, [prods])
  

  return ( prod ?
    <>
    
    <div className="back px-40 py-4 bg-slate-100 ">
      <Link to='/'>
      <h1 className="px-2 w-max cursor-pointer py-2 text-xl flex items-center gap-4">&#60; <span className='font-normal'>back</span></h1>
      </Link>
      </div>
    
    <div className='lg:px-40 px-20 py-8 flex lg:flex-row flex-col  items-center h-max lg:gap-20'>
      <div className="img lg:w-[40vw] lg:h-[30vw] h-[40vw] w-full lg:px-6 px-10 aspect-square p-6 bg-white border">
        <img className='w-full h-full object-contain' src={prod.image} alt="" />
      </div>
      <div className="dets flex flex-col lg:pt-20 pt-4 2xl:w-[50%] lg:w-[40%]  gap-1">
        <h1>brand</h1>
        <h1 className='font-medium text-3xl mb-2'>{prod.title}</h1>
        <h1 className='opacity-45'>{prod.category}</h1>
        <h1 className='text-2xl font-medium'>₹{prod.price}</h1>
        <h1>{prod.description}</h1>
        <div className="btns flex gap-4 mt-4">
          <Link to={`/update/${prod.id}`}>
          <button className='px-10 py-2.5 border-blue-400 border-2 uppercase font-medium bg-blue-400'>Update</button>
          </Link>
          <button onClick={deleteHandler} className='px-10 py-2.5 border-rose-400 border-2 uppercase font-medium bg-rose-400'>Delete</button>
        </div>
      </div>
    </div>
    </>:<LoadingDetails/>
  )
}

export default Product