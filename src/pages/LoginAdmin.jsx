import React, { useState } from 'react'
import cat from '../assets/cat biru.jpeg'
import { Navigate, useNavigate } from 'react-router-dom'




const LoginAdmin =  () => {
   const navigate = useNavigate()
   function gotoadmin(){
       navigate("/admin")
   }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className=' w-full h-full object-cover' src={cat}  alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form     className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'><span className='font-semibold text-blue-500'>Wijaya</span> Bersama</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' type="email" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" />
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white' onClick={gotoadmin}>Login</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Create an account</p>
                </div>
            </form>
        </div>
    </div>
  )
}
export default LoginAdmin