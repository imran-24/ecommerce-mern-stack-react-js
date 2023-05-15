import React, { useState } from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletters from '../Components/Newsletters'
import Products from '../Components/Products'
import {RxMixerHorizontal} from 'react-icons/rx'
import { useParams } from 'react-router-dom'
const ProductList = () => {
    const param = useParams();
    const [filter, setFilter] = useState();
    const [sorting, setSorting] = useState({});
    
    const onchange = (e) =>{
        setFilter((prevState) => ({
            ...prevState,[e.target.name]: e.target.value
        }))
        
    }
  const colors = ['white', 'black', 'red', 'blue', 'yellow', 'green', 'gray']
  const sizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl']
  const sort = ['newest', 'lowest', 'heighest']
  
  return (
    <div className='min-h-screen max:w-screen bg-slate-100 relative'>
        <Announcement />
        <Navbar />
        <div className='flex flex-col   p-4 space-y-2 '>
            <div className='flex w-full   justify-between space-y-2 '>
                <h2 className='font-bold text-4xl'>{param?.category
                }</h2> 
            </div>
            <div className='flex  justify-between  gap-3 flex-col sm:flex-row '>
                <div className='flex items-center gap-4 '>
                    <p className='text-sm'>Filtered Products</p>
                    <div className='flex items-center gap-3'>
                        <select
                            name='color'
                            onChange={onchange}
                            className="outline-none w-24 lowercase border border-gray-400 font-light  bg-slate-100 p-2 rounded-sm cursor-pointer"
                            >
                            <option value="others" className="bg-slate-100 text-xs">color</option>
                            {colors.map((item) => (
                                <option key={item}  className="text-xs" value={item}>
                                {item}
                                </option>
                            ))}
                            </select>
                    </div>
                    <div className='flex items-center  gap-3'>
                        
                        <select
                            name='size'
                            onChange={onchange}
                            className="outline-none w-24 lowercase border border-gray-400 font-light  bg-slate-100 p-2 rounded-sm cursor-pointer"
                            >
                            <option value="others" className="bg-slate-100 text-xs">size</option>
                            {sizes.map((item) => (
                                <option key={item}  className="text-xs" value={item}>
                                {item}
                                </option>
                            ))}
                            </select>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-sm'>Sort</p>
                    <div className='flex items-center gap-3'>
                        
                        <select
                            name='sort'
                            onChange={(e)=> setSorting({sort: e.target.value})}
                            className="outline-none w-24 lowercase border border-gray-400 font-light bg-slate-100 p-2 rounded-sm cursor-pointer"
                            >
                            <option value="others" className="bg-slate-100 text-xs">sort</option>
                            {sort.map((item) => (
                                <option key={item}  className="text-xs" >
                                {item}
                                </option>
                            ))}
                            </select>
                    </div>
                </div>
            </div>
        </div>
        <Products param={param} filter={filter} sorting={sorting} />
        <Newsletters />
        <Footer />
    </div>
  )
}

export default ProductList