
import React from 'react'
import Container from './Container'
import Producta from '../assets/producta.png'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
const Product = () => {
    return (
        <Container>
            <div className='flex gap-8'>
                <div className='mt-7 w-[24%] shadow-2xl group'>
                    <div className='relative'>
                        <div className=' bg-[#F6F7FB] group hover:bg-[#F7F7F7]  '>
                            <img className='mx-auto pt-9 ' src={Producta} alt="" />
                            <div className='flex '>
                                <div className=' top-0 left-[40px]  mt-6 absolute'><FaCartShopping /></div>
                                <div className=' top-0 left-[80px]  mt-6 absolute'><FaRegHeart /></div>
                                <div className=' top-0 left-[120px] mt-6  absolute'><FaSearchPlus /></div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center group hover:bg-[blue] hover:text-[#FFF]'>
                        <h3 className=' font-bold py-1 '>Cantilever chair</h3>
                        <div className='flex justify-center py-1  '>
                            <div className='w-[15px] h-[4px] bg-amber-200 flex justify-center ml-3'></div>
                            <div className='w-[15px] h-[4px] bg-[#d62727] flex justify-center ml-3'></div>
                            <div className='w-[15px] h-[4px] bg-[blue] flex justify-center ml-3'></div>
                        </div>
                        <p className='py-1'>Code - y7j474</p>
                        <p className='py-1'>$42.00</p>
                    </div>
                </div>
                <div className='mt-7 w-[24%] shadow-2xl'>
                    <div>
                        <div className=' bg-[#F6F7FB] '><img className='mx-auto pt-9' src={Producta} alt="" /></div>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-[#FB2E86] font-bold py-1'>Cantilever chair</h3>
                        <div className='flex justify-center py-1'>
                            <div className='w-[30px] h-[5px] bg-amber-200 flex justify-center ml-3'></div>
                            <div className='w-[30px] h-[5px] bg-amber-200 flex justify-center ml-3'></div>
                            <div className='w-[30px] h-[5px] bg-amber-200 flex justify-center ml-3'></div>
                        </div>
                        <p className='py-1'>Code - y7j474</p>
                        <p className='py-1'>$42.00</p>
                    </div>
                </div>
                <div className='mt-7 w-[24%] shadow-2xl'>
                    <div>
                        <div className=' bg-[#F6F7FB] '><img className='mx-auto pt-9' src={Producta} alt="" /></div>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-[#FB2E86] font-bold py-1'>Cantilever chair</h3>
                        <div className='flex justify-center py-1'>
                            <div className='w-[30px] h-[5px] bg-amber-200 flex justify-center ml-3'></div>
                            <div className='w-[30px] h-[5px] bg-amber-200 flex justify-center ml-3'></div>
                            <div className='w-[30px] h-[5px] bg-amber-200 flex justify-center ml-3'></div>
                        </div>
                        <p className='py-1'>Code - y7j474</p>
                        <p className='py-1'>$42.00</p>
                    </div>
                </div>
                <div className='mt-7 w-[24%] shadow-2xl'>
                    <div>
                        <div className=' bg-[#F6F7FB] '><img className='mx-auto pt-9' src={Producta} alt="" /></div>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-[#FB2E86] font-bold py-1'>Cantilever chair</h3>
                        <div className='flex justify-center py-1'>
                            <div className='w-[30px] h-[5px] bg-amber-200 flex justify-center ml-3'></div>
                            <div className='w-[30px] h-[5px] bg-amber-200 flex justify-center ml-3'></div>
                            <div className='w-[30px] h-[5px] bg-amber-200 flex justify-center ml-3'></div>
                        </div>
                        <p className='py-1'>Code - y7j474</p>
                        <p className='py-1'>$42.00</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Product
