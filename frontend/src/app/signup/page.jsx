import React from 'react'
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";




const Login = () => {
  return (
    <div style={{backgroundImage: "url(https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=600)"}} className='flex flex-col h-screen items-center justify-center w-full flex-1 px-20 text-center bg-gray-100'>

      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>

      <div className='w-2/5 bg-gray-600 py-36 px-12 text-white rounded-tl-2xl rounded-bl-2xl'>
      <h2 className='text-3xl font-bold mb-2'>Hello, Friend!</h2>
      <div className='border-2 w-10 border-white rounded-lg inline-block mb-2'></div>
      <p className='text-white'>If you already have an account then login here.</p>
      <a href="/login"><button className='border-2 border-white rounded-full px-12 py-2 inline-block mt-10 font-semibold hover:bg-white hover:text-gray-500'>Login</button></a>
      </div>

      <div className='w-3/5 p-5 '>
      <div className='text-right font-bold'>
        <span className='text-gray-500'>Gray</span>Poll
      </div>
      <div className='py-10'>
        <h2 className='text-3xl font-bold text-gray-500 mb-2'>Sign Up</h2>
        <div className='border-2 w-10 border-gray-500 rounded-lg inline-block mb-2'></div>
        <div className='flex justify-center my-2'>
          <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1 text-sm'><ImFacebook /></a>
          <a href="#"></a>
          <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1 text-sm'><FaLinkedinIn /></a>
          <a href="#"></a>
          <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1 text-sm'><FaGoogle /></a>
          <a href="#"></a>
        </div>
        <p className='text-gray-400 my-3'>or create a new account</p>
        <div className='flex flex-col items-center'>
          <div className='bg-gray-100 w-64 p-2 flex items-center space-x-2 mb-3'>
            <IoPersonSharp className='text-gray-400 text-sm'/>
            <input type="text" placeholder='Name' className='bg-gray-100 outline-none flex-1 text-sm'/>
          </div>
          <div className='bg-gray-100 w-64 p-2 flex items-center space-x-2'>
            <FaRegEnvelope className='text-gray-400'/>
            <input type="Email" placeholder='Email' className='bg-gray-100 outline-none flex-1 text-sm'/>
          </div>
          <div className='bg-gray-100 w-64 p-2 flex items-center space-x-2 mt-3'>
            <MdLockOutline className='text-gray-400'/>
            <input type="password" placeholder='Password' className='bg-gray-100 outline-none flex-1 text-sm'/>
          </div>
        </div>
        <a href="/"><button className='border-2 border-gray-600 text-gray-600 rounded-full px-12 py-2 inline-block mt-10 font-semibold hover:bg-gray-600 hover:text-white'>Sign Up</button></a>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Login