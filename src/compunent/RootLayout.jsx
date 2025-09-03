import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Menu from './Menu'


const RootLayout = () => {
    return (
        <div>
            <Menu/>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default RootLayout
