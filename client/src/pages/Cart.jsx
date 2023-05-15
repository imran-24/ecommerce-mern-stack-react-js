import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletters from '../Components/Newsletters'
import Products from '../Components/Products'
import { selectCart } from '../features/cartSlice'
import {loadStripe} from '@stripe/stripe-js';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import Pay from '../Components/Pay'


const Cart = () => {
  const cartList = useSelector(selectCart);

  const stripePromise = loadStripe('pk_test_51MJazYJyMW3BVIntUVdE9yzddpw95nyjdYJghscid7N0lx0OfteUGzjbvmtiLHo05GmJ2q0LJ6EjXM0jkryrvh2o00mhLYFQUc')

   return (
    <div className='min-h-screen max:w-screen bg-slate-100 relative'>
        <Announcement />
        <Navbar />

        <div className='h-full w-full lg:p-10 p-4 space-y-6'>
            <p className='uppercase font-light text-2xl'>Your Bag</p>
            <div className='w-full flex items-center justify-between gap-2'>
                <button className='uppercase  hover:shadow-md hover:text-white  hover:transition-all hover:ease-in-out hover:duration-200 hover:bg-teal-600 w-[10rem]  p-2 border border-gray-400 font-light text-xs'>continue shopping</button>
                <div className='flex items-center gap-4'>
                    <p className=' font-light'>Shopping Bag(2)</p>
                    <p className=' font-light'>Your Wishlist(0)</p>
                </div>
                <button className='uppercase  hover:shadow-md text-white  hover:transition-all hover:ease-in-out hover:duration-200 hover:bg-opacity-80 w-[10rem]  p-2 border bg-black border-gray-400 font-light text-xs'>checkout now</button>
            </div>
            <div className='w-full  flex flex-col lg:flex-row  justify-between '>
            <div className='lg:w-2/3 flex flex-col lg:px-4'>
                {
                    cartList?.products?.map(product => (
                        <div className=' w-full flex items-center justify-between gap-4 border-b py-2'>
                            <img src={product.img} className='h-44'  />
                            <div className='flex-1 flex items-center justify-between gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <p className='uppercase font-light'><span className='font-semibold'>Product:  </span>{product.title}</p>
                                    <p className='font-light'><span className='font-semibold'>ID:  </span>{product._id}</p>
                                    <div style={{backgroundColor: `${product.color}`}} className='w-6 h-6 rounded-full'></div>
                                    <p className='uppercase font-light'><span className='font-semibold '>Size: </span>{product.size}</p>
                                </div>
                                <div className='flex flex-col items-center gap-2'>
                                    <div className='flex items-center gap-2'>
                                    
                                        <div className='p-2 flex items-center justify-center rounded-full'>
                                            <p className='text-4xl font-light'>-</p>
                                        </div>
                                        <div className='w-8 h-8 flex items-center justify-center '>
                                            <p className='text-2xl h-full font-light'>0</p>
                                        </div>
                                        <div className='p-2 flex items-center justify-center rounded-full'>
                                            <p className='text-3xl font-light'>+</p>
                                        </div>
                                    </div>
                                    <p className='font-light text-2xl'>${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                    
                }
                
                </div>
                <div className='flex-1 bg-red-50 h-1/4 space-y-3 border rounded-md p-6 shadow-md'>
                    <p className='text-2xl text-center uppercase font-light'>Order summary</p>
                    {
                        cartList?.products?.map(product =>(
                            <div className='flex item-center justify-between gap-2'>
                            <p className=' font-light capitalize'>{product.title}</p>
                            <p className=' font-light'>${product.quantity  * product.price}</p>
                            </div>
                        ))
                    }
                    <div className='flex item-center justify-between gap-2'>
                            <p className=' font-light'>Estimated Shopping</p>
                            <p className=' font-light'>$5.90</p>
                    </div>
                    <div className='flex item-center justify-between gap-2'>
                            <p className=' font-light'>Shopping Discount</p>
                            <p className=' font-light'>$-5.90</p>
                    </div>
                    <div className='flex item-center justify-between gap-2'>
                            <p className='text-xl font-semibold'>Total</p>
                            <p className='text-xl font-semibold'>${cartList.total}</p>
                    </div>
                    <Pay cartList={cartList} />
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Cart