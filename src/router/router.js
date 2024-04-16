import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Vision from '../pages/Vision'
import Innovation from '../pages/Innovation'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'

function RouteHandler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/innovation" element={<Innovation />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default RouteHandler