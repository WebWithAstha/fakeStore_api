import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex sticky top-0 z-10 bg-slate-50 justify-between items-center px-10 py-8'>
        <Link to="/"><h1>FakeStore</h1></Link>
        <div className="flex gap-4">
            <h4>about</h4>
            <h4>about</h4>
            <h4>about</h4>
        </div>
        <h4>cart</h4>
    </div>
  )
}

export default Nav