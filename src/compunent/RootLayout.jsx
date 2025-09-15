import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Menu from './Menu'
import Banner from './Banner'
import Product from './Product'
import LeatestProducts from './LeatestProducts'
import Support from './Support'
import BanAdd from './BanAdd'
import TrendingProducts from './TrendingProducts'
import DiscountItem from './DiscountItem'
import TopCategories from './TopCategories'
import GetLeates from './GetLeates'
import Footer from './Footer'
import Companyspons from './Companyspons'
// import Home from '../page/Home'




const RootLayout = () => {
    return (
        <div>
            {/* <Home/> */}
            <Menu />
            <Navbar />
            {/* <Product/> */}
            {/* <Banner/>
            <LeatestProducts/>
            <Support/>
            <BanAdd/>
            <TrendingProducts/>
            <DiscountItem/>
            <TopCategories/>
            <GetLeates/> */}
            <Outlet />
            <Companyspons />
            <Footer />
        </div>
    )
}

export default RootLayout
