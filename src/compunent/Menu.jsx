// import React from 'react'
// import Container from './Container'
// import { SiGmail } from 'react-icons/si'
// import { MdOutlineWifiCalling3 } from 'react-icons/md'
// import { GiHumanTarget } from 'react-icons/gi'
// import { CiHeart, CiShoppingCart } from 'react-icons/ci'
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const Menu = () => {
//     let data = useSelector((item) => item.Product.cartItem)

//     return (
//         <section className='bg-[#7E33E0] py-4'>
//             <Container>
//                 <div className='flex justify-between'>
//                     <div className='flex justify-between'>
//                         <div className='flex justify-start items-center gap-4 text-[#F1F1F1]'>
//                             <div><SiGmail /></div>
//                             <div><p className='text-[#F1F1F1]'>salimhosen2023@gmail.com</p></div>
//                         </div>

//                         <div className='flex justify-start items-center gap-4 pl-10 text-[#F1F1F1]'>
//                             <div ><MdOutlineWifiCalling3 /></div>
//                             <div><p>01831828257</p></div>
//                         </div>
//                     </div>

//                     <div className='flex text-[#F1F1F1]'>
//                         <div>
//                             <select >
//                                 <option className='bg-[#7474ac]' value="English">English</option>
//                                 <option className='bg-[#7474ac]' value="Bangla" selected>Bangla</option>
//                                 <option className='bg-[#7474ac]' value="Japansece">Japansece</option>
//                             </select>
//                         </div>
//                         <div>
//                             <select className='px-2 mx-5'>
//                                 <option className='bg-[#7474ac]' value="USD">USD</option>
//                                 <option className='bg-[#7474ac]' value="Bangla" selected>BDT</option>
//                                 <option className='bg-[#7474ac]' value="Japansece">YEN</option>
//                                 <option className='bg-[#7474ac]' value="Tether">USDT</option>
//                             </select>
//                         </div>

//                         <Link to={"/loginpage"}>
//                             <div className='flex items-center gap-3 text-[#F1F1F1] hover:font-extrabold hover:text-[20px] '>
//                                 <div><h2>Login</h2></div>
//                                 <div><GiHumanTarget /></div>
//                             </div>
//                         </Link>

//                         <div className='flex items-center gap-3 text-[#F1F1F1] mx-5'>
//                             <div><p>Wishlist</p></div>
//                             <div>
//                                 <div>
//                                     <CiHeart />
//                                 </div>
//                             </div>
//                             {/* <div className='ml-4 '><CiShoppingCart className='' /></div> */}
//                             <Link to={"/cart"}>
//                                 <div className='  relative '>
//                                     <div className=' absolute z-10'>
//                                         {data.length}
//                                     </div>
//                                     <div className=''>
//                                         <CiShoppingCart className='w-full'/>
//                                     </div>

//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </section>
//     )
// }

// export default Menu




import React from 'react'
import Container from './Container'
import { SiGmail } from 'react-icons/si'
import { MdOutlineWifiCalling3 } from 'react-icons/md'
import { GiHumanTarget } from 'react-icons/gi'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Menu = () => {
    let data = useSelector((item) => item.Product.cartItem)

    return (
        <section className='bg-[#7E33E0] py-3 text-sm md:text-base'>
            <Container>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-3'>

                    {/* Left Section */}
                    <div className='flex lg:flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 text-[#F1F1F1]'>
                        <div className='flex items-center justify-center text-[25px] lg:text-[18px] gap-2'>
                            <SiGmail />
                            <p className='truncate'>salimhosen2023@gmail.com</p>
                        </div>

                        <div className='flex items-center justify-center text-[30px] cursor-cell gap-2 sm:pl-6 lg:text-[18px]'>
                            <MdOutlineWifiCalling3 />
                            <p>01831828257</p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='flex flex-wrap items-center justify-between md:justify-end gap-3 text-[#F1F1F1]'>

                        {/* Language */}
                        <select className='bg-transparent border border-[#B1A9FF] rounded px-1 py-[2px] text-[#F1F1F1] focus:outline-none'>
                            <option className='bg-[#7474ac]' value="English">English</option>
                            <option className='bg-[#7474ac]' value="Bangla" selected>Bangla</option>
                            <option className='bg-[#7474ac]' value="Japanese">Japanese</option>
                        </select>

                        {/* Currency */}
                        <select className='bg-transparent border border-[#B1A9FF] rounded px-1 py-[2px] text-[#F1F1F1] focus:outline-none'>
                            <option className='bg-[#7474ac]' value="USD">USD</option>
                            <option className='bg-[#7474ac]' value="BDT" selected>BDT</option>
                            <option className='bg-[#7474ac]' value="YEN">YEN</option>
                            <option className='bg-[#7474ac]' value="USDT">USDT</option>
                        </select>

                        {/* Login */}
                        <Link to={"/loginpage"}>
                            <div className='flex items-center gap-1 hover:font-bold hover:text-[18px] transition-all border-2 border-amber-200'>
                                <h2>Login</h2>
                                <GiHumanTarget />
                            </div>
                        </Link>

                        {/* Wishlist + Cart */}
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center gap-1'>
                                <p>Wishlist</p>
                                <CiHeart className='text-lg' />
                            </div>

                            <Link to={"/cart"}>
                                <div className='relative'>
                                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-[5px]'>
                                        {data.length}
                                    </span>
                                    <CiShoppingCart className='text-[22px]' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Menu
