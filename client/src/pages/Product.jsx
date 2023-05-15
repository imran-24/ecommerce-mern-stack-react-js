import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletters from '../Components/Newsletters'
import { addProduct } from '../features/cartSlice'
import {publicRequest} from '../requestMethods'


const Product = () => {
  let [quantity, setQuantity] = useState(0)
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [product, setProduct] = useState();
//   const [price, setPrice] = useState();
  const param = useParams();
  const dispatch = useDispatch();
  
  
 
  useEffect(()=>{
        const getProduct = async() =>{
            try{
                const res = await axios.get(`http://localhost:5000/api/products/find/${param?.id}`)
                setProduct(res.data)
            }
            catch(error){

            }
        }
        getProduct();
  },[param])

  const handleSubmit = () => {
 
    dispatch(addProduct({ ...product, quantity, color, size
    }))
  }
  return (
    <div className='min-h-screen max:w-screen bg-slate-100 relative'>
        <Announcement />
        <Navbar />
        
        <div className='h-full w-full flex-col lg:flex-row flex lg:items-center justify-between p-8 gap-8 '>
            <div className='flex-1'>
            <img src={product?.img} alt="" />
            </div>
            <div className='flex flex-col gap-4 flex-1 '>
                <p className='text-5xl font-light'>{product?.title}</p>
                <p className='text-lg font-light'>{product?.desc}</p>
                <p className='font-light text-4xl'>{`$ ${product?.price}`}</p>
            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-2'>
                    <p className=''>Color</p>
                    {
                        product?.color.map(color => (
                            <div key={color} onClick={()=> setColor(color)} style={{backgroundColor: `${color}`}} className='w-8 h-8 rounded-full hover:opacity-50 cursor-pointer'></div>
                        ))
                    }
                    
                </div>
                <div className='flex items-center gap-2'>
                    <p className=''>Size</p>
                    <div className='flex items-center  gap-3'>
                        
                        <select
                            name='size'
                            onChange={(e)=> setSize(e.target.value)}
                            className="outline-none w-24 lowercase border border-gray-400 font-light  bg-slate-100 p-2 rounded-sm cursor-pointer"
                            >
                            <option value="others" className="bg-slate-100 text-xs">size</option>
                            {product?.size.map((item) => (
                                <option key={item}  className="text-xs" value={item}>
                                {item}
                                </option>
                            ))}
                            </select>
                    </div>
                </div>
                
            </div>
            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-2'>
    
                    <div onClick={()=> quantity > 0 && setQuantity(quantity = quantity - 1) } className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 hover:rounded-full cursor-pointer'>
                        <p className='text-4xl font-light'>-</p>
                    </div>
                    <div className='w-9 h-9  flex items-center justify-center  '>
                        
                        <input type='text' readOnly value={quantity} className='text-lg outline-none border text-center border-teal-600 p-1  rounded-md bg-transparent h-8 w-8 ' />
                       
                    </div>
                    <div onClick={()=> setQuantity(quantity = quantity + 1) } className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 hover:rounded-full cursor-pointer'>
                        <p className='text-3xl  font-light'>+</p>
                    </div>
                    
                </div>
                {
                    quantity > 0 && <button onClick={handleSubmit} className='font-light hover:text-white  hover:shadow-md border hover:transition-all hover:ease-in-out hover:duration-200 hover:bg-teal-600 border-gray-400 text-sm uppercase p-2'>add to card</button>
                }
            </div>
        </div>
        </div>
        
        
        <Newsletters />
        <Footer />
    </div>
  )
}

export default Product