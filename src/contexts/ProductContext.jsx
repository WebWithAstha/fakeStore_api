import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'
export const productcontext = createContext(null)

const ProductContext = ({ children }) => {
  const [prods, setprods] = useState(null)

  const getProds = async () => {
    const { data } = await axiosInstance.get('/products')
    const localProd = JSON.parse(localStorage.getItem("products"))

    setprods([...localProd,...data])
  }

  useEffect(() => {
    getProds()

  }, [])



  return (
    <productcontext.Provider value={[prods, setprods]}>
      {children}
    </productcontext.Provider>
  )
}

export default ProductContext