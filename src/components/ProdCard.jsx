import React, { useContext } from 'react'
import { productcontext } from '../contexts/ProductContext'
import { Link } from 'react-router-dom'

const ProdCard = ({ id }) => {
  const [prods, setprods] = useContext(productcontext)
  const prod = prods.find(prod=>prod.id === id)

  return (
    <Link to={`/product/${prod.id}`}>
    <div className="card w-full cursor-pointer group bg-slate-100 border border-slate-300  p-4">
      <div className="img w-full h-48 bg-white p-6">
        <img className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500' src={prod.image} alt="" />
      </div>
      <div className="flex mt-2 items-center justify-between">
        <h2 className=''>{prod.title.slice(0, 15) + ".."}</h2>
        <i className="ri-arrow-right-s-line group-hover:drop-shadow-[2px_2px_2px]"></i>
      </div>
    </div>
          </Link>
  )
}

export default ProdCard 