import React from 'react'

import Banner from '../compunent/Banner'
import Product from '../compunent/Product'
import LeatestProducts from '../compunent/LeatestProducts'
import Support from '../compunent/Support'
import BanAdd from '../compunent/BanAdd'
import TrendingProducts from '../compunent/TrendingProducts'
import DiscountItem from '../compunent/DiscountItem'
import TopCategories from '../compunent/TopCategories'
import GetLeates from '../compunent/GetLeates'
import LeatestBlogg from '../compunent/LeatestBlogg'


const Home = () => {
  return (
    <div>
      <Banner />
      <Product />
      <LeatestProducts />
      <Support />
      <BanAdd />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <GetLeates />
       <LeatestBlogg />  
    </div>
  )
}
export default Home
