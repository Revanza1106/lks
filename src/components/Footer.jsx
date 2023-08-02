import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Beranda</h6>
                <ul>
                <li className='py-1'>Tentang Kami</li>
                    <li className='py-1'>Produk Kami</li>
                    <li className='py-1'>Artikel</li>
                    <li className='py-1'>Kontak</li>
                    <li className='py-1'>Login</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Tentang Kami</h6>
                <ul><li className='py-1'>Mitra</li></ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Produk</h6>
                <ul>
                    <li className='py-1'>Cat</li>
                    <li className='py-1'>Semen</li>
                    <li className='py-1'>Kuas</li>
                    <li className='py-1'>Baja</li>
                    <li className='py-1'>Holo</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Kontak</h6>
                <ul>
                    <li className='py-1'>Instagram</li>
                    <li className='py-1'>Facebook</li>
                    <li className='py-1'>Twitter</li>
                    <li className='py-1'>Threads</li>
                    <li className='py-1' href="">Whatsapp</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Berlangganan untuk menjadi yang utama</p>
                <p className='py-4'>Jalan Sawangan 3 Block C No 3G,Pewaringan,Kota Indah</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4 bg-blue-500 rounded-lg '>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Wijaya Bersama. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer