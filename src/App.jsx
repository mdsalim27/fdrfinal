import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RootLayout from './compunent/RootLayout'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Router, RouterProvider } from 'react-router-dom'
import Shop from './compunent/Shop'
import Home from './page/Home'
import Contact from './compunent/Contact'
import Products from './compunent/Products'
import Blog from './compunent/Blog'
import Page from './compunent/Page'
import ProductDet from './compunent/ProductDet'


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route path='/' element={<Home />}></Route>
    <Route path='/shop' element={<Shop />}></Route>
    <Route path='/shop/:id' element={<ProductDet/>}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/products' element={<Shop />}></Route>
    <Route path='/Blog' element={<Blog />}></Route>
    <Route path='/pages' element={<Page />}></Route>
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
