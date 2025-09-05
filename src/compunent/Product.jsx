
import React from 'react'
import Container from './Container'
import Producta from '../assets/producta.png'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
const Product = () => {
    return (
        <Container >
            <div className='mt-[-25px]'><h2 className='text-center font-bold text-[30px]'>Featured Products</h2></div>
<div>
            <div className='flex gap-8 relative '>
                <div className='mt-7 w-[24%] shadow-2xl '>
                    <div className='relative'>
                        <div className=' bg-[#F6F7FB] '>
                            <img className='mx-auto pt-9 ' src={Producta} alt="" />

                        </div>
                    </div>
                    <div className='text-center'>
                        <h3 className=' font-bold py-1 text-[#FB2E86]'>Cantilever chair</h3>
                        <div className='flex justify-center py-1  '>
                            <div className='w-[15px] h-[4px] bg-amber-200 flex justify-center ml-3'></div>
                            <div className='w-[15px] h-[4px] bg-[#d62727] flex justify-center ml-3'></div>
                            <div className='w-[15px] h-[4px] bg-[blue] flex justify-center ml-3'></div>
                        </div>
                        <p className='py-1'>Code - y7j474</p>
                        <p className='py-1'>$42.00</p>
                    </div>

                    {/* hovar mart /////////////////////////////////////////////////////////////////////////////// */}

                    <div className='mt-7 w-[24%] shadow-2xl absolute top-0 left-0 opacity-0 hover:opacity-100 '>
                        <div className='relative'>
                            <div className=' bg-[#F7F7F7]  '>
                                <img className='mx-auto pt-9 ' src={Producta} alt="" />
                                <div className='flex '>
                                    <div className=' top-0 left-[40px]  mt-6 absolute cursor-pointer'><FaCartShopping /></div>
                                    <div className=' top-0 left-[80px]  mt-6 absolute cursor-pointer'><FaRegHeart /></div>
                                    <div className=' top-0 left-[120px] mt-6  absolute cursor-pointer'><FaSearchPlus /></div>
                                    <div className='left-[50%] translate-x-[-50%] bottom-2 bg-[#08D15F] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer'>View Details</div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center bg-[blue] text-[#FFF]'>
                            <h3 className=' font-bold py-1 '>Cantilever chair</h3>
                            <div className='flex justify-center py-1  '>
                                <div className='w-[15px] h-[4px] bg-amber-200 flex justify-center ml-3'></div>
                                <div className='w-[15px] h-[4px] bg-[#d62727] flex justify-center ml-3'></div>
                                <div className='w-[15px] h-[4px] bg-[#ffff] flex justify-center ml-3'></div>
                            </div>
                            <p className='py-1'>Code - y7j474</p>
                            <p className='py-1'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div>
</div>




        </Container>
    )
}

export default Product
