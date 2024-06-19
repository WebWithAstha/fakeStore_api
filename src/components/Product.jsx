import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate()
  return (
    <>
    
    <div className="back px-40 py-4 bg-gray-100 ">
      <Link to='/'>
      <h1 className="px-2 w-max cursor-pointer py-2 text-xl flex items-center gap-4">&#60; <span className='font-normal'>back</span></h1>
      </Link>
      </div>
    
    <div className='flex px-40 py-24 gap-20'>
      <div className="img w-[30vw] aspect-square bg-slate-200"></div>
      <div className="dets flex flex-col pt-20 w-[30%]">
        <h1>brand</h1>
        <h1 className='font-medium'>Name of prod</h1>
        <h1 className=''>category--</h1>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam earum officiis optio veniam inventore esse?</h1>
        <div className="btns flex gap-4 mt-4">
          <button className='px-10 py-2.5 border-blue-400 border-2 uppercase font-medium bg-blue-400'>Update</button>
          <button className='px-10 py-2.5 border-rose-400 border-2 uppercase font-medium bg-rose-400'>Delete</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product