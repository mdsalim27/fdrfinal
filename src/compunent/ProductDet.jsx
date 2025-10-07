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
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from './Container'
import { CiHeart, CiStar } from 'react-icons/ci'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowRight, FaFacebook, FaGithub, FaInstagramSquare, FaRegStar, FaSearchPlus, FaStar, FaStarHalf, FaTwitter } from 'react-icons/fa'
import { ApiData } from './ContextApi'
import Slider from 'react-slick'
import { FaCartShopping, FaRegHeart } from 'react-icons/fa6'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { addToCart } from './Slice/ProductSlice'


function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='lg:w-[50px] w-[30px] lg:h-[50px] h-[30px] border-none rounded-full flex justify-center 
        items-center bg-[#a3d455] absolute top-[50%] translate-y-[-50%] right-0 z-[1]' onClick={onClick}
    >
      <FaArrowAltCircleRight className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer' />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='lg:w-[50px] w-[50px] lg:h-[50px] h-[50px]  border-none rounded-full flex  justify-center
         items-center bg-[#a3d455] absolute top-[50%] translate-y-[-50%] left-0 z-[1]' onClick={onClick}>
      <FaArrowAltCircleLeft className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer ' />
    </div>
  );
}


const ProductDet = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  // singalepage singaleproduct show

  let info = useContext(ApiData)
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

  // reviw star

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    return (
      singleProduct.rating > index + 1 ? <FaStar /> : singleProduct.rating > number ? <FaStarHalf /> : <FaRegStar />
    )
  })
  // navigate click a time nibe kicho text asbe 
  let dispach = useDispatch()
  let navigate = useNavigate()
  let handleCart = (item) => {
    dispach(addToCart({...item, qun: 1}))
    toast("Wow so easy!");
    setTimeout(() => {
      navigate("/cart")
    }, 2000) 
  }

  // discounte
  let discount = (singleProduct.price * singleProduct.discountPercentage) / 100
  let mainPrice = singleProduct.price - discount
  return (

    <section className='bg-[#F9F8FE] py-20'>
      <Container>
        <section>
          <div className=' grid grid-cols-2 py-5 px-30 my-20 shadow-2xl'>
            <div className=' relative'>
              <div><img src={singleProduct.thumbnail} alt="" /></div>
              {/* <Link to={"/cart"}> */}
              <div className=' absolute left-0 bottom-0 '>
                <button className='bg-green-200 text-[blue] px-8 mx-1 py-3 border-2 border-green-900 hover:font-extrabold hover:bg-black hover:text-[#FFFF] rounded-2xl'>Buy</button>
                <button onClick={()=>handleCart(singleProduct)} className='bg-green-200 text-[blue] px-8 mx-1 py-3 border-2 border-green-900 hover:font-extrabold hover:bg-black hover:text-[#FFFF] rounded-2xl'>Add To Cart</button>
                <ToastContainer />
              </div>
              {/* </Link> */}
            </div>
            <div>
              <div className=''>
                <h2 className='py-5 font-bold text-[30px]'>Playwood arm chair</h2>
                <div className='flex py-5 text-[35px] '>
                  {
                    clientRating
                  }
                </div>
                <div className='flex gap-10 py-2 text-[#151875] font-medium text-[20px]'>
                  <p>{"$" + mainPrice.toFixed(2)}</p>
                  <p className='line-through'>{"$" + singleProduct.price}</p>
                </div>
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
              <li className=' pr-7 hover:underline hover:text-[blue] '><a href="#" className='text-[25px] font-bold'>Description</a></li>
              <li className=' pr-7 hover:underline hover:text-[blue] '><a href="#" className='text-[25px] font-bold'>Additional Info</a></li>
              <li className=' pr-7 hover:underline hover:text-[blue] '><a href="#" className='text-[25px] font-bold'>Reviews</a></li>
              <li className=' pr-7 hover:underline hover:text-[blue] '><a href="#" className='text-[25px] font-bold'>Video</a></li>
            </ul>
          </div>
          <div>
            <h2 className=' text-[#151875] font-bold text-[25px] py-3'>Varius tempor.</h2>
            <p className='text-[18px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

          </div>
          <div className=' items-center'>
            <h2 className=' text-[#151875] font-bold text-[25px] py-3 '>More details</h2>
            <div className=' items-center'>
              <p className='py-2 cursor-pointer text-[18px]'> <span><FaArrowRight className=' inline-block mr-3 hover:text-[blue]' /></span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <p className='py-2 cursor-pointer text-[18px]'> <span><FaArrowRight className=' inline-block mr-3 hover:text-[blue]' /></span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <p className='py-2 cursor-pointer text-[18px]'> <span><FaArrowRight className=' inline-block mr-3 hover:text-[blue]' /></span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <p className='py-2 cursor-pointer text-[18px]'> <span><FaArrowRight className=' inline-block mr-3 hover:text-[blue]' /></span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
          </div>
        </section>


        <section className=''>
          <Container >
            <div className='mt-[25px]'><h2 className=' text-[25px] font-bold'>Related Products</h2></div>
            <div className='' >
              <Slider {...settings}>
                {
                  info.map((item) => (
                    <div className=' relative  '>
                      <Link to={`/shop/:${item.id}`}>
                        <div className='shadow-2xl mx-1'>
                          <div className='relative'>
                            <div className=' bg-[#F6F7FB] '>
                              {/* <img className='mx-auto  ' src={item.image_path} alt="" /> */}
                              <img className='mx-auto  ' src={item.thumbnail} alt="" />
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
                                <img className='mx-auto  ' src={item.thumbnail} alt="" />
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
                  ))
                }
              </Slider>
            </div>
          </Container>
        </section>

      </Container>
    </section>
  )
}

export default ProductDet