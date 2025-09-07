import React from 'react'
import Bannerr from '../assets/banner.png'
import Slider from 'react-slick'



const Banner = () => {
     var bannarslide = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
     }
    return (
        <section id='banner' className='bg-[#F1F0FF]'>
<Slider {...bannarslide}>
            <div><img className='mx-auto' src={Bannerr} alt="" /></div>
            <div><img className='mx-auto' src={Bannerr} alt="" /></div>
            <div><img className='mx-auto' src={Bannerr} alt="" /></div>
</Slider>
        </section>
    )
}

export default Banner
