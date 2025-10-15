import React, { useState } from 'react'
import Container from './Container'
import Freem from '../assets/Freem.png'
import { FaPenNib, FaRegCalendarAlt } from 'react-icons/fa'
const LeatestBlogg = () => {
    let [show , setShow] = useState(false) 
    let [show1 , setShow1] = useState(false) 
    let [show2 , setShow2] = useState(false) 
    let handeLreadmore =()=>{
       setShow(!show);   
    }
    let handeLreadmore1 =()=>{
       setShow1(!show1);   
    }
    let handeLreadmore2 =()=>{
       setShow2(!show2);   
    }

    return (
        <Container>
            <div className='py-9 cursor-pointer'>
                <div><h2 className='font-extrabold text-[#151875] text-[30px] text-center'>Leatest Blog</h2></div>
                <div className='lg:flex'>
                    <div className='lg:w-[33%] w-full my-10 shadow-2xl'>
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
                            <p onClick={handeLreadmore} className='py-5 font-extralight text-[#151875] text-[30px] underline'>Read More</p>
                            {
                                show && <div><h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima recusandae, officia maxime distinctio delectus asperiores pariatur esse quos hic quaerat?</h2></div>
                            }
                        </div>
                    </div>
                    <div className='lg:w-[33%] w-full my-10 shadow-2xl'>
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
                            <p onClick={handeLreadmore1} className='py-5 font-extralight text-[#151875] text-[30px] underline'>Read More</p>
                            {
                                show1 && <div><h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima recusandae, officia maxime distinctio delectus asperiores pariatur esse quos hic quaerat?</h2></div>
                            }
                        </div>
                    </div>
                    <div className='lg:w-[33%] w-full my-10 shadow-2xl'>
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
                            <p onClick={handeLreadmore2} className='py-5 font-extralight text-[#151875] text-[30px] underline'>Read More</p>
                            {
                                show2 && <div><h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima recusandae, officia maxime distinctio delectus asperiores pariatur esse quos hic quaerat?</h2></div>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default LeatestBlogg
