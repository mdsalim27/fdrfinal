import React from 'react'
import Container from './Container'
import Car from '../assets/car.png'
import Car2 from '../assets/carm.png'
import Car3 from '../assets/carm3.png'
import Car4 from '../assets/carm4.png'
const Support = () => {
    return (
        <Container>
            <div >
                <div>
                    <div className='py-10'><h2 className='text-[#151875] text-[30px] font-extrabold text-center'>What Shopex Offer!</h2></div>
                </div>
                <div className='flex gap-3'>
                    <div className='w-[24%] text-center px-4 py-6 bg-[#fbf1f1]'>
                        <div className='flex justify-center'><img src={Car} alt="" /></div>
                        <div><h3 className='text-[#151875] font-bold text-[20px]'>24/7 Support</h3></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p></div>
                    </div>
                    <div className='w-[24%] text-center px-4 py-6 bg-[#fbf1f1]'>
                        <div className='flex justify-center'><img src={Car2} alt="" /></div>
                        <div><h3 className='text-[#151875] font-bold text-[20px]'>24/7 Support</h3></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p></div>
                    </div>
                    <div className='w-[24%] text-center px-4 py-6 bg-[#fbf1f1]'>
                        <div className='flex justify-center'><img src={Car3} alt="" /></div>
                        <div><h3 className='text-[#151875] font-bold text-[20px]'>24/7 Support</h3></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p></div>
                    </div>
                    <div className='w-[24%] text-center px-4 py-6 bg-[#fbf1f1]'>
                        <div className='flex justify-center'><img src={Car4} alt="" /></div>
                        <div><h3 className='text-[#151875] font-bold text-[20px]'>24/7 Support</h3></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Support
