import React, { useContext, useState } from 'react'
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
  for(let i = 1; i <Math.ceil(info.length / perpage); i++){
    pageNumber.push(i)
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
              <select name=" " id="" className='py-1 px-4 border-2 border-[#262626]'>
                <option value="1"> 1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label className='px-2' pr-2 htmlFor="">Sort By:</label>
              <select name=" " id="" className='py-1 px-4 border-2 border-[#262626]'>
                <option value="1">Best Match</option>
                <option value="2">Best Match1</option>
                <option value="3">Best Match2</option>
                <option value="4">Best Match3</option>
                <option value="5">Best Match4</option>
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
      <Products Allpage={Allpage} />
      <Pagination pageNumber={pageNumber} />
    </Container>
  )
}
export default Shop
