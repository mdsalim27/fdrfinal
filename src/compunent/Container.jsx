import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1320px] lg:px-6 px-2 mx-auto ${className}`}>  {children} </div>
  )
}

export default Container
