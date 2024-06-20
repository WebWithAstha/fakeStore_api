import React, { useContext, useEffect ,useState} from 'react'
import Filter from './Filter'
import ProdCard from './ProdCard'
import Nav from './Nav'
import { productcontext } from '../contexts/ProductContext'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../utils/axios'


const Home = () => {

  const [prods] = useContext(productcontext)
  const [filteredProds, setFilteredProds] = useState(null)

  let searchCategory = useLocation()
  searchCategory = decodeURIComponent(searchCategory.search.split("=")[1])

  const getCategoryProd = async()=>{
    try {
      if(searchCategory!=="undefined"){
        // console.log(searchCategory)
        const {data} = await axiosInstance.get(`/products/category/${searchCategory}`)
        // console.log(data)
        setFilteredProds(data)
        // console.log(filteredProds)
      }      
    } catch (error) {
      
    }
    
  }

  useEffect(() => {
    if(searchCategory === "undefined") setFilteredProds(prods)
    getCategoryProd()
  }, [searchCategory,prods])


  return (
    <>
    <Nav/>
    <div className="flex w-full relative min-h-screen bg-slate-100">
      <Filter/>
      
      <div className="prods flex-1 lg:px-20 md:px-10 lg:py-10 md:py-4 px-6 py-8 h-max grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-8">

        {filteredProds ? 
        filteredProds.map((prod,index)=>
          {return <ProdCard key={index} id={prod.id}/>}
       
        ):<h1 className='mt-54 text-center text-7xl font-bold'>Loadin...</h1>}
        
      </div>

    </div>
    </>
  )
}

export default Home