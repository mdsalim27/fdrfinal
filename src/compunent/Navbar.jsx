import React, { useState } from 'react'
import Container from './Container'
import Logo from '../assets/logo.png'
import { IoIosSearch } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'


const Navbar = () => {


  let [nave, setNave] = useState([])
  let handelNave = () => {
    console.log('ami');



  }
  return (
    <div>
      <section className='mt-6'>
        <Container>
          <div className='lg:flex'>
            <div className='lg:w-1/6  flex justify-between px-5 lg:px-0 lg:items-center items-center'><img src={Logo} alt="" /> < FaBars onClick={handelNave} className='cursor-pointer lg:opacity-0 ' /> </div>

            <div className='lg:w-3/6'>
              <ui className="lg:flex list-none" >
                <li className='px-3'><a href="/">home </a></li>
                <li className='px-3'><a href="/pages">Pages</a></li>
                <li className='px-3'><a href="/products">Products</a></li>
                <li className='px-3'><a href="/blog">Blog </a></li>
                <li className='px-3'><a href="/shop">Shop</a></li>
                <li className='px-3'><a href="/contact">Contact</a></li>
              </ui>
            </div>
            <div className='lg:w-2/6 flex items-center justify-end '>


              <div className='bg-[#D9D9D9] h-[100%]'>
                <input
                 type="text"
                 />
              </div>


              <div className='bg-amber-800 h-[100%] px-2 '> <IoIosSearch className='mt-[50%] transition-x-[-50%]' /></div>
            </div>

          </div>
        </Container>
       
      </section>
    </div>
  )
}

export default Navbar
