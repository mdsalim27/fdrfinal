import React from 'react'
import discountt from '../assets/dis.png'
import Container from './Container'
const DiscountItem = () => {
    return (
        <Container>
            <div>
                <div><h2 className='text-center text-[#151875] text-[30px] font-extrabold'>Discount Item</h2>
                    <div>
                        <ul className='flex justify-center gap-8 pt-5'>
                            <li className='hover:text-[red] hover:list-disc hover:underline'><a href="#">Wood Chair</a></li>
                            <li className='hover:text-[red] hover:list-disc hover:underline'><a href="#">Plastic Chair</a></li>
                            <li className='hover:text-[red] hover:list-disc hover:underline'><a href="#">Sofa Colletion</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-center cursor-pointer'>
                        <img src={discountt} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default DiscountItem
