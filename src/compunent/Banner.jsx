import React from 'react'
import Bannerr from '../assets/banner.png'
import Slider from 'react-slick'

const Banner = () => {
    var bannarslide = {
        dots:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    }
    return (
        <section className='bg-[#F1F0FF]'>
            <div>
                <Slider  {...bannarslide}>
                    <div className='m-0 p-0'><img className='mx-auto ' src={Bannerr} alt="" /></div>
                    <div className='m-0 p-0'><img className='mx-auto ' src={Bannerr} alt="" /></div>
                    <div className='m-0 p-0'><img className='mx-auto ' src={Bannerr} alt="" /></div>
                </Slider>
            </div>
        </section>
    )
}

export default Banner
