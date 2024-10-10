import React from 'react'

function Button({title, style, icon}) {
  return (
    <>
    <button className={`${style} flex gap-1 md:gap-3  hover:scale-110 duration-150 hover:bg-[#7993F9]`}><span>{icon}</span>{title}</button>
      
    </>
  )
}

export default Button
