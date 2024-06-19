import React from 'react'
import Filter from './Filter'
import ProdCard from './ProdCard'
import Nav from './Nav'

const Home = () => {
  return (
    <>
    <Nav/>
    <div className="flex w-full h-screen bg-slate-100">
      <Filter/>
      <div className="prods w-[85%] px-20 py-10 h-max grid grid-cols-5 gap-8">
      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      </div>

    </div>
    </>
  )
}

export default Home