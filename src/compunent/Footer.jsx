import React from 'react'
import Container from './Container'
import { IoLogoFacebook } from 'react-icons/io'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (<>
        <section className='bg-[#EEEFFB]'>
            <Container>
                <div className=' '>
                    <div className='flex justify-between'>
                        <div className='py-14'>
                            <div><img src={logo} alt="" /></div>
                            <div className='mt-10 '>
                                <div className='flex'>
                                    <div> <input className=' border-1 py-3 px-5' type="text" /> </div>
                                    <Link to={"/signuppage"}>
                                    <div ><button className='bg-[#FB2E86] py-3 px-5'>Sign Up</button></div>
                                    </Link>

                                </div>
                                <div><p className='mt-6 font-black'>Contact Info</p>
                                    <p className=' font-black'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='py-14 cursor-pointer'>
                                <h2 className='font-bold pb-2 text-[22px]'>Catagories</h2>
                                <p className='py-2 text-[#8A8FB9]'>Laptops & Computers</p>
                                <p className='py-2 text-[#8A8FB9]'>Cameras & Photography</p>
                                <p className='py-2 text-[#8A8FB9]'>Smart Phones & Tablets</p>
                                <p className='py-2 text-[#8A8FB9]'>Video Games & Consoles</p>
                                <p className='py-2 text-[#8A8FB9]'>Waterproof Headphones</p>
                            </div>
                        </div>
                        <div>
                             <div className='py-14 cursor-pointer'>
                                <h2 className='font-bold pb-2 text-[22px]'>Customer Care</h2>
                                <p className='py-2 text-[#8A8FB9]'>My Account</p>
                                <p className='py-2 text-[#8A8FB9]'>Discount</p>
                                <p className='py-2 text-[#8A8FB9]'>Returns</p>
                                <p className='py-2 text-[#8A8FB9]'>Orders History</p>
                                <p className='py-2 text-[#8A8FB9]'>Order Tracking</p>
                            </div>
                        </div>
                        <div>
                             <div className='py-14 cursor-pointer'>
                                <h2 className='font-bold pb-2 text-[22px]'>Pages</h2>
                                <p className='py-2 text-[#8A8FB9]'>Blog</p>
                                <p className='py-2 text-[#8A8FB9]'>Browse the Shop</p>
                                <p className='py-2 text-[#8A8FB9]'>Category</p>
                                <p className='py-2 text-[#8A8FB9]'>Pre-Built Pages</p>
                                <p className='py-2 text-[#8A8FB9]'>Visual Composer Elements</p>
                                <p className='py-2 text-[#8A8FB9]'>WooCommerce Pages</p>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>
        </section>
        <section className='bg-[#E7E4F8]'>
            <Container>
                <div className=' flex items-center py-6 justify-around'>
                    <div><p>©Webecy - All Rights Reserved</p></div>
                    <div className='flex items-center gap-12'>
                        <div><IoLogoFacebook /></div>
                        <div><FaInstagram /></div>
                        <div><FaTwitter /></div>
                    </div>
                </div>
            </Container>
        </section>
    </>
    )
}

export default Footer
