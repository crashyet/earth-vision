import React from 'react'

// import BgVideo from '../../assets/videos/311788_medium.mp4'
import BgVideo from '../../../assets/videos/315587-1.gif'
import LiquidComponent from '../../../assets/images/liquid-asset.png'

const hero = () => {
  return (
    <section className='bg-black/20 h-screen flex justify-center'>
      {/* <video autoPlay loop muted className='w-full h-full object-cover absolute top-0 left-0 z-0'>
        <source src={BgVideo} type="video/mp4" />
      </video> */}

      <div className="flex flex-col w-full">

        <div className="bg-white w-full h-[65%] rounded-b-[4rem] flex justify-center items-end">
          <h1 className='text-black font-black text-[10rem] tracking-widest'>LOREMIPSUM</h1>
        </div>
      
        <div className="flex items-end h-full">
          <div className="relative flex w-full justify-between">
            <img src={LiquidComponent} alt="" className='absolute bottom-0 left-0 w-80 h-80 opacity-4 scale-x-[-1]' />
            <img src={LiquidComponent} alt="" className='absolute bottom-0 right-0 w-120 h-120 opacity-4' />
            <h1 className='max-w-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, id incidunt quibusdam quis recusandae maxime dignissimos modi molestias repellendus ipsa tempora totam veniam, quidem dolor debitis minima consequatur iure! Architecto?</h1>
          </div>
        </div>
      </div>

      <img src={BgVideo} alt="" className='w-7xl absolute z-0' />
      
    </section>
  )
}

export default hero