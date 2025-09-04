import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Menu from './Menu'
import Banner from './Banner'
import Product from './Product'



const RootLayout = () => {
    return (
        <div>
            <Menu/>
            <Navbar />
            <Banner/>
            <Product/>
            <Outlet />
        </div>
    )
}

export default RootLayout
