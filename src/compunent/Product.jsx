
import React, { useContext } from 'react'
import Container from './Container'
// import Producta from '../assets/producta.png'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { ApiData } from './ContextApi'
import Slider from 'react-slick'


function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div className='lg:w-[50px] w-[30px] lg:h-[50px] h-[30px] border-none rounded-full flex justify-center 
        items-center bg-amber-800 absolute top-[50%] translate-y-[-50%] right-0 z-[1]' onClick={onClick}
        >
            <FaArrowAltCircleRight className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer' />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div className='lg:w-[50px] w-[50px] lg:h-[50px] h-[50px]  border-none rounded-full flex  justify-center
         items-center bg-amber-800 absolute top-[50%] translate-y-[-50%] left-0 z-[1]' onClick={onClick}>
            <FaArrowAltCircleLeft className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer ' />
        </div>
    );
}



const Product = () => {
    let Data = useContext(ApiData)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    return (
        <section className=''>


            <Container >
                <div className='mt-[25px]'><h2 className='text-center font-bold text-[30px] opacity-100'>Featured Products</h2></div>
                <div className=''>
                    <Slider {...settings}>
                        {
                            Data.map((item) => (

                                <div className=' relative  '>
                                    <div className='shadow-2xl mx-3'>
                                        <div className='relative'>
                                            <div className=' bg-[#F6F7FB] '>
                                                <img className='mx-auto  ' src={item.image_path} alt="" />
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <h3 className=' font-bold py-1 text-[#FB2E86]'>{item.name}</h3>
                                            <div className='flex justify-center py-1  '>
                                                <div className='w-[15px] h-[4px] bg-[#05E6B7] flex justify-center ml-3'></div>
                                                <div className='w-[15px] h-[4px] bg-[#F701A8] flex justify-center ml-3'></div>
                                                <div className='w-[15px] h-[4px] bg-[#00009D] flex justify-center ml-3'></div>
                                            </div>
                                            <p className='py-1'>{item.id}</p>
                                            <p className='py-1 flex justify-evenly'><span className='font-extrabold'>Price:</span>{'$' + '' + item.price}</p>
                                        </div>
                                        {/* hovar mart /////////////////////////////////////////////////////////////////////////////// */}
                                        <div className='w-[100%]  shadow-2xl absolute top-0 left-0 opacity-0 hover:opacity-100 '>
                                            <div className='relative mx-3'>
                                                <div className=' bg-[#F7F7F7]'>
                                                    <img className='mx-auto  ' src={item.image_path} alt="" />
                                                    <div className='flex '>
                                                        <div className=' top-[1px] left-[40px]  mt-6 absolute cursor-pointer'><FaCartShopping /></div>
                                                        <div className=' top-[1px] left-[80px]  mt-6 absolute cursor-pointer'><FaRegHeart /></div>
                                                        <div className=' top-[1px] left-[120px] mt-6  absolute cursor-pointer'><FaSearchPlus /></div>
                                                        <div className='left-[50%] translate-x-[-50%] bottom-2 bg-[#08D15F] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer'>View Details</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-center bg-[blue] text-[#FFF]'>
                                                <h3 className=' font-bold py-1 '>{item.name}</h3>
                                                <div className='flex justify-center py-1  '>
                                                    <div className='w-[15px] h-[4px] bg-[#05E6B7] flex justify-center ml-3'></div>
                                                    <div className='w-[15px] h-[4px] bg-[#F701A8] flex justify-center ml-3'></div>
                                                    <div className='w-[15px] h-[4px] bg-[#FFEAC1] flex justify-center ml-3'></div>
                                                </div>
                                                <p className='py-1'>{item.id} </p>
                                                <p className='py-1 flex justify-evenly'><span className='font-extrabold'>Price:</span>{'$' + '' + item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }</Slider>

                </div>


            </Container>
        </section>
    )
}

export default Product
