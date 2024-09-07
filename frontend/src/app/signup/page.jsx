import React from 'react'

const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-full max-w-md'>
            <div className='border-none shadow-lg rounded-lg'>
                <h1 className='text-3xl text-gray-800 font-semibold text-center'>Sign Up</h1>
                <form className='px-3'>
                    <label htmlFor="name" className='text-xl text-gray-600 block'>Name</label>
                    <input type="text" className='w-full border border-b-2 rounded-md px-3 py- outline-none mt-2'/>
                    <label htmlFor="email" className='text-xl text-gray-600 block'>Email</label>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp