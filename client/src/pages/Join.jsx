import React from 'react'

const Join = () => {
  return (
    <div className='min-h-screen max:w-screen flex items-center justify-center bg-slate-100 relative p-4 sm:p-0'>
        <div className='h-1/2 sm:w-[44rem] bg-white p-4 space-y-4'>
            <p className='font-light text-2xl uppercase'>Create an account</p>
            <div className='w-full  flex flex-wrap items-center justify-between gap-3'>
                <input type="text" className='border font-light border-gray-300 outline-none p-3 min-w-[20rem]  flex-1 placeholder:font-light' placeholder='first name' />
                <input type="text" className='border font-light border-gray-300 outline-none p-3 min-w-[20rem]  flex-1 placeholder:font-light' placeholder='last name' />
                <input type="text" className='border font-light border-gray-300 outline-none p-3 min-w-[20rem]  flex-1 placeholder:font-light' placeholder='username' />
                <input type="text" className='border font-light border-gray-300 outline-none p-3 min-w-[20rem] flex-1 placeholder:font-light' placeholder='email' />
                <input type="text" className='border font-light border-gray-300 outline-none p-3 min-w-[20rem] flex-1 placeholder:font-light' placeholder='password' />
                <input type="text" className='border font-light border-gray-300 outline-none p-3 min-w-[20rem]  flex-1 placeholder:font-light' placeholder='confirm password' />
            </div>
            <p className='font-light'>By creating an account, I consent to the proccessing of my personal data in accordance with the provacy policy</p>
            <button className='w-44 font-light hover:bg-opacity-80 p-3 uppercase bg-teal-600 text-sm text-white'>create </button>
        </div>
        
    </div>
  )
}

export default Join