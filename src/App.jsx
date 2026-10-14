import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Homepage from './pages/ProductDetails/Homepage'
import CreateProduct from './pages/CreateProduct/CreateProduct'
import ProductsList from './pages/ProductList/ProductList'
import {Route , Routes } from 'react-router'
import "./App.css";

function App() {
  return (
    <div>
      

      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<ProductsList/>} />   
             <Route path="/new-product" element={<CreateProduct/>}/>
        <Route path="/products/:productId" element={<ProductDetails/>}/>
      </Routes>




    </div>
  )
}

export default App