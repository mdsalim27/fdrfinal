import React, { useContext } from 'react'
import { ApiData } from './ContextApi'
import { DiMagento } from 'react-icons/di'
import { FaCartShopping } from 'react-icons/fa6'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import Container from './Container'
import { Link } from 'react-router-dom'

const Shop = () => {
  let info = useContext(ApiData)
  return (
    <Container>


      {
        <div className='flex flex-wrap'>{
          info.map((item) => (
            <div className=' relative w-[24%]  '>
              <Link to={"/productDet"}>
                <div className='shadow-2xl mx-1'>
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
                    <div className='relative mx-1'>
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
              </Link>
            </div>

          ))}
        </div>
      }
    </Container>

  )
}

export default Shop
