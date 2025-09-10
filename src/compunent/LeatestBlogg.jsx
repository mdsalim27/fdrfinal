import React from 'react'
import Container from './Container'
import Freem from '../assets/Freem.png'
import { FaPenNib, FaRegCalendarAlt } from 'react-icons/fa'
const LeatestBlogg = () => {
    return (
        <Container>
            <div className='py-9 cursor-pointer'>
                <div><h2 className='font-extrabold text-[#151875] text-[30px] text-center'>Leatest Blog</h2></div>
                <div className='flex'>
                    <div className='w-[33%] my-10 shadow-2xl'>
                        <div className='flex justify-center pt-4'><img className='' src={Freem} alt="" /></div>
                        <div className='flex items-center justify-between px-6 py-4'>
                            <div className='flex items-center'>
                                <div><FaPenNib /></div>
                                <div><h2>SaberAli</h2></div>
                            </div>
                            <div className='flex items-center'>
                                <div><FaRegCalendarAlt /></div>
                                <div><h2>11 September,2025</h2></div>
                            </div>
                        </div>
                        <div className='px-3'><h2 className='font-extrabold text-[#151875] text-[25px] py-4'>Top esssential Trends in 2021</h2>
                            <p className='pr-3'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <p className='py-5 font-extralight text-[#151875] text-[30px] underline'>Read More</p>
                        </div>
                    </div>
                    <div className='w-[33%] my-10 shadow-2xl'>
                        <div className='flex justify-center pt-4'><img className='' src={Freem} alt="" /></div>
                        <div className='flex items-center justify-between px-6 py-4'>
                            <div className='flex items-center'>
                                <div><FaPenNib /></div>
                                <div><h2>SaberAli</h2></div>
                            </div>
                            <div className='flex items-center'>
                                <div><FaRegCalendarAlt /></div>
                                <div><h2>11 September,2025</h2></div>
                            </div>
                        </div>
                        <div className='px-3'><h2 className='font-extrabold text-[#151875] text-[25px] py-4'>Top esssential Trends in 2021</h2>
                            <p className='pr-3'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <p className='py-5 font-extralight text-[#151875] text-[30px] underline'>Read More</p>
                        </div>
                    </div>
                    <div className='w-[33%] my-10 shadow-2xl'>
                        <div className='flex justify-center pt-4'><img className='' src={Freem} alt="" /></div>
                        <div className='flex items-center justify-between px-6 py-4'>
                            <div className='flex items-center'>
                                <div><FaPenNib /></div>
                                <div><h2>SaberAli</h2></div>
                            </div>
                            <div className='flex items-center'>
                                <div><FaRegCalendarAlt /></div>
                                <div><h2>11 September,2025</h2></div>
                            </div>
                        </div>
                        <div className='px-3'><h2 className='font-extrabold text-[#151875] text-[25px] py-4'>Top esssential Trends in 2021</h2>
                            <p className='pr-3'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <p className='py-5 font-extralight text-[#151875] text-[30px] underline'>Read More</p>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default LeatestBlogg
