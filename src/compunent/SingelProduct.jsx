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
                                    <h2>Accumsan tincidunt</h2>
                                    <h2>{item.price} <span>{item.price}</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className='flex '>
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
        </Container>
    )
}

export default SingelProduct