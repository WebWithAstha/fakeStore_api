import React, { useContext } from 'react'
import { productcontext } from '../contexts/ProductContext'

const ProdCard = ({ index }) => {
  const [prods, setprods] = useContext(productcontext)
  const prod = prods[index]

  return (
    <div className="card w-full bg-slate-100 border border-slate-300  p-4">
      <div className="img w-full h-48 bg-white p-4">
        <img className='w-full h-full object-contain' src={prod.image} alt="" />
      </div>
      <h2 className='mt-2'>{prod.title.slice(0, 20) + ".."}</h2>
    </div>
  )
}

export default ProdCard 