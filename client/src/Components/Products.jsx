import React, { useState } from 'react'
import {popularProducts} from '../data'
import {AiOutlineShopping} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Products = ({param, filter, sorting}) => {
    
  const [products, setProducts] = useState([]);
  const [filterProducts, setfilterProducts] = useState([]);
 
  useEffect(() => {
    const getProducts = async()=>{
        try{
            const res = await axios.get(param?.category ? `http://localhost:5000/api/products?category=${param?.category}` : "http://localhost:5000/api/products")
            setProducts(res.data);            
        }
        catch(error){
            console.log(error)
        }
        
    }
    getProducts()
  },[param])

  useEffect(()=>{
   setfilterProducts(products)
    // magic filter objects 
    filter && setfilterProducts(
        products.filter((item) =>  
            Object.entries(filter).every(([key, value]) =>
                item[key].includes(value)
            )
        )
    )
  },[filter, products])

 
  useEffect(()=>{
    
     if(sorting?.sort === 'newest'){
         setfilterProducts(()=>[...filterProducts].sort((a, b) => a.createdAt - b.createdAt ))
        }
    
    else if(sorting?.sort === 'lowest'){
        setfilterProducts(()=>[...filterProducts].sort((a, b) => a.price - b.price ))
    }
    else{
        setfilterProducts(()=>
            [...filterProducts].sort((a, b) => b.price - a.price  ))
    }
   
  },[sorting])

// sort
//   const  number = [1,2,3,4,5]
//   const sortedNumber =  [...number].sort((a, b)=> b - a) 
    
//   console.log(sortedNumber)
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row  flex- gap-6 px-10 justify-center my-10'>
        <div class="w-full h-full flex flex-wrap items-center justify-center gap-4 ">
        { filterProducts.length > 0 ?
             filterProducts.map(product => (
                
                    <div key={product._id} className=' shadow-md bg-white relative max-h-[390px] rounded-lg'>
                    <img src={product.img} alt="" className='max-h-[390px] flex-1 p-14 rounded-lg' />
                    <div className='w-full h-full rounded-lg cursor-pointer  hover:bg-gray-300 hover:rounded-lg hover:bg-opacity-50 transition-all ease-out duration-100 flex items-center justify-center gap-3 absolute top-0 bottom-0 m-auto'>
                        <div className='rounded-full bg-white hover:bg-slate-100 cursor-pointer bg-opacity-50 w-10 h-10 flex'>
                            <AiOutlineShopping fontSize={26} className='m-auto'  />
                        </div>
                        <Link to={`/product/${product._id}`}>
                        <div className='rounded-full bg-white hover:bg-slate-100 cursor-pointer bg-opacity-50 w-10 h-10 flex'>
                            <AiOutlineSearch fontSize={26} className='m-auto'  />
                        </div>
                        </Link>
                        <div className='rounded-full bg-white hover:bg-slate-100 cursor-pointer bg-opacity-50 w-10 h-10 flex'>
                            <AiOutlineHeart fontSize={26} className='m-auto'  />
                        </div>
                    </div>
                    </div>
                
                
            ))
            : (<div className=''>
                <p className='text-xl font-light'>Sorry ! No such product found in the stock</p>
            </div>)
        }
        </div>
    </div>
  )
}

export default Products