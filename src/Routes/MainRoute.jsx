import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Product from '../components/Product'
import Home from '../components/Home'
import Create from '../components/Create'

const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/create" element={<Create/>} />
    </Routes>
  )
}

export default MainRoute