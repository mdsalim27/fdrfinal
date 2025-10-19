// import React, { useContext } from 'react'
// import Container from './Container'
// import { ApiData } from './ContextApi'
// import { FaCartShopping } from 'react-icons/fa6'
// import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'

// const SingelProduct = () => {
//     let singelproduct = useContext(ApiData)
//     return (
//         <Container>
//             <div className='flex justify-between items-center'>
//                 <div className=' mt-4 '>
//                     {
//                         singelproduct.map((item) => (
//                             <div className='w-full flex items-center'>
//                                 <div>
//                                     <img src={item.thumbnail} alt="" />
//                                 </div>
//                                 <div>
//                                     <div className=' grid grid-cols-3 items-center  gap-5 py-2'>
//                                         <div>
//                                             <h2 className='text-[#111C85] font-bold text-[22px]'>{item.title}</h2>

//                                         </div>
//                                         <div className='flex justify-center py-1  '>
//                                             <div className='w-[10px] h-[10px] border rounded-full bg-[#05E6B7] flex justify-center ml-3'></div>
//                                             <div className='w-[10px] h-[10px] border rounded-full bg-[#F701A8] flex justify-center ml-3'></div>
//                                             <div className='w-[10px] h-[10px] border rounded-full bg-[#FFEAC1] flex justify-center ml-3'></div>
//                                         </div>
//                                         <div></div>
//                                     </div>
//                                     <h2 className='py-2'>{item.price} <span>{item.price}</span></h2>
//                                     <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
//                                     <div className='flex pt-3 gap-10'>
//                                         <div className='  cursor-pointer'><FaCartShopping /></div>
//                                         <div className='  cursor-pointer'><FaRegHeart /></div>
//                                         <div className='  cursor-pointer'><FaSearchPlus /></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <div className='bg-amber-500'>hi</div>
//             </div>
//             {SingelProduct = { SingelProduct }}
//         </Container>
//     )
// }

// export default SingelProduct

import React, { useContext } from 'react'
import Container from './Container'
import { ApiData } from './ContextApi'
import { FaCartShopping } from 'react-icons/fa6'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'

const SingelProduct = () => {
  const { singleProduct } = useContext(ApiData) // ⬅️ expect this from ContextApi

  if (!singleProduct) {
    return (
      <Container>
        <p className="text-center py-10 text-gray-500">Loading product...</p>
      </Container>
    )
  }

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-8">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={singleProduct.thumbnail}
            alt={singleProduct.title}
            className="w-[300px] h-[300px] object-cover rounded-lg shadow"
          />
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[#111C85] font-bold text-[24px] mb-3">
            {singleProduct.title}
          </h2>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-[12px] h-[12px] rounded-full bg-[#05E6B7]" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#F701A8]" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#FFEAC1]" />
          </div>

          <h3 className="text-[20px] font-semibold text-gray-800 mb-3">
            ${singleProduct.price}
          </h3>

          <p className="text-gray-600 mb-5">
            {singleProduct.description ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'}
          </p>

          <div className="flex gap-6 text-2xl text-[#111C85]">
            <FaCartShopping className="cursor-pointer hover:text-pink-500 transition" />
            <FaRegHeart className="cursor-pointer hover:text-pink-500 transition" />
            <FaSearchPlus className="cursor-pointer hover:text-pink-500 transition" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SingelProduct
