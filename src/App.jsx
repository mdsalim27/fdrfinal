import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RootLayout from './compunent/RootLayout'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Router, RouterProvider } from 'react-router-dom'
import Shop from './compunent/Shop'
import Home from './page/Home'



let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route path='/' element={<Home />}></Route>
    <Route path='/shop' element={<Shop />}></Route>
    <Route path='/products' element={<Shop />}></Route>
  </Route>

))

function App() {

  return (
    <>
      <Home />
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
