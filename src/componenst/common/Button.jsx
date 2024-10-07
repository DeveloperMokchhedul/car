import React from 'react'

function Button({title, style, icon}) {
  return (
    <>
    <button className={`${style} flex gap-3`}><span>{icon}</span>{title}</button>
      
    </>
  )
}

export default Button
