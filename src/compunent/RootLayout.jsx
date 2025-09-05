import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Menu from './Menu'
import Banner from './Banner'
import Product from './Product'
import LeatestProducts from './LeatestProducts'
import Support from './Support'
import BanAdd from './BanAdd'



const RootLayout = () => {
    return (
        <div>
            <Menu/>
            <Navbar />
            <Banner/>
            <Product/>
            <LeatestProducts/>
            <Support/>
            <BanAdd/>
            <Outlet />
        </div>
    )
}

export default RootLayout
