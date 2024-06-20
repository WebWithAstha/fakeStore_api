import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Details from '../components/Details'
import Home from '../components/Home'
import Create from '../components/Create'

const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Details/>} />
        <Route path="/product/:id" element={<Details/>} />
        <Route path="/create" element={<Create/>} />
    </Routes>
  )
}

export default MainRoute