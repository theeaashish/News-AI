import React from 'react'

const NavBar = () => {
  return (
    <nav className='border-b border-black flex min-h-[120px] items-center justify-between'>
      <h1 className='text-5xl kalnia font-semibold uppercase tracking-[0.3em]'>Media</h1>

      <div className='flex items-center w-[356px] h-[66px]'>
        <input className='w-full h-full rounded-full border-2 border-black px-8 outline-none placeholder-zinc-700 font-semibold' type="search" placeholder='Search...' name="search"/>
      </div>
    </nav>
  )
}

export default NavBar
