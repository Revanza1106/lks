import React from 'react'
import {BsChevronDoubleRight} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {

const navigate = useNavigate()
function gotoabout(){
    navigate("/Tentang Kami")
}

  return (
    <div name='about' className='w-full my-32'>
    <div className='max-w-[1100px] mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold'>Tentang <span className='text-blue-500'>Kami</span></h2>
            <p className='text-3xl py-6 text-gray-500'> Wijaya Bersama, kami berkomitmen untuk menyediakan beragam produk berkualitas tinggi untuk memenuhi kebutuhan bangunan Anda. Sebagai salah satu penyedia terkemuka di industri ini, kami bangga telah melayani pelanggan dari berbagai latar belakang, termasuk pemilik rumah, kontraktor, arsitek, dan pengembang proyek.</p>
        </div>
        <div className='flex items-center justify-center mb-5'>
       <button onClick={gotoabout}>< BsChevronDoubleRight className='bg-gray-300 rounded-xl '  size={40}/></button> 
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center '>
            <div className='border py-8 rounded-xl shadow-xl mt-10' >
                <p className='text-6xl font-bold text-blue-500'>100%</p>
                <p className='text-gray-400 mt-2'>Terjamin</p>
            </div>
            <div  className='border py-8 rounded-xl shadow-xl mt-10' >
                <p className='text-6xl font-bold text-blue-500'>24/7</p>
                <p className='text-gray-400 mt-2'>Pengantaran</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl mt-10' >
                <p className='text-6xl font-bold text-blue-500'>100K</p>
                <p className='text-gray-400 mt-2'>Transaksi</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutUs