import React from 'react'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Join from './pages/Join'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import { Routes, Route, redirect, useNavigate, Navigate } from "react-router-dom"
import CheckoutSuccess from './Components/CheckoutSuccess'
import { useSelector } from 'react-redux'
// https://www.freecodecamp.org/news/how-to-use-react-router-version-6/

const App = () => {

  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  
 
  return (
    <div className="App">

        {
          !user 
          ? 
          <>
          <Routes>
          <Route path="/login" element={ <Login/> } />
          <Route path="/signup" element={ <Join /> } />
          </Routes> 
          
          </>
          :
          <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/products" element={ <ProductList /> } />
          <Route path="/products/:category" element={ <ProductList /> } />
          <Route path="/product/:id" element={ <Product /> } />
          <Route path="/carts" element={ <Cart /> } />
          <Route path="/checkout-success" element={ <CheckoutSuccess /> } />
          <Route path="/carts/:id" element={ <Cart /> } />


          </Routes>


        }
             
    </div>
  )
}

export default App