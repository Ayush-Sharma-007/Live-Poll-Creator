import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='flex items-center w-full h-[100vh] bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <div className='pl-5'>
        <h1 className='text-6xl font-bold text-white max-w-[50vw]'>Unlock the Power of Instant Feedback with Live Polls</h1>
        <p className='mt-5 font-bold text-white max-w-lg text-2xl'>Effortlessly create and manage live polls to engage your audience and gather real-time insights.</p>
        <button className='mt-2 border bg-emerald-600 rounded-full px-3 py-2 text-white font-bold'>Start Now</button>
        <button className='mt-2 ml-3 border bg-emerald-600 rounded-full px-3 py-2 text-white font-bold'><a>Create Poll</a></button>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Home