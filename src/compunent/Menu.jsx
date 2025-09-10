import React from 'react'
import Container from './Container'
import { SiGmail } from 'react-icons/si'
import { MdOutlineWifiCalling3 } from 'react-icons/md'
import { GiHumanTarget } from 'react-icons/gi'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'

const Menu = () => {
    return (
        <section className='bg-[#7E33E0] py-4'>
            <Container>
                <div className='flex justify-between'>
                    <div className='flex justify-between'>
                        <div className='flex justify-start items-center gap-4 text-[#F1F1F1]'>
                            <div><SiGmail /></div>
                            <div><p className='text-[#F1F1F1]'>salimhosen2023@gmail.com</p></div>
                        </div>

                        <div className='flex justify-start items-center gap-4 pl-10 text-[#F1F1F1]'>
                            <div ><MdOutlineWifiCalling3 /></div>
                            <div><p>01831828257</p></div>
                        </div>
                    </div>

                    <div className='flex text-[#F1F1F1]'>
                        <div>
                            <select >
                                <option className='bg-[#7474ac]' value="English">English</option>
                                <option className='bg-[#7474ac]' value="Bangla" selected>Bangla</option>
                                <option className='bg-[#7474ac]' value="Japansece">Japansece</option>
                            </select>
                        </div>
                        <div>
                            <select className='px-2 mx-5'>
                                <option className='bg-[#7474ac]' value="USD">USD</option>
                                <option className='bg-[#7474ac]' value="Bangla" selected>BDT</option>
                                <option className='bg-[#7474ac]' value="Japansece">YEN</option>
                                <option className='bg-[#7474ac]' value="Tether">USDT</option>
                            </select>
                        </div>
                        <div className='flex items-center gap-3 text-[#F1F1F1] '>
                            <div><h2>Login</h2></div>
                            <div><GiHumanTarget/></div>
                        </div>
                        <div className='flex items-center gap-3 text-[#F1F1F1] mx-5'>
                            <div><p>Wishlist</p></div>
                            <div><CiHeart  />  </div>
                            <div className='ml-4 '><CiShoppingCart className='' /></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Menu
