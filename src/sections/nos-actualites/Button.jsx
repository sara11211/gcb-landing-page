import React from 'react'

const Button = ({ text = "Lire la suite"}) => {
  return (
    <button className='bg-primary-orange font-sen font-bold text-second-black px-12 py-4 cursor-pointer'>
        {text} &gt;
    </button>
  )
}

export default Button