import React from 'react'
import Container from './Container'
import BaneAdd from '../assets/Banadd.png'
const BanAdd = () => {
  return (
    <section className='bg-[#F1F0FF] my-14 '>
      <Container>

        <div className=''>
            <img className='mx-auto cursor-pointer ' src={BaneAdd} alt="" />
        </div>
      </Container>
    </section>
   
  )
}

export default BanAdd
