import React, { useState } from 'react'

const Test = () => {
  let [inputtext, setInputtext] = useState("")
  let [inputpassword, setInputpassword] = useState("")
  return (
    <>
      <div className='mt-12 w-[300px] h-[300px] border border-amber-500 mx-auto flex flex-wrap justify-center '>

        <input type="text" className='border h-[40px] mt-10 border-amber-500 '
          value={inputtext}
          onChange={(e) => setInputtext(e.target.value)}
        />
        <input type="password" className='border h-[40px] border-amber-500 '
          value={inputpassword}
          onChange={(e) => setInputpassword(e.target.value)}
        />
      </div>
      <div className=' w-[200px] h-[50px] border border-amber-500 mx-auto ' >
        <h1>username:{inputtext}</h1>
        <h1>password:{inputpassword}</h1>
      </div>
    </>
  )
}

export default Test
