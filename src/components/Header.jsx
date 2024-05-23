import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-700 body-font bg-header">
    <div className="container mx-auto flex  p-3 flex-row items-center justify-between">
     
        <p className="md:-ml-10 text-xl text-white font-outfit font-semibold">envato<span className='text-green-400 font-sora font-light'>market</span></p>
        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-1 px-4 border-b-4 border-green-700 hover:green-blue-500 rounded">
  Button
</button>
    </div>
  </header>
  )
}

export default Header