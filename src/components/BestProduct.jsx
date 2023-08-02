import React from 'react'

const BestProduct = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
    {/* cards */}
    <div className="rounded-xl relative ">
      {/* overly */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className='font-bold text-xl justify-center items-center flex text-white lg:mt-5 '>Terlaris</p>
        <p className="font-bold text-2xl px-2 pt-4 text-blue-500 lg:ml-5 justify-center items-center flex ">Semen</p>
        <p className="px-2 justify-center items-center flex">Kokoh Tak Tertandingi</p>
        <div className='ml-3'>
        <button className="border-white bg-white text-black hover:bg-blue-500 hover:border-blue-500  mx-2 absolute bottom-4 border-4 rounded-xl w-[100px] h-[40px]">Pesan</button>
        </div>
  
      </div>
      <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/6473974/pexels-photo-6473974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
    </div>
       {/* cards */}
       <div className="rounded-xl relative ">
      {/* overly */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white  ">
      <p className='font-bold text-xl justify-center items-center flex text-white lg:mt-5'>Terlaris</p>
        <p className="font-bold text-2xl px-2 pt-4  text-blue-500 justify-center items-center flex ">Bata Merah</p>
        <p className="px-2 justify-center items-center flex">Kuat Tak Terkalahkan </p>
        <div className='ml-3'>
        <button className=" border-white bg-white text-black hover:bg-blue-500 hover:border-blue-500  mx-2 absolute bottom-4 border-4 rounded-xl w-[100px] h-[40px]">Pesan</button>
        </div>
        
      </div>
      <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
    </div>
       {/* cards */}
       <div className="rounded-xl relative ">
      {/* overly */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
      <p className='font-bold text-xl justify-center items-center flex text-white lg:mt-5'>Terlaris</p>
        <p className="font-bold text-2xl px-2 pt-4  text-blue-500 justify-center items-center flex ">Paku Jaya</p>
        <p className="px-2 justify-center items-center flex">Kuat Mengait Beban</p>
        <div className='ml-3'>
        <button className="border-white bg-white text-black hover:bg-blue-500 hover:border-blue-500  mx-2 absolute bottom-4 border-4 rounded-xl w-[100px] h-[40px]">Pesan</button>
        </div>
      </div>
      <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/5691699/pexels-photo-5691699.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
    </div>
  </div>
  );
};


export default BestProduct