import React from 'react'

const Pagination = ({pageNumber , paginate ,Next ,Prev ,currentpage}) => {
 
  console.log(currentpage);
  
  return (
    <div className='text-end mr-15 mt-4'>
      <ul className="inline-flex -space-x-px text-base h-10 ">
        <li>
          <a onClick={Prev} className="flex cursor-pointer items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
       {
        pageNumber.map((item , i)=>(
        <li onClick={()=>paginate(item)}>
          <a className={`${currentpage == i +1 ? `flex items-center cursor-pointer justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300  dark:bg-[#ded8d8] dark:border-gray-700 dark:text-[black]` : `flex items-center cursor-pointer justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`} `}>{item }</a>
        </li>
        ))
       }
        <li onClick={Next}>
          <a className="flex cursor-pointer items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
