import React, { useContext } from 'react'
import { ApiData } from './ContextApi'
import { DiMagento } from 'react-icons/di'

const Shop = () => {
  let info = useContext(ApiData)
  return (
    <div>
      {
        info.map((item) => (
          <div><img src={item.image_path} alt="" /></div>
        ))
      }
    </div>
  )
}

export default Shop
