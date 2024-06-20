import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { productcontext } from '../contexts/ProductContext'

const Filter = () => {

  const [prods]= useContext(productcontext)
  let categories = prods && prods.map(prod=>prod.category)
  categories = [...new Set(categories)]



  return (
    <div className='w-64 shrink-0 sticky top-[5.5rem] h-full bg-slate-200 p-4'>
        <h1 className='text-2xl font-semibold px-6 bg-slate-200 mb-2'>Filter by</h1>
        <h1 className='text-lg font-semibold px-6 uppercase'>category</h1>
        <ul className='mt-2'>
          {categories.map((category,i)=>
          <Link key={i} to={`/?category=${category}`}>
            <li key={i} className=' px-6 hover:bg-slate-100 py-1 cursor-pointer transition-colors duration-300'>{category}</li>
          </Link>
          )}
          <Link to='/create' >
          
          <button className=' px-6 hover:bg-slate-900 text-center mt-4 bg-slate-700 py-2 text-white cursor-pointer transition-colors duration-300'>Add Prod</button>
          </Link>
        </ul>
        
    </div>
  )
}

export default Filter