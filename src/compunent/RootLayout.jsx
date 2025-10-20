import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Menu from './Menu'
import Footer from './Footer'
import Companyspons from './Companyspons'
import { FaAngleDoubleUp } from 'react-icons/fa'

const RootLayout = () => {
    let [showArrow, setShowArrow] = useState(false)
    useEffect(() => {
        let handleScrollTo = () => {
            if (window.scrollY > 130) {
                setShowArrow(true)
            } else {
                setShowArrow(false)
            }
        }
        window.addEventListener("scroll", handleScrollTo)
        return () => window.removeEventListener("scroll", handleScrollTo)
    }, [])
    let handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div>
            <Menu />
            <Navbar />
            <Outlet />
            <Companyspons />
            <Footer />
            {
                showArrow && <div className=' fixed right-[20px] bottom-[20px]  z-999'>
                    <FaAngleDoubleUp onClick={handleScroll} className='bg-blue-500 p-2 rounded-full cursor-pointer text-4xl text-white hover:scale-110 hover:bg-blue-950 transition-transform duration-300 ease-in-out' />
                </div>
            }
        </div>
    )
}
export default RootLayout
