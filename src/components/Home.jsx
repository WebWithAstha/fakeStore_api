import React, { useContext, useEffect, useState } from 'react'
import Filter from './Filter'
import ProdCard from './ProdCard'
import Nav from './Nav'
import { productcontext } from '../contexts/ProductContext'
import { Link, useLocation } from 'react-router-dom'
import axiosInstance from '../utils/axios'
import LoadingHome from './LoadingHome'


const Home = () => {

  const [prods] = useContext(productcontext)
  const [filteredProds, setFilteredProds] = useState(null)

  const localProds = JSON.parse(localStorage.getItem('products'))
  
  let searchCategory = useLocation()
  searchCategory = decodeURIComponent(searchCategory.search.split("=")[1])

  const getCategoryProd = async () => {
    try {
      if (searchCategory !== "undefined") {
        const { data } = await axiosInstance.get(`/products/category/${searchCategory}`)
        const localData = localProds.filter(prod => prod.category === searchCategory)
        setFilteredProds([...localData, ...data])
      }
    } catch (error) {

    }

  }

  useEffect(() => {
    if (searchCategory === "undefined") setFilteredProds(prods)
    getCategoryProd()
  }, [searchCategory, prods])


  return (
    <>
      <Nav />
      <div className="flex w-full sm:flex-row flex-col relative min-h-screen bg-slate-50">
        <Filter />



        <div className="relative flex-1">
          
          <div className="prods relative flex-1 lg:px-20 md:px-10 lg:py-10 md:py-4 px-6 py-8 h-max grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 gap-8">


            {filteredProds ?
              filteredProds.map((prod, index) => { return <ProdCard key={index} id={prod.id} /> }


              ) : <LoadingHome />}

          </div>
        </div>

      </div>
    </>
  )
}

export default Home