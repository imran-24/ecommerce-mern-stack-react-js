import React from 'react'

const Footer = () => {
  return (
    <div className='min-h-[50vh] bg-white w-full  flex items-center justify-center px-10 py-10 md:py-0'>
        <div className='min-h-[20vh] w-full flex-col md:flex-row flex items-start justify-center gap-8'>
        <div className='space-y-4 flex-1 '>
            <h1 className='text-2xl font-semibold'>Giraffe</h1>
            <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet impedit quo qui error corrupti natus dolorum dolor velit illo.</p>
        </div>
        <div className='space-y-4 flex-1'>
            <h2 className='text-lg font-semibold'>Useful Links</h2>
            <div className='flex items-center justify-between gap-6'>
                <div className='font-light'>
                    <p>Home</p>
                    <p>Man Fashion</p>
                    <p>Accessoris</p>
                    <p>Order Tracing</p>
                    <p>Wishlist</p>
                </div>
                <div className='font-light'>
                    <p>Cart</p>
                    <p>Woman Fashion</p>
                    <p>My Account</p>
                    <p>Terms</p>
                    <p>Favourites</p>
                </div>
            </div>
        </div>
        <div className='space-y-4 flex-1 '>
            <h1 className='text-lg font-semibold'>Contact</h1>
            <div className='space-y-2'>
                <p className='font-light'>KA-69,Dhaka-1212,Gulshan </p>
                <p className='font-light'>+0123123 </p>
                <p className='font-light'>contactme@gmail.com </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer