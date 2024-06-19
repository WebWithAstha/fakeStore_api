import React, { useContext, useEffect } from 'react'
import Filter from './Filter'
import ProdCard from './ProdCard'
import Nav from './Nav'
import { productcontext } from '../contexts/ProductContext'


const Home = () => {

  const [prods,setprods] = useContext(productcontext)

  return (
    <>
    <Nav/>
    <div className="flex w-full min-h-screen bg-slate-100">
      <Filter/>
      <div className="prods flex-1 px-20 py-10 h-max grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-8">
        {prods? 
        prods.map((prod,index)=>
          <ProdCard index={index} key={index}/>

        ):"No prods"}
     
      </div>

    </div>
    </>
  )
}

export default Home