// import React from 'react'
// import Bannerr from '../assets/banner.png'
// import Slider from 'react-slick'
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

// function SampleNextArrow(props) {
//     const { style, onClick } = props;
//     return (
//         <div className='lg:w-[30px] w-[30px] lg:h-[30px] h-[30px] border-none rounded-full flex justify-center 
//         items-center bg-[blue] absolute top-[50%] translate-y-[-50%] right-0 z-[1]' onClick={onClick}
//         >
//             <FaArrowAltCircleRight className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer' />
//         </div>
//     );
// }
// function SamplePrevArrow(props) {
//     const { style, onClick } = props;
//     return (
//         <div className='lg:w-[30px] w-[0px] lg:h-[30px] h-[50px]  border-none rounded-full flex  justify-center
//          items-center bg-[blue] absolute top-[50%] translate-y-[-50%] left-0 z-[1]' onClick={onClick}>
//             <FaArrowAltCircleLeft className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer ' />
//         </div>
//     );
// }

// const Banner = () => {
//     var bannarslide = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//     }
//     return (
//         <Slider {...bannarslide}>
//             <img src={Bannerr} alt="" />
//             <img src={Bannerr} alt="" />
//             <img src={Bannerr} alt="" />
//         </Slider>
//     )
// }

// export default Banner

import React from 'react'
import Bannerr from '../assets/banner.png'
import Slider from 'react-slick'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 lg:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 hidden lg:block justify-center items-center cursor-pointer'
            onClick={onClick}
        >
            <FaArrowAltCircleRight className='w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[blue]' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className=' absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 lg:left-6 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12  hidden lg:block justify-center items-center cursor-pointer ' 
            onClick={onClick}
        >
            <FaArrowAltCircleLeft className='w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[blue]' />
        </div>
    );
}

const Banner = () => {
    const bannarslide = {
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
        <div className='w-full overflow-hidden'>
            <Slider {...bannarslide}>
                <img src={Bannerr} alt="Banner" className='w-full h-auto object-cover' />
                <img src={Bannerr} alt="Banner" className='w-full h-auto object-cover' />
                <img src={Bannerr} alt="Banner" className='w-full h-auto object-cover' />
            </Slider>
        </div>
    )
}

export default Banner
