import React from 'react'
import { Link } from 'react-router-dom'

const Filter = () => {
  return (
    <div className='w-[15%] h-full bg-slate-50 p-4'>
        <h1 className='text-2xl font-semibold px-6 bg-slate-200 mb-2'>Filter by</h1>
        <h1 className='text-lg font-semibold px-6 uppercase'>category</h1>
        <ul className=' space-y-2 mt-2 px-6'>
            <li>men's clothing</li>
            <li>jewelery</li>
            <li>electronic</li>
        </ul>
        <Link to='/product'>
        <h2 className='mt-2 px-6'>product</h2>
        </Link>
    </div>
  )
}

export default Filter