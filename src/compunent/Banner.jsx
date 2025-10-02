import React from 'react'
import Bannerr from '../assets/banner.png'
import Slider from 'react-slick'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div className='lg:w-[30px] w-[30px] lg:h-[30px] h-[30px] border-none rounded-full flex justify-center 
        items-center bg-[blue] absolute top-[50%] translate-y-[-50%] right-0 z-[1]' onClick={onClick}
        >
            <FaArrowAltCircleRight className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer' />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div className='lg:w-[30px] w-[0px] lg:h-[30px] h-[50px]  border-none rounded-full flex  justify-center
         items-center bg-[blue] absolute top-[50%] translate-y-[-50%] left-0 z-[1]' onClick={onClick}>
            <FaArrowAltCircleLeft className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer ' />
        </div>
    );
}

const Banner = () => {
    var bannarslide = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    return (
        <Slider {...bannarslide}>
            <img src={Bannerr} alt="" />
            <img src={Bannerr} alt="" />
            <img src={Bannerr} alt="" />
        </Slider>
    )
}

export default Banner
