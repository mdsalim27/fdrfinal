import React, { useContext } from 'react'
import Container from './Container'
import { ApiData } from './ContextApi'
import { FaCartShopping } from 'react-icons/fa6'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'

const SingelProduct = () => {
    let singelproduct = useContext(ApiData)
    return (
        <Container>
            <div className='flex justify-between items-center'>
                <div className=' mt-4 '>
                    {
                        singelproduct.map((item) => (
                            <div className='w-full flex items-center'>
                                <div>
                                    <img src={item.thumbnail} alt="" />
                                </div>
                                <div>
                                    <div className=' grid grid-cols-3 items-center  gap-5 py-2'>
                                        <div>
                                            <h2 className='text-[#111C85] font-bold text-[22px]'>{item.title}</h2>

                                        </div>
                                        <div className='flex justify-center py-1  '>
                                            <div className='w-[10px] h-[10px] border rounded-full bg-[#05E6B7] flex justify-center ml-3'></div>
                                            <div className='w-[10px] h-[10px] border rounded-full bg-[#F701A8] flex justify-center ml-3'></div>
                                            <div className='w-[10px] h-[10px] border rounded-full bg-[#FFEAC1] flex justify-center ml-3'></div>
                                        </div>
                                        <div></div>
                                    </div>
                                    <h2 className='py-2'>{item.price} <span>{item.price}</span></h2>
                                    <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className='flex pt-3 gap-10'>
                                        <div className='  cursor-pointer'><FaCartShopping /></div>
                                        <div className='  cursor-pointer'><FaRegHeart /></div>
                                        <div className='  cursor-pointer'><FaSearchPlus /></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='bg-amber-500'>hi</div>
            </div>
            {SingelProduct = { SingelProduct }}
        </Container>
    )
}

export default SingelProduct