import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Product from '../components/Product'
import Home from '../components/Home'

const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
    </Routes>
  )
}

export default MainRoute