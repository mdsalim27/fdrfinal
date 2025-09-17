import React, { useContext, useEffect, useState } from 'react'
import { FaList, FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import Container from './Container'
import { MdOutlinePlaylistAddCheck } from 'react-icons/md'
import Pagination from './Pagination'
import Products from './Products'
import { ApiData } from './ContextApi'

const Shop = () => {

  let { info, loading, error } = useContext(ApiData);
  if (loading) return <p className='font-extralight text-[80px] text-[blue] text-center '>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  // api data 
  // let info = useContext(ApiData)
  // perpage currentpage pagenumber
  let [perpage, setParpage] = useState(12)
  let [currentpage, setCurrentpage] = useState(1)
  let lastpage = perpage * currentpage
  let firstpage = lastpage - perpage
  let Allpage = info.slice(firstpage, lastpage)
  // 
  let handeleListitem = () => {
    console.log("ami");
  }
  let handeleListitemright = () => {
    console.log("ami right");
  }
  // page number calculation
  let pageNumber = []
  for (let i = 1; i < Math.ceil(info.length / perpage); i++) {
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
  let handelePageChange = (e) =>{
    setParpage(e.target.value); 
  }

// chatagori show
let [catagory ,setCatagory] =useState([])
 
useEffect (()=>{
setCatagory([...new Set (info.map((item)=>item.category)) ])
},[info])
console.log(catagory);
let [filtershow , setFiltershow] = useState([])
let handeleCatagory = (e)=>{
let catproduct = e.target.value
let catproduc = info.filter((item)=>item.category === catproduct)
setFiltershow(catproduc)
}
    return (
      <Container>
        <div className=' grid grid-cols-2 items-center py-10'>
          <div>
            <h2 className=' text-[#151875] text-[30px] font-bold'>Ecommerce Acceories & Fashion item </h2>
            <p className='text-[#8A8FB9] font-medium text-[16px]'>About 9,620 results (0.62 seconds)</p>
            {/* <p> Per Page:Sort By:Best MatchView:About 9,620 results (0.62 seconds)</p> */}
          </div>
          <div className='grid grid-cols-3 items-center'>
            <div>
              <div>
                <label className='px-2' pr-2 htmlFor="">Per Page:</label>
                <select onChange={handelePageChange} name=" " id="" className='py-1 px-4 border-2 border-[#262626]'>
                  <option value="12"> 12</option>
                  <option value="20">20</option>
                  <option value="36">36</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <label className='px-2' pr-2 htmlFor="">Sort By:</label>
                <select onChange={handeleCatagory} name=" " id="" className='py-1 px-4 border-2 border-[#262626]'>
                  {catagory.map((item)=>(
                  <option value={item}>{item}</option>
                  ))}               
                </select>
              </div>
            </div>
            <div>
              <div className=' grid grid-cols-3 items-center'>
                <div>  <p className=' text-end pr-2'>View:</p></div>
                <div className=' flex items-center gap-3 '>
                  <MdOutlinePlaylistAddCheck onClick={handeleListitem} className='bg-amber-600 text-[25px] py-1 px-1' />
                  <FaList onClick={handeleListitemright} className='bg-amber-600 text-[25px] py-1 px-1 mr-1' />
                </div>
                <div className=' border  border-b-gray-900'>
                  <input className='py-2 w-full' type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Products Allpage={Allpage} filtershow={filtershow} />

        <Pagination pageNumber={pageNumber} paginate={paginate} Next={Next} Prev={Prev}
          currentpage={currentpage}  />
      </Container>
    )
  }
  export default Shop
