import React, { useContext } from 'react'
import { ApiData } from './ContextApi'
import Container from './Container'
import Slider from 'react-slick'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='lg:w-[50px] w-[30px] lg:h-[50px] h-[30px] border-none rounded-full flex justify-center 
        items-center bg-[#84d765] absolute top-[50%] translate-y-[-50%] right-0 z-[1]' onClick={onClick}
    >
      <FaArrowAltCircleRight className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer' />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='lg:w-[50px] w-[50px] lg:h-[50px] h-[50px]  border-none rounded-full flex  justify-center
         items-center bg-[#84d765] absolute top-[50%] translate-y-[-50%] left-0 z-[1]' onClick={onClick}>
      <FaArrowAltCircleLeft className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer ' />
    </div>
  );
}


const TopCategories = () => {
  let data = useContext(ApiData)
  var settingss = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Container>
      <Slider {...settingss}>
        {
          data.map((item) => (
            <div className='relative'>
              <div className=''><img className='rounded-full hover:border-l-12 border-[blue] ' src={item.image_path} alt="" />
              </div>
              <div className='text-center mt-4'>
                <h2 className='text-[#151875] text-[20px] font-bold '>Mini LCW Chair</h2>
                <p className='text-[#151875] text-[16px] font-bold'>$56.00</p>
              </div>
              <div className='  left-[50%] translate-x-[-50%] bottom-[20%] bg-[#08D15F] text-[#FFFFFF] py-1 px-3 absolute cursor-pointer '> <h2 className=' '>View Details</h2></div>
            </div>
          ))
        }

      </Slider>
    </Container>
  )
}

export default TopCategories
