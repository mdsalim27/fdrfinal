import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ApiData } from './ContextApi'
import { DiMagento } from 'react-icons/di'
import { FaCartShopping, FaRegHeart } from 'react-icons/fa6'
import Container from './Container'
import Shop from './Shop'
import { FaSearchPlus } from 'react-icons/fa'
const Products = ({Allpage}) => {
  return (<>
  <Container>
  {
        <div className='flex flex-wrap'>{
          Allpage.map((item) => (
            <div className=' relative w-[24%] my-3  '>
              <Link to={`/shop/${item.id}`}>
                <div className='shadow-2xl mx-1 '>
                  <div className='relative'>
                    <div className=' bg-[#F6F7FB] '>
                      <img className='mx-auto  ' src={item.image_path} alt="" />
                    </div>
                  </div>
                  <div className='text-center'>
                    <h3 className=' font-bold py-1 text-[#FB2E86]'>{item.name}</h3>
                    <div className='flex justify-center py-1  '>
                      <div className='w-[10px] h-[10px] border rounded-full bg-[#05E6B7] flex justify-center ml-3'></div>
                      <div className='w-[10px] h-[10px] border rounded-full bg-[#F701A8] flex justify-center ml-3'></div>
                      <div className='w-[10px] h-[10px] border rounded-full bg-[#00009D] flex justify-center ml-3'></div>
                    </div>
                    {/* <p className='py-1'>{item.id}</p> */}
                    <div className='grid grid-cols-2'>
                    <p className='py-1 flex justify-evenly'><span className='font-extrabold'></span>{'$' + '' + item.discount_price}</p>
                    <p className='py-1 flex justify-evenly line-through text-[#FB2E86]'><span className='font-extrabold'></span>{'$' + '' + item.price}</p>
                    </div>
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
                    <div className='text-center bg-[#5151ec] text-[#FFF]'>
                      <h3 className=' font-bold py-1 '>{item.name}</h3>
                      <div className='flex justify-center py-1  '>
                        <div className='w-[10px] h-[10px] border rounded-full bg-[#05E6B7] flex justify-center ml-3'></div>
                        <div className='w-[10px] h-[10px] border rounded-full bg-[#F701A8] flex justify-center ml-3'></div>
                        <div className='w-[10px] h-[10px] border rounded-full bg-[#FFEAC1] flex justify-center ml-3'></div>
                      </div>
                      {/* <p className='py-1'>{item.id} </p> */}
                      <div className='grid grid-cols-2'>
                    <p className='py-1 flex justify-evenly '><span className='font-extrabold'></span>{'$' + '' + item.discount_price}</p>
                    <p className='py-1 flex justify-evenly line-through text-[#FFFFFF]'><span className='font-extrabold'></span>{'$' + '' + item.price}</p>
                    </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}          
        </div>
      }
  </Container>
  </>
  )
}

export default Products