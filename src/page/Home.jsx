import React from 'react'
import Menu from '../compunent/Menu'
import Navbar from '../compunent/Navbar'
import Banner from '../compunent/Banner'
import Product from '../compunent/Product'
import LeatestProducts from '../compunent/LeatestProducts'
import Support from '../compunent/Support'
import BanAdd from '../compunent/BanAdd'
import TrendingProducts from '../compunent/TrendingProducts'
import DiscountItem from '../compunent/DiscountItem'
import TopCategories from '../compunent/TopCategories'
import GetLeates from '../compunent/GetLeates'
import Companyspons from '../compunent/Companyspons'
import LeatestBlogg from '../compunent/LeatestBlogg'
import Pagination from '../compunent/Pagination'
// import ProductDet from '../compunent/ProductDet'

const Home = () => {
  return (
    <div>
        {/* <Menu/> */}
        {/* <Navbar/> */}
        
        <Pagination/>
        <Banner/>
        <Product/>
        <LeatestProducts/>
        <Support/>
        <BanAdd/>
        <TrendingProducts/>
        <DiscountItem/>
        <TopCategories/>
        <GetLeates/>
        <Companyspons/>
        <LeatestBlogg/>
        
         
    </div>
  )
}

export default Home
