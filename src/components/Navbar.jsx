import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed left-1/2 -translate-x-1/2 mt-5 flex justify-between items-center h-16 w-[40%] rounded-[999px] z-50 px-8 bg-black/10 backdrop-blur-md text-black'>
      <div className="">
        {/* <Logo></Logo> */}
      </div>

      <div className="">
        <ul className='flex'>
          <li className='px-2'>Home</li>
          <li className='px-2'>Edukasi</li>
          <li className='px-2'>Aksi</li>
          <li className='px-2'>Dampak</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar