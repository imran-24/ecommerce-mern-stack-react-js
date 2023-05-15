import React from 'react'
import {IoMdSend} from 'react-icons/io'
const Newsletters = () => {
  return (
    <div className='h-[50vh] w-full flex flex-col items-center justify-center gap-4 bg-red-100 '>
        <h1 className='text-6xl font-bold'>Newsletter</h1>
        <p className='text-2xl font-light'>Get timely updates from your favourite products</p>
        <div className='w-full  flex items-center justify-center'>
            <input type="text" className='border-gray-500 w-2/3 outline-none px-4 h-10 placeholder:font-light bg-white' placeholder='Your email' />
            <div className='w-16 lg:w-20 h-10 hover:opacity-70 cursor-pointer flex items-center justify-center bg-teal-600'>
            <IoMdSend fontSize={26} className='text-white' />
            </div>
        </div>
    </div>
  )
}

export default Newsletters