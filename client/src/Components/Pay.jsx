import axios from 'axios'
import React from 'react'

const Pay = ({cartList}) => {
  const handleCheckout = async() => {
    try{
        const res =  await axios.post('http://localhost:5000/api/create-checkout-session', cartList)
        
        if(res?.data.url){
            window.location.href = res?.data.url
        }
        
    }
    catch(error){
        console.log(error.message)
    }
  }
  return (
    <>
        <button onClick={() => handleCheckout()}  className='uppercase text-white  hover:shadow-md  hover:transition-all hover:ease-in-out hover:duration-200 hover:bg-gray-400 w-full sm:w-[10rem] bg-gray-500 p-2 border border-gray-400 font-light text-xs '>checkout now</button>
    </>
  )
}

export default Pay