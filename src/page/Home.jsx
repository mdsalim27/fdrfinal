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
import LeatestBlogg from '../compunent/LeatestBlogg'
import ForgotPasswordPage from '../compunent/ForgotPasswordPage'
import ForgotPasswordPagecode from '../compunent/ForgotPasswordPagecode'
import SingelProduct from '../compunent/SingelProduct'
import Products from '../compunent/Products'
import FPage from '../compunent/FPage'
import Checkout from '../compunent/Checkout'

const Home = () => {
  return (
    <div>
         <Banner />
    <Product />
      {/*  <LeatestProducts />
      <Support />
      <BanAdd />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <GetLeates />
      <LeatestBlogg />   */}
    </div>
  )
}
export default Home
