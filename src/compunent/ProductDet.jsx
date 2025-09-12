import React, { useContext } from 'react'
import Container from './Container'
import { ApiData } from './ContextApi'

const ProductDet = () => {
    let data = useContext(ApiData)
  return (
<Container>
    <div>
        {
            data.map((item)=>(
                <div> <img src={item.image_path} alt="" /></div>
            ))
        }
    </div>
</Container>
  )
}

export default ProductDet
