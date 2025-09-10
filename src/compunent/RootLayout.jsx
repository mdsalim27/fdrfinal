import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Menu from './Menu'
// import Banner from './Banner'
// import Product from './Product'
// import LeatestProducts from './LeatestProducts'
// import Support from './Support'
// import BanAdd from './BanAdd'
// import Test from './Test'
import TrendingProducts from './TrendingProducts'
import DiscountItem from './DiscountItem'




const RootLayout = () => {
    return (
        <div>
           
            <Menu/>
            <Navbar />
            {/* <Test/> */}
            {/* <Banner/> */}
            {/* <Product/> */}
            {/* <LeatestProducts/> */}
            {/* <Support/> */}
            {/* <BanAdd/> */}
            <TrendingProducts/>
            <DiscountItem/>
            <Outlet />
        </div>
    )
}

export default RootLayout
