import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

const ProductDet = () => {
  let params = useParams()
  return (
      <h1>{params.id}</h1>
      // <div><img src={params.id} alt="" /></div>
  )
}

export default ProductDet
