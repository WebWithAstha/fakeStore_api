import React, { useContext, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { productcontext } from '../contexts/ProductContext'

const Filter = () => {

  const [prods]= useContext(productcontext)
  let categories = prods && prods.map(prod=>prod.category)
  categories = [...new Set(categories)]

  const {search} = useLocation() 



  return (
    <div className='md:w-64 sm:w-[20rem] z-20 shrink-0 sticky top-[5.5rem] h-full bg-slate-200 p-4'>
      {decodeURIComponent(search.split('=')[1])!=="undefined"?
          <div className="back mb-4 py-2 sticky top-[10.4%] z-[20] bg-slate-400 ">
            <Link to='/'>
              <h1 className="px-6 text-slate-100 w-max cursor-pointer py-1 text-lg flex items-center gap-1"> <i className="ri-arrow-left-s-line -mb-1.5"></i> home</h1>
            </Link>
          </div>
          :""}
      <div className="flex sm:block items-center justify-between">

        <h1 className='text-2xl font-semibold px-6 bg-slate-200 mb-2'>Filter by</h1>
        <h1 className='text-lg font-semibold px-6 uppercase'>category</h1>
      </div>
        <ul className='mt-2'>
          {categories.length>0 ? categories.map((category,i)=>
          <NavLink  
          key={i} to={`/?category=${category}`}>
            <li key={i} className={`${category== decodeURIComponent(search.split('=')[1])?"bg-slate-100":""} px-6 hover:bg-slate-300 py-1 cursor-pointer transition-colors duration-300`}>{category}</li>
          </NavLink>
          ):
          <>
          <li className='ml-6 w-[80%] h-4 mb-2 bg-slate-300 animate-pulse'></li>
          <li className='ml-6 w-[80%] h-4 mb-2 bg-slate-300 animate-pulse'></li>
          <li className='ml-6 w-[80%] h-4 mb-2 bg-slate-300 animate-pulse'></li>
          <li className='ml-6 w-[80%] h-4 mb-2 bg-slate-300 animate-pulse'></li>
          </>

          }
          
          <Link to='/create' >
          
          <button className=' px-6 w-full hover:bg-slate-900 text-center mt-4 bg-slate-700 py-2 text-white cursor-pointer transition-colors duration-300'>Add Prod</button>
          </Link>
        </ul>
        
    </div>
  )
}

export default Filter