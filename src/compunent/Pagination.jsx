// import React from 'react'
// const Pagination = ({ pageNumber, paginate, Next, Prev, currentpage }) => {
//   return (
//     <div className='text-end mr-15 mt-4'>
//       <ul className="inline-flex -space-x-px text-base h-10 ">
//         {pageNumber.length > 0 &&
//           <li>
//             <a onClick={Prev} className="flex cursor-pointer items-center justify-center lg:px-4 px-1 lg:h-10 ms-0 
//           leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-[#c2abab]
//            hover:text-[#262626] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
//           </li>
//         }
//         {
//           pageNumber.map((item, i) => (
//             <li onClick={() => paginate(item)}>
//               <a className={`${currentpage == i + 1 ? `flex items-center cursor-pointer justify-center lg:px-4 px-2  lg:h-10  
//             leading-tight text-[black] bg-white border border-gray-300  dark:bg-[#ded8d8] dark:border-gray-700
//              dark:text-[black]` : `flex items-center cursor-pointer justify-center lg:px-4 px-1 lg:h-10 leading-tight text-[#FFFF]
//               bg-[black] border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`} `}>{item}</a>
//             </li>
//           ))
//         }
//         {pageNumber.length > 0 && <li onClick={Next}>
//           <a className="flex cursor-pointer items-center justify-center lg:px-4 lg:h-10 leading-tight text-gray-500 bg-white border
//            border-gray-300 rounded-e-lg hover:bg-[#c2abab] hover:text-[#262626] dark:bg-gray-800 dark:border-gray-700
//             dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
//         </li>}
//       </ul>
//     </div>
//   )
// }
// export default Pagination

import React from 'react'

const Pagination = ({ pageNumber, paginate, Next, Prev, currentpage }) => {
  return (
    <div className='text-end mr-15 mt-4'>
      <ul className='inline-flex -space-x-px text-base h-10'>
        {pageNumber.length > 0 && (
          <li key="prev">
            <a
              onClick={Prev}
              className='flex cursor-pointer items-center justify-center lg:px-4 px-1 lg:h-10 ms-0 
                leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg 
                hover:bg-[#c2abab] hover:text-[#262626]'
            >
              Previous
            </a>
          </li>
        )}

        {pageNumber.map((item, i) => (
          <li key={i} onClick={() => paginate(item)}>   {/* ✅ Added key */}
            <a
              className={`${
                currentpage === i + 1
                  ? 'flex items-center cursor-pointer justify-center lg:px-4 px-2 lg:h-10 leading-tight text-black bg-white border border-gray-300'
                  : 'flex items-center cursor-pointer justify-center lg:px-4 px-1 lg:h-10 leading-tight text-white bg-black border border-gray-300'
              }`}
            >
              {item}
            </a>
          </li>
        ))}

        {pageNumber.length > 0 && (
          <li key="next" onClick={Next}>
            <a
              className='flex cursor-pointer items-center justify-center lg:px-4 lg:h-10 leading-tight text-gray-500 bg-white border
                border-gray-300 rounded-e-lg hover:bg-[#c2abab] hover:text-[#262626]'
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Pagination

