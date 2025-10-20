import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RootLayout from './compunent/RootLayout'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Router, RouterProvider } from 'react-router-dom'
import Shop from './compunent/Shop'
import Home from './page/Home'
import Contact from './compunent/Contact'
import Blog from './compunent/Blog'
import Page from './compunent/Page'
import ProductDet from './compunent/ProductDet'
import LoginPage from './compunent/LoginPage'
import SignUpPage from './compunent/SignUpPage'
import ForgotPasswordPagecode from './compunent/ForgotPasswordPagecode'
import ForgotPasswordPage from './compunent/ForgotPasswordPage'
import Cart from './compunent/Cart'
import Checkout from './compunent/Checkout'
import OrderSuccess from './compunent/Slice/OrderSuccess'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route path='/' element={<Home />}></Route>
    <Route path='/loginpage' element={<LoginPage />}></Route>
    <Route path='/signuppage' element={<SignUpPage />}></Route>
  
    <Route path='/forgotpasswordpagecode' element={<ForgotPasswordPagecode />}></Route>
    <Route path='/forgotpasswordpage' element={<ForgotPasswordPage />}></Route>


    <Route path='/shop' element={<Shop />}></Route>

    <Route path="/shop/:id" element={<ProductDet />}></Route>
    <Route path="/shop/:id" element={<ProductDet />}></Route>

    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/products' element={<Shop />}></Route>
    <Route path='/Blog' element={<Blog />}></Route>
    <Route path='/pages' element={<Page />}></Route>
    <Route path='/cart' element={<Cart />}></Route>
    <Route path='/checkout' element={<Checkout />}></Route>
    <Route path='/order-success' element={<OrderSuccess />}></Route>
    <Route path='/cart' element={<Cart />}></Route>
    
</Route>
))
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
