// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// const ProductDet = () => {
//   let [singelp , setSingelp] = useState([])
//    const {id}  = useParams();
//    let singel =()=>{
//     axios.get(`https://dummyjson.com/products/${id.id}`).then((responce) => {
//       setSingelp(responce.data);     
//     })
//   }
//   useEffect(()=>{
//     singel()
//   },[])
//   return ( 
//       <h1> {singelp.title}</h1>
//   )
// }
// export default ProductDet


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from './Container'
import { CiHeart, CiStar } from 'react-icons/ci'
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitter } from 'react-icons/fa'

const ProductDet = () => {
  let [singleProduct, setSingleProduct] = useState([])
  let productId = useParams()
  let getproductId = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleProduct(response.data)
    })
  }
  useEffect(() => {
    getproductId()
  }, [])
  return (
    <Container>
      <section>
        <div className=' grid grid-cols-2 py-5 px-30 my-20 shadow-2xl'>
          <div className=' relative'>
            <div><img src={singleProduct.thumbnail} alt="" /></div>
            <div className=' absolute left-0 bottom-0 '>
              <button className='bg-green-200 text-[blue] px-8 mx-1 py-3 border-2 border-green-900 hover:font-extrabold hover:bg-black hover:text-[#FFFF] rounded-2xl'>Buy</button>
              <button className='bg-green-200 text-[blue] px-8 mx-1 py-3 border-2 border-green-900 hover:font-extrabold hover:bg-black hover:text-[#FFFF] rounded-2xl'>Add To Cart</button>
            </div>
          </div>
          <div>
            <div className=''>
              <h2 className='py-5 font-bold text-[30px]'>Playwood arm chair</h2>
              <div className='flex py-5 text-[35px] '>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <div className='flex gap-10 py-2 text-[#151875] font-medium text-[20px]'><p>{singleProduct.price}</p><p>{singleProduct.price}</p></div>
              <div><h2 className='py-2 text-[#151875] font-medium text-[20px]'>Color</h2></div>
              <div><p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p></div>
              <div className='flex items-center justify-center gap-16 py-2 text-[#151875] font-medium text-[20px]'><h3 className='py-2'>Add To cart</h3><CiHeart /></div>
              <div><h2 className='py-2 text-[#151875] font-medium text-[20px]'>Categories:</h2></div>
              <div><h2 className='py-2 text-[#151875] font-medium text-[20px]'>Tags</h2></div>
              <div className='flex gap-20 items-center py-2 text-[#151875] font-medium text-[20px]'><h2>Share</h2> 
              <div className='flex gap-8'> <a target='_blank' href="https://www.facebook.com/"><FaFacebook /></a> 
              <a target='_blank' href="https://github.com/mdsalim27"><FaGithub /></a>
              <a target='_blank' href="https://x.com/"><FaTwitter /></a>
               </div></div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#F9F8FE] py-20'>
        <div>
          <ul className='flex gap-4 items-center'>
            <li><a href="#">Description</a></li>
            <li><a href="#">Additional Info</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Video</a></li>
          </ul>
        </div>
        <div>
          <h2 className=' text-[#151875] font-bold text-[25px] py-3'>Varius tempor.</h2>
          <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

        </div>
        <div>
          <h2 className=' text-[#151875] font-bold text-[25px] py-3 '>More details</h2>
          <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
          <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
          <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
          <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        </div>
      </section>

      <section>
        <div>
          {}
        </div>
      </section>

    </Container>
  )
}

export default ProductDet