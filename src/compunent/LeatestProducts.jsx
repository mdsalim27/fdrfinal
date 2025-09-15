import React from 'react'
import Container from './Container'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import Producta from '../assets/producta.png'
import Trending from '../assets/Trending.png'
import Trending1 from '../assets/Trending1.png'
import Trending2 from '../assets/Trending2.png'
import Trending3 from '../assets/Trending3.png'




const LeatestProducts = () => {
    return (
        <Container>
            <div>
                <div>
                    <div className='text-center mt-10'><h2 className='text-[#151875] text-[35px] font-extrabold'>Leatest Products</h2></div>
                    <div className='mt-4'>
                        <ul className='flex justify-center'>
                            <li className='px-7'><a href="##">New Arrival</a></li>
                            <li className='px-7'><a href="##">Best Seller</a></li>
                            <li className='px-7'><a href="##">Featured</a></li>
                            <li className='px-7'><a href="##">Special Offer</a></li>
                        </ul>
                    </div>
                </div>
                <div className=' gap-8 flex'>
                    <div className='flex w-[24%] relative '>
                        <div className='mt-7 w-[100%] shadow-2xl '>
                            <div className='relative'>
                                <div className=' bg-[#F7F7F7]'>
                                    <img className='mx-auto pt-9 ' src={Trending1} alt="" />

                                </div>
                            </div>
                            <div className='text-center flex justify-between px-5'>
                                <h3 className=' font-bold py-1 text-[#FB2E86]'>Cantilever chair</h3>
                                <p className='py-1'>$42.00</p>
                            </div>

                            {/* hovar mart /////////////////////////////////////////////////////////////////////////////// */}

                            <div className='mt-7 w-[100%] shadow-2xl absolute top-0 left-0 opacity-0 hover:opacity-100 '>
                                <div className='relative'>
                                    <div className=' bg-[#F6F7FB]  '>
                                        <img className='mx-auto pt-9 ' src={Trending1} alt="" />
                                        <div className='flex '>
                                            <div className=' left-[20px] bottom-[80px]  mt-6 absolute cursor-pointer'><FaCartShopping /></div>
                                            <div className=' left-[20px] bottom-[50px]  mt-6 absolute cursor-pointer'><FaRegHeart /></div>
                                            <div className=' left-[20px] bottom-[20px] mt-6  absolute cursor-pointer'><FaSearchPlus /></div>
                                            <div className=' left-[20px]  top-[30px] bg-[#3F509E] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer'>Sale</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center bg-[blue] text-[#FFF] flex justify-between px-5'>
                                    <h3 className=' font-bold py-1 '>Cantilever chair</h3>
                                    <p className='py-1'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-[24%] relative '>
                        <div className='mt-7 w-[100%] shadow-2xl '>
                            <div className='relative'>
                                <div className=' bg-[#F7F7F7]'>
                                    <img className='mx-auto pt-9 ' src={Trending} alt="" />

                                </div>
                            </div>
                            <div className='text-center flex justify-between px-5'>
                                <h3 className=' font-bold py-1 text-[#FB2E86]'>Cantilever chair</h3>
                                <p className='py-1'>$42.00</p>
                            </div>

                            {/* hovar mart /////////////////////////////////////////////////////////////////////////////// */}

                            <div className='mt-7 w-[100%] shadow-2xl absolute top-0 left-0 opacity-0 hover:opacity-100 '>
                                <div className='relative'>
                                    <div className=' bg-[#F6F7FB]  '>
                                        <img className='mx-auto pt-9 ' src={Trending} alt="" />
                                        <div className='flex '>
                                            <div className=' left-[20px] bottom-[80px]  mt-6 absolute cursor-pointer'><FaCartShopping /></div>
                                            <div className=' left-[20px] bottom-[50px]  mt-6 absolute cursor-pointer'><FaRegHeart /></div>
                                            <div className=' left-[20px] bottom-[20px] mt-6  absolute cursor-pointer'><FaSearchPlus /></div>
                                            <div className=' left-[20px]  top-[30px] bg-[#3F509E] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer'>Sale</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center bg-[blue] text-[#FFF] flex justify-between px-5'>
                                    <h3 className=' font-bold py-1 '>Cantilever chair</h3>
                                    <p className='py-1'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-8 w-[24%] relative '>
                        <div className='mt-7 w-[100%] shadow-2xl '>
                            <div className='relative'>
                                <div className=' bg-[#F7F7F7]'>
                                    <img className='mx-auto pt-9 ' src={Trending2} alt="" />

                                </div>
                            </div>
                            <div className='text-center flex justify-between px-5'>
                                <h3 className=' font-bold py-1 text-[#FB2E86]'>Cantilever chair</h3>
                                <p className='py-1'>$42.00</p>
                            </div>

                            {/* hovar mart /////////////////////////////////////////////////////////////////////////////// */}

                            <div className='mt-7 w-[100%] shadow-2xl absolute top-0 left-0 opacity-0 hover:opacity-100 '>
                                <div className='relative'>
                                    <div className=' bg-[#F6F7FB]  '>
                                        <img className='mx-auto pt-9 ' src={Trending2} alt="" />
                                        <div className='flex '>
                                            <div className=' left-[20px] bottom-[80px]  mt-6 absolute cursor-pointer'><FaCartShopping /></div>
                                            <div className=' left-[20px] bottom-[50px]  mt-6 absolute cursor-pointer'><FaRegHeart /></div>
                                            <div className=' left-[20px] bottom-[20px] mt-6  absolute cursor-pointer'><FaSearchPlus /></div>
                                            <div className=' left-[20px]  top-[30px] bg-[#3F509E] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer'>Sale</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center bg-[blue] text-[#FFF] flex justify-between px-5'>
                                    <h3 className=' font-bold py-1 '>Cantilever chair</h3>
                                    <p className='py-1'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-8 w-[24%] relative '>
                        <div className='mt-7 w-[100%] shadow-2xl '>
                            <div className='relative'>
                                <div className=' bg-[#F7F7F7]'>
                                    <img className='mx-auto pt-9 ' src={Trending3} alt="" />

                                </div>
                            </div>
                            <div className='text-center flex justify-between px-5'>
                                <h3 className=' font-bold py-1 text-[#FB2E86]'>Cantilever chair</h3>
                                <p className='py-1'>$42.00</p>
                            </div>

                            {/* hovar mart /////////////////////////////////////////////////////////////////////////////// */}

                            <div className='mt-7 w-[100%] shadow-2xl absolute top-0 left-0 opacity-0 hover:opacity-100 '>
                                <div className='relative'>
                                    <div className=' bg-[#F6F7FB]  '>
                                        <img className='mx-auto pt-9 ' src={Trending3} alt="" />
                                        <div className='flex '>
                                            <div className=' left-[20px] bottom-[80px]  mt-6 absolute cursor-pointer'><FaCartShopping /></div>
                                            <div className=' left-[20px] bottom-[50px]  mt-6 absolute cursor-pointer'><FaRegHeart /></div>
                                            <div className=' left-[20px] bottom-[20px] mt-6  absolute cursor-pointer'><FaSearchPlus /></div>
                                            <div className=' left-[20px]  top-[30px] bg-[#3F509E] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer'>Sale</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center bg-[blue] text-[#FFF] flex justify-between px-5'>
                                    <h3 className=' font-bold py-1 '>Cantilever chair</h3>
                                    <p className='py-1'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' gap-8 flex'>
                    <div className='flex w-[24%] relative '>
                        <div className='mt-7 w-[100%] shadow-2xl '>
                            <div className='relative'>
                                <div className=' bg-[#F7F7F7]'>
                                    <img className='mx-auto pt-9 ' src={Trending3} alt="" />

                                </div>
                            </div>
                            <div className='text-center flex justify-between px-5'>
                                <h3 className=' font-bold py-1 text-[#FB2E86]'>Cantilever chair</h3>
                                <p className='py-1'>$42.00</p>
                            </div>

                            {/* hovar mart /////////////////////////////////////////////////////////////////////////////// */}

                            <div className='mt-7 w-[100%] shadow-2xl absolute top-0 left-0 opacity-0 hover:opacity-100 '>
                                <div className='relative'>
                                    <div className=' bg-[#F6F7FB]  '>
                                        <img className='mx-auto pt-9 ' src={Trending3} alt="" />
                                        <div className='flex '>
                                            <div className=' left-[20px] bottom-[80px]  mt-6 absolute cursor-pointer'><FaCartShopping /></div>
                                            <div className=' left-[20px] bottom-[50px]  mt-6 absolute cursor-pointer'><FaRegHeart /></div>
                                            <div className=' left-[20px] bottom-[20px] mt-6  absolute cursor-pointer'><FaSearchPlus /></div>
                                            <div className=' left-[20px]  top-[30px] bg-[#3F509E] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer'>Sale</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center bg-[blue] text-[#FFF] flex justify-between px-5'>
                                    <h3 className=' font-bold py-1 '>Cantilever chair</h3>
                                    <p className='py-1'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-[24%] relative '>
                        <div className='mt-7 w-[100%] shadow-2xl '>
                            <div className='relative'>
                                <div className=' bg-[#F7F7F7]'>
                                    <img className='mx-auto pt-9 ' src={Trending1} alt="" />

                                </div>
                            </div>
                            <div className='text-center flex justify-between px-5'>
                                <h3 className=' font-bold py-1 text-[#FB2E86]'>Cantilever chair</h3>
                                <p className='py-1'>$42.00</p>
                            </div>

                            {/* hovar mart /////////////////////////////////////////////////////////////////////////////// */}

                            <div className='mt-7 w-[100%] shadow-2xl absolute top-0 left-0 opacity-0 hover:opacity-100 '>
                                <div className='relative'>
                                    <div className=' bg-[#F6F7FB]  '>
                                        <img className='mx-auto pt-9 ' src={Trending1} alt="" />
                                        <div className='flex '>
                                            <div className=' left-[20px] bottom-[80px]  mt-6 absolute cursor-pointer'><FaCartShopping /></div>
                                            <div className=' left-[20px] bottom-[50px]  mt-6 absolute cursor-pointer'><FaRegHeart /></div>
                                            <div className=' left-[20px] bottom-[20px] mt-6  absolute cursor-pointer'><FaSearchPlus /></div>
                                            <div className=' left-[20px]  top-[30px] bg-[#3F509E] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer'>Sale</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center bg-[blue] text-[#FFF] flex justify-between px-5'>
                                    <h3 className=' font-bold py-1 '>Cantilever chair</h3>
                                    <p className='py-1'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-8 w-[24%] relative '>
                        <div className='mt-7 w-[100%] shadow-2xl '>
                            <div className='relative'>
                                <div className=' bg-[#F7F7F7]'>
                                    <img className='mx-auto pt-9 ' src={Trending2} alt="" />

                                </div>
                            </div>
                            <div className='text-center flex justify-between px-5'>
                                <h3 className=' font-bold py-1 text-[#FB2E86]'>Cantilever chair</h3>
                                <p className='py-1'>$42.00</p>
                            </div>

                            {/* hovar mart /////////////////////////////////////////////////////////////////////////////// */}

                            <div className='mt-7 w-[100%] shadow-2xl absolute top-0 left-0 opacity-0 hover:opacity-100 '>
                                <div className='relative'>
                                    <div className=' bg-[#F6F7FB]  '>
                                        <img className='mx-auto pt-9 ' src={Trending2} alt="" />
                                        <div className='flex '>
                                            <div className=' left-[20px] bottom-[80px]  mt-6 absolute cursor-pointer'><FaCartShopping /></div>
                                            <div className=' left-[20px] bottom-[50px]  mt-6 absolute cursor-pointer'><FaRegHeart /></div>
                                            <div className=' left-[20px] bottom-[20px] mt-6  absolute cursor-pointer'><FaSearchPlus /></div>
                                            <div className=' left-[20px]  top-[30px] bg-[#3F509E] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer'>Sale</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center bg-[blue] text-[#FFF] flex justify-between px-5'>
                                    <h3 className=' font-bold py-1 '>Cantilever chair</h3>
                                    <p className='py-1'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-8 w-[24%] relative '>
                        <div className='mt-7 w-[100%] shadow-2xl '>
                            <div className='relative'>
                                <div className=' bg-[#F7F7F7]'>
                                    <img className='mx-auto pt-9 ' src={Trending2} alt="" />

                                </div>
                            </div>
                            <div className='text-center flex justify-between px-5'>
                                <h3 className=' font-bold py-1 text-[#FB2E86]'>Cantilever chair</h3>
                                <p className='py-1'>$42.00</p>
                            </div>

                            {/* hovar mart /////////////////////////////////////////////////////////////////////////////// */}

                            <div className='mt-7 w-[100%] shadow-2xl absolute top-0 left-0 opacity-0 hover:opacity-100 '>
                                <div className='relative'>
                                    <div className=' bg-[#F6F7FB]  '>
                                        <img className='mx-auto pt-9 ' src={Trending2} alt="" />
                                        <div className='flex '>
                                            <div className=' left-[20px] bottom-[80px]  mt-6 absolute cursor-pointer'><FaCartShopping /></div>
                                            <div className=' left-[20px] bottom-[50px]  mt-6 absolute cursor-pointer'><FaRegHeart /></div>
                                            <div className=' left-[20px] bottom-[20px] mt-6  absolute cursor-pointer'><FaSearchPlus /></div>
                                            <div className=' left-[20px]  top-[30px] bg-[#3F509E] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer'>Sale</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center bg-[blue] text-[#FFF] flex justify-between px-5'>
                                    <h3 className=' font-bold py-1 '>Cantilever chair</h3>
                                    <p className='py-1'>$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default LeatestProducts
