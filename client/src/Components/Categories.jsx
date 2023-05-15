import React from 'react'
import { Link } from 'react-router-dom';
import {categories} from '../data';

const Categories = () => {
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row  flex- gap-6 px-10  items-center justify-center'>
        {
            categories.map(category => (
                
                    <Link key={category.id} to={`products/${category.cat}`}>
                    <div  className='flex-1 w-full h-full flex  items-center justify-center relative'>
                    <img src={category.img} alt="" className='object-cover flex-1  md:h-[500px] h-[700px] ' />
                    <div className='absolute flex flex-col items-center justify-center gap-4'>
                    <h2 className='font-medium text-2xl text-white'>{category.title}</h2>
                    <button className='py-2 px-4 border text-sm text-white'>Shop Now</button>
                    </div>
                    </div>
                    </Link>
               
            ))
        }
    </div>
  )
}

export default Categories