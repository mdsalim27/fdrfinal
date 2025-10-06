import React, { useContext, useEffect, useState } from 'react'
import { FaList, FaRegHeart, FaSearchPlus, FaThList } from 'react-icons/fa'
import Container from './Container'
import { MdOutlinePlaylistAddCheck } from 'react-icons/md'
import Pagination from './Pagination'
import Products from './Products'
import { ApiData } from './ContextApi'
import { Link } from 'react-router-dom'
import SingelProduct from './SingelProduct'
import FPage from './FPage'

const Shop = () => {

  // let { info, loading } = useContext(ApiData);
  // if (loading) return <p className='font-extralight text-[80px] text-[blue] text-center '>Loading...</p>;



  // api data 
  let info = useContext(ApiData)
  // perpage currentpage pagenumber
  let [perpage, setParpage] = useState(9)
  let [currentpage, setCurrentpage] = useState(1)
  let lastpage = perpage * currentpage
  let firstpage = lastpage - perpage
  let Allpage = info.slice(firstpage, lastpage)
  // 
  let [filtershow, setFiltershow] = useState([])
  let handeleCatagory = (e) => {
    let catproduct = e.target.value
    let catproduc = info.filter((item) => item.category === catproduct)
    setFiltershow(catproduc)
  }

  // page number calculation
  let pageNumber = []
  // for (let i = 1; i < Math.ceil(info.length / perpage); i++) {
  //   pageNumber.push(i)
  // }
  for (let i = 1; i < Math.ceil(filtershow.length > 0 ? filtershow : info.length / perpage); i++) {
    pageNumber.push(i)
  }
  // pagination click alada alada page asbe 1,2,3,.. indexing page asbe pagiantion theke pops kore shop a kaj 
  let paginate = (index) => {
    setCurrentpage(index);
  }
  // next a click korle 1 page kore change hobe 
  let Next = () => {
    if (currentpage < pageNumber.length) {
      setCurrentpage((start) => start + 1)
    }
  }
  // Prev a click korle 1 page kore change hobe 
  let Prev = () => {
    if (currentpage > 1) {
      setCurrentpage((start) => start - 1)
    }
  }

  // koto golo product show hobe 
  let handelePageChange = (e) => {
    setParpage(e.target.value);
  }

  // chatagori show
  let [catagory, setCatagory] = useState([])

  useEffect(() => {
    setCatagory([...new Set(info.map((item) => item.category))])
  }, [info])



  let [listitem, setListitem] = useState("")
  let handeleListitem = () => {
    setListitem("Active")
  }

  let [allproducticon, setAllproducticon] = useState([])
  let handeleAllProduct = () => {
    setAllproducticon(!allproducticon)
  }

  // catagory theke Allpage 
  let handeleAllproducts = () => {
    setFiltershow("")
  }

  // Price Range
  let [low, setLow] = useState({})
  let [high, setHigh] = useState({})
  let handlePrice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    let PriceShow = info.filter((item) => item.price > value.low && item.price < value.high)
    setFiltershow(PriceShow);
  }

  return (
    <Container>


      <div className='flex justify-between items-center py-10'>
        <div>
          <h2 className=' text-[#151875] text-[23px] font-bold '>Ecommerce Acceories & Fashion item </h2>
          <p className='text-[#8A8FB9] font-medium text-[16px]'>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className=' col-span-2'>
          <div className='flex items-center'>
            {/* Product Selector  */}
            <div className=''>
              <div>
                <label className='px-2 font-bold' pr-2 htmlFor="">Per Page:</label>
                <select onChange={handelePageChange} name=" " id="" className='py-1 px-4 border-2 border-[#262626]'>

                  <option value="9"> 9</option>
                  <option value="12"> 12</option>
                  <option value="20">20</option>
                  <option value="36">36</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                  <option value="70">70</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
            {/* Category selector */}
            <div>
              <div className='flex justify-between'>
                <label className='px-2 font-bold' pr-2 htmlFor="">Sort By:</label>
                <select onChange={handeleCatagory} name=" " id="" className='py-1  border-2 border-[#262626]'>
                  <option onClick={handeleAllproducts}>All Produsct</option>
                  {catagory.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* list unlist */}
            <div className=' flex items-center  '  >
              <div className=''>  <p className='ml-5 font-bold '>View:</p></div>
              <div onClick={handeleListitem} className={`${listitem == "Active" ? 'flex justify-end bg-amber-600 text-[25px] py-1 px-1 ml-3 w-[40px] h-[30px]' : ' flex justify-end text-[25px] py-1 px-1  ml-3 w-[40px] h-[30px]'}`}>
                <MdOutlinePlaylistAddCheck />
              </div>
              <div onClick={() => setListitem("")} className={`${listitem == "Active" ? 'flex justify-start  text-[25px] py-1 px-1   ml-3 w-[40px] h-[30px]' : 'flex justify-start bg-amber-600 text-[25px] py-1 px-1 ml-3 w-[40px] h-[30px]'}`}>
                <FaThList />
              </div>
            </div>

            {/* Price Range */}
            <div className="flex justify-between items-center">
              <label className="px-2 font-bold" htmlFor="price">
                Price:
              </label>
              <select
                id="price"
                className="py-1 border-2 border-[#262626] rounded-md"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "0-9") handlePrice({ low: 0, high: 9 });
                  else if (value === "10-19") handlePrice({ low: 10, high: 19 });
                  else if (value === "20-29") handlePrice({ low: 20, high: 29 });
                  else if (value === "30-49") handlePrice({ low: 30, high: 49 });
                  else if (value === "50-200") handlePrice({ low: 50, high: 200 });
                }}
              >
                <option value="">Price Range</option>[]
                <option value="0-9">$0 - $9</option>
                <option value="10-19">$10 - $19</option>
                <option value="20-29">$20 - $29</option>
                <option value="30-49">$30 - $49</option>
                <option value="50-200">$49 - $200</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* onClick={() => handlePrice({ low: 0, high: 9 })} */}

      <Products Allpage={Allpage} filtershow={filtershow} listitem={listitem} />
      <Pagination pageNumber={pageNumber} paginate={paginate} Next={Next} Prev={Prev}
        currentpage={currentpage} />
    </Container>
  )
}
export default Shop
