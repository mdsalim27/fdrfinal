import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

const ProductDet = () => {
   let usep = useParams()
   console.log(usep);
   
  return (
    <div>
      {
<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium quod, repellat harum soluta nam doloremque eum ratione? Voluptatum magnam sit, eius, qui aliquam facilis sint vel corrupti excepturi hic ex in expedita molestias saepe impedit nobis voluptates neque dolore voluptatibus illo obcaecati tempora magni. Quam possimus nobis velit odit accusantium placeat porro tempore. Necessitatibus ipsam, dolorem nemo repudiandae perferendis officiis sit rem facere, optio quam ad quisquam molestias eos temporibus blanditiis porro aperiam iste unde deserunt qui voluptatem. Iusto reprehenderit minus odio, temporibus ullam consequuntur voluptatibus dicta eos pariatur recusandae dolorem obcaecati eligendi in laudantium necessitatibus voluptate, velit explicabo.</h1>
      }
    </div>
  )
}

export default ProductDet
