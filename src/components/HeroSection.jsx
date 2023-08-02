import React from 'react'

const HeroSection = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
    <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>High <span className='text-blue-500'>Quality</span><span> Products</span></h1>
        </div>
        <img className='w-full max-h-[400px] object-cover' src="https://images.pexels.com/photos/2293822/pexels-photo-2293822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
    </div>
</div>
  )
}

export default HeroSection