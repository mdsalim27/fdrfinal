import React from 'react'
import Trending from '../assets/Trending.png'
import Trending1 from '../assets/Trending1.png'
import Trending2 from '../assets/Trending2.png'
import Trending3 from '../assets/Trending3.png'
import Trending4 from '../assets/trending5.png'
import Trending5 from '../assets/trending4.png'
import Trendings from '../assets/stending.png'
import Container from './Container'
const TrendingProducts = () => {
    return (
        <Container>

            <div className=' my-5 bg-[#F5F6F8] cursor-pointer '>
                <div>
                    <h2 className='text-[#151875] text-center text-[30px] font-extrabold py-8'>Trending Products</h2>
                </div>
                <div className='flex justify-between  py-3 '>
                    <div className='mx-4 bg-[#FFFFFF] py-3 px-3'>
                        <div><img src={Trending} alt="" />
                            <div><h2 className='text-[#151875] font-[25px] text-center'>Cantilever chair</h2>
                                <p className='text-center'>$26.00 </p>
                            </div>
                        </div>
                    </div>
                    <div className='mx-4 bg-[#FFFFFF] py-3 px-3'>
                        <div><img src={Trending1} alt="" />
                            <div><h2 className='text-[#151875] font-[25px] text-center'>Cantilever chair</h2>
                                <p className='text-center'>$26.00 </p>
                            </div>
                        </div>
                    </div>
                    <div className='mx-4 bg-[#FFFFFF] py-3 px-3'>
                        <div><img src={Trending2} alt="" />
                            <div><h2 className='text-[#151875] font-[25px] text-center'>Cantilever chair</h2>
                                <p className='text-center'>$26.00 </p>
                            </div>
                        </div>
                    </div>
                    <div className='mx-4 bg-[#FFFFFF] py-3 px-3'>
                        <div><img src={Trending3} alt="" />
                            <div><h2 className='text-[#151875] font-[25px] text-center'>Cantilever chair</h2>
                                <p className='text-center'>$26.00 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex cursor-pointer'>
                <div className='w-1/3 mx-3 '><img src={Trending4} alt="" /></div>
                <div className='w-1/3 mx-3 '><img src={Trending5} alt="" /></div>
                <div className='w-1/3 mx-3  mt-4'>
                    <div className='flex my-1'>
                        <div><img className=' bg-amber-50 mr-3' src={Trendings} alt="" /></div>
                        <div><h4 className=' text-[#151875]'>Executive Seat chair</h4>
                            <p>$32.00</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div><img className=' bg-amber-50 mr-3' src={Trendings} alt="" /></div>
                        <div><h4 className=' text-[#151875]'>Executive Seat chair</h4>
                            <p>$32.00</p>
                        </div>
                    </div>
                    <div className='flex my-1'>
                        <div><img className=' bg-amber-50 mr-3' src={Trendings} alt="" /></div>
                        <div><h4 className=' text-[#151875]'>Executive Seat chair</h4>
                            <p>$32.00</p>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default TrendingProducts
